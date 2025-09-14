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
  // Use Shopify's hosted checkout format
  return `https://${domain}/cart/${numeric}:${qty}?checkout[source]=product&checkout[quantity]=${qty}`;
}

export async function createCheckoutUrl(variantId: string, quantity: number): Promise<string> {
  console.log('createCheckoutUrl called with:', { variantId, quantity });
  
  const domain = getDomain();
  const qty = Math.max(1, Number(quantity) || 1);
  
  console.log('Using domain:', domain, 'quantity:', qty);

  // Try Storefront API first (recommended)
  const token = process.env.SHOPIFY_PUBLIC_ACCESS_TOKEN;
  console.log('Token available:', !!token);
  
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
      
      console.log('Making Storefront API request to:', endpoint);
      
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
      console.log('Storefront API response:', json);
      
      const url = json?.data?.cartCreate?.cart?.checkoutUrl as string | undefined;
      if (url) {
        console.log('Checkout URL from Storefront API:', url);
        return url;
      }

      // Log userErrors to console for debugging
      if (json?.data?.cartCreate?.userErrors?.length) {
        console.warn('Shopify userErrors', json.data.cartCreate.userErrors);
      }
    } catch (err) {
      console.warn('Storefront API checkout failed, falling back to permalink:', err);
    }
  }

  // Fallback: cart permalink (single‑variant)
  const permalink = cartPermalinkUrl(variantId, qty);
  console.log('Using permalink fallback:', permalink);
  return permalink;
}
