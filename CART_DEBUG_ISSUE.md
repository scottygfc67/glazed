# Cart Functionality Debug Issue

## Problem Summary
The cart functionality is not working and the "Buy Now" button is not linking to Shopify checkout properly. The checkout URL generation is failing.

## Current Implementation

### 1. Checkout Utility (`lib/checkout.ts`)
```typescript
export function getDomain(): string {
  const domain = process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN?.trim();
  if (!domain) throw new Error('NEXT_PUBLIC_SHOPIFY_DOMAIN is missing');
  return domain.replace(/^https?:\/\//, '');
}

export function ensureGid(variantId: string): string {
  // Accepts either a GraphQL GID or a legacy numeric ID and returns a GID
  if (!variantId) throw new Error('variantId is required');
  const isGid = variantId.startsWith('gid://shopify/ProductVariant/');
  if (isGid) return variantId;
  // if it's URL like .../variants/123? then extract digits
  const numeric = (variantId.match(/\d+/)?.[0]) ?? variantId;
  return `gid://shopify/ProductVariant/${numeric}`;
}

export function cartPermalinkUrl(variantId: string, quantity: number): string {
  const domain = getDomain();
  // Permalinks require the numeric variant ID, not the GID.
  const numeric = (variantId.match(/\d+/)?.[0]) ?? variantId;
  const qty = Math.max(1, Number(quantity) || 1);
  // Append a benign query to bust caches/debug if desired
  return `https://${domain}/cart/${numeric}:${qty}`;
}

export async function createCheckoutUrl(variantId: string, quantity: number): Promise<string> {
  const domain = getDomain();
  const qty = Math.max(1, Number(quantity) || 1);

  // Try Storefront API first (recommended)
  const token = process.env.SHOPIFY_STOREFRONT_API_TOKEN;
  if (token) {
    try {
      const endpoint = `https://${domain}/api/2024-04/graphql.json`;
      const query = `
        mutation cartCreate($lines: [CartLineInput!]!) {
          cartCreate(input: { lines: $lines }) {
            cart { checkoutUrl }
            userErrors { field message }
          }
        }
      `;
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Storefront-Access-Token': token,
        },
        body: JSON.stringify({
          query,
          variables: { lines: [{ merchandiseId: ensureGid(variantId), quantity: qty }] },
        }),
        cache: 'no-store',
      });

      const json = await res.json();
      const url = json?.data?.cartCreate?.cart?.checkoutUrl as string | undefined;
      if (url) return url;

      // Log userErrors to console for debugging
      if (json?.data?.cartCreate?.userErrors?.length) {
        console.warn('Shopify userErrors', json.data.cartCreate.userErrors);
      }
    } catch (err) {
      console.warn('Storefront API checkout failed, falling back to permalink:', err);
    }
  }

  // Fallback: cart permalink (single‑variant)
  return cartPermalinkUrl(variantId, qty);
}
```

### 2. Product Page Implementation (`app/product/page.tsx`)
```typescript
import { createCheckoutUrl } from '@/lib/checkout';

// ... component code ...

const handleCheckout = async () => {
  if (!selectedVariant) return;
  
  try {
    setAddingToCart(true);
    
    // Use the new checkout utility
    const checkoutUrl = await createCheckoutUrl(selectedVariant.id, quantity);
    
    // Redirect to Shopify checkout
    window.location.href = checkoutUrl;
  } catch (error) {
    console.error('Failed to create checkout URL:', error);
    alert('Sorry—checkout unavailable right now. Please try again.');
  } finally {
    setAddingToCart(false);
  }
};

// ... in JSX ...
<button
  onClick={handleCheckout}
  disabled={addingToCart}
  className="inline-flex items-center justify-center rounded-xl bg-brand-500 text-white px-6 sm:px-8 py-3 sm:py-4 shadow-soft hover:bg-brand-600 transition-colors font-medium text-base sm:text-lg disabled:opacity-50"
>
  <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
  {addingToCart ? 'Processing...' : quantity >= 2 ? 'Buy Now — 2 for £29.99 applied' : 'Add to Cart'}
</button>
```

### 3. Environment Variables
```bash
# .env.local (not committed)
NEXT_PUBLIC_SHOPIFY_DOMAIN=zfamh0-xh.myshopify.com
SHOPIFY_STOREFRONT_API_TOKEN=your_storefront_access_token_here
```

### 4. Shopify Product Data Structure
The product data comes from Shopify GraphQL API and the variant ID format is:
```typescript
selectedVariant = {
  id: "gid://shopify/ProductVariant/51884459065681", // GraphQL GID format
  price: {
    amount: "29.99",
    currencyCode: "GBP"
  }
  // ... other variant properties
}
```

## Issues Identified

### 1. Environment Variables
- `NEXT_PUBLIC_SHOPIFY_DOMAIN` is set to `zfamh0-xh.myshopify.com`
- `SHOPIFY_STOREFRONT_API_TOKEN` may not be set or may be invalid
- No error handling for missing environment variables

### 2. Checkout URL Generation
- The `createCheckoutUrl` function tries Storefront API first, then falls back to cart permalink
- Cart permalink format: `https://{domain}/cart/{numericVariantId}:{quantity}`
- Example expected URL: `https://zfamh0-xh.myshopify.com/cart/51884459065681:2`

### 3. Variant ID Handling
- Input: `"gid://shopify/ProductVariant/51884459065681"`
- `ensureGid()` returns: `"gid://shopify/ProductVariant/51884459065681"` (unchanged)
- `cartPermalinkUrl()` extracts: `"51884459065681"` (numeric part)
- Final URL: `https://zfamh0-xh.myshopify.com/cart/51884459065681:2`

## Debugging Steps Needed

### 1. Check Environment Variables
```javascript
console.log('Domain:', process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN);
console.log('Token exists:', !!process.env.SHOPIFY_STOREFRONT_API_TOKEN);
```

### 2. Check Variant ID Processing
```javascript
console.log('Original variant ID:', selectedVariant.id);
console.log('Extracted numeric ID:', selectedVariant.id.match(/\d+/)?.[0]);
console.log('Generated GID:', ensureGid(selectedVariant.id));
```

### 3. Check URL Generation
```javascript
console.log('Generated checkout URL:', checkoutUrl);
console.log('Domain from env:', getDomain());
```

### 4. Test Cart Permalink Manually
Try accessing this URL directly in browser:
`https://zfamh0-xh.myshopify.com/cart/51884459065681:2`

## Expected Behavior
1. User clicks "Buy Now" button
2. `handleCheckout` function is called
3. `createCheckoutUrl` generates a valid Shopify checkout URL
4. User is redirected to Shopify checkout with the selected quantity
5. Shopify handles the 2-for-1 discount logic

## Current Behavior
- Button click triggers the function
- Function may be failing silently or throwing errors
- No redirect to Shopify checkout occurs
- User stays on the product page

## Questions for GPT
1. Is the cart permalink URL format correct for Shopify?
2. Are there any issues with the variant ID extraction logic?
3. Should we be using a different Shopify checkout method?
4. Are there any CORS or authentication issues with the Storefront API?
5. Is the environment variable setup correct for Next.js?

## Additional Context
- Using Next.js 15.5.3 with Turbopack
- Shopify store domain: `zfamh0-xh.myshopify.com`
- Product has variants with GraphQL GID format
- Need to support 2-for-1 discount logic
- Mobile-optimized product page
- No existing cart state management (direct checkout)
