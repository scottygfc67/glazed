import { createStorefrontApiClient } from '@shopify/storefront-api-client';

const client = createStorefrontApiClient({
  storeDomain: process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN || 'zfamh0-xh.myshopify.com',
  apiVersion: '2024-10',
  publicAccessToken: process.env.SHOPIFY_PUBLIC_ACCESS_TOKEN || 'cfa01513c4bc0e8b171a14d579c57603',
});

export const shopifyClient = client;

// Product and variant IDs from environment variables
export const PRODUCT_ID = process.env.SHOPIFY_PRODUCT_ID || '10361268568401';
export const VARIANT_ID = process.env.SHOPIFY_VARIANT_ID || '51884459065681';

// GraphQL queries
export const GET_PRODUCT_QUERY = `
  query getProduct($id: ID!) {
    product(id: $id) {
      id
      title
      description
      handle
      vendor
      productType
      tags
      createdAt
      updatedAt
      publishedAt
      featuredImage {
        id
        url
        altText
        width
        height
      }
      images(first: 10) {
        edges {
          node {
            id
            url
            altText
            width
            height
          }
        }
      }
      variants(first: 10) {
        edges {
          node {
            id
            title
            price {
              amount
              currencyCode
            }
            compareAtPrice {
              amount
              currencyCode
            }
            availableForSale
            selectedOptions {
              name
              value
            }
            image {
              id
              url
              altText
              width
              height
            }
          }
        }
      }
      options {
        id
        name
        values
      }
      seo {
        title
        description
      }
    }
  }
`;

export const GET_PRODUCTS_QUERY = `
  query getProducts($first: Int!, $query: String) {
    products(first: $first, query: $query) {
      edges {
        node {
          id
          title
          handle
          featuredImage {
            id
            url
            altText
            width
            height
          }
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
            maxVariantPrice {
              amount
              currencyCode
            }
          }
          variants(first: 1) {
            edges {
              node {
                id
                availableForSale
              }
            }
          }
        }
      }
    }
  }
`;

// Cart creation mutation
export const CART_CREATE_MUTATION = `
  mutation cartCreate($lines: [CartLineInput!]) {
    cartCreate(input: { lines: $lines }) {
      cart { 
        id 
        checkoutUrl 
      }
      userErrors { 
        field 
        message 
      }
    }
  }
`;

// Helper functions
export async function getProduct(id: string = PRODUCT_ID) {
  try {
    const response = await client.request(GET_PRODUCT_QUERY, {
      variables: { id: `gid://shopify/Product/${id}` }
    });
    return response.data?.product;
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
}

export async function getProducts(first: number = 10, query?: string) {
  try {
    const response = await client.request(GET_PRODUCTS_QUERY, {
      variables: { first, query }
    });
    return response.data?.products?.edges?.map((edge: any) => edge.node) || [];
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

// Create Shopify cart and get checkout URL (recommended method)
export async function createShopifyCartAndGetCheckoutUrl(variantId: string, quantity: number) {
  const domain = process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN || 'zfamh0-xh.myshopify.com';
  const token = process.env.SHOPIFY_PUBLIC_ACCESS_TOKEN || 'cfa01513c4bc0e8b171a14d579c57603';
  const endpoint = `https://${domain}/api/2024-10/graphql.json`;

  // Ensure variantId is in the correct format
  const formattedVariantId = variantId.startsWith('gid://') ? variantId : `gid://shopify/ProductVariant/${variantId}`;

  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': token,
    },
    body: JSON.stringify({
      query: CART_CREATE_MUTATION,
      variables: { 
        lines: [{ 
          merchandiseId: formattedVariantId, 
          quantity 
        }] 
      },
    }),
    cache: 'no-store',
  });

  const json = await res.json();
  
  if (json.errors) {
    console.error('GraphQL errors:', json.errors);
    throw new Error(JSON.stringify(json.errors, null, 2));
  }
  
  const url = json?.data?.cartCreate?.cart?.checkoutUrl as string | undefined;
  
  if (!url) {
    console.error('No checkout URL returned:', json);
    throw new Error(JSON.stringify(json?.data?.cartCreate?.userErrors ?? json, null, 2));
  }
  
  return url;
}

// Fallback: Cart permalink URL
export function cartPermalinkUrl(variantId: string, quantity: number) {
  const domain = process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN || 'zfamh0-xh.myshopify.com';
  return `https://${domain}/cart/${variantId}:${quantity}`;
}

// Legacy function for backward compatibility
export function createCheckoutUrl(variantId: string = VARIANT_ID, quantity: number = 1) {
  return cartPermalinkUrl(variantId, quantity);
}

// Format price
export function formatPrice(amount: string, currencyCode: string) {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: currencyCode,
  }).format(parseFloat(amount));
}