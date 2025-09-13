<<<<<<< HEAD
# Shopify Static Site — Comprehensive Setup & Pages Guide

A single, comprehensive **.md** guide to set up a lightweight static site that sells a single Shopify product using your provided IDs and assets.

* **Product ID:** `SHOPIFY_PRODUCT_ID=10361268568401`
* **Variant ID:** `SHOPIFY_VARIANT_ID=51884459065681`
  *(You originally wrote `SHOPFIY_VARIENT_ID`; corrected spelling above for consistency.)*
* **Assets:** `grainy.jpg` (hero background), `logotran.png` (navbar & favicon)

This document covers:

1. Project structure and conventions
2. Quick start (zero‑JS “Buy Now” link that *always works*)
3. Enhanced setup with Shopify Buy Button SDK (cart, quantity, etc.)
4. Pages: Home, Product, Cart, Checkout, FAQ, About, Contact, Privacy, Terms, 404, Accessibility, and a minimal CMS-like Markdown pipeline
5. Styling (CSS utility sheet), dark mode, favicons, Open Graph, and SEO
6. Deployment (GitHub Pages / Netlify / Vercel), caching, and performance tips
7. Testing checklist and troubleshooting
8. Optional: Storefront API approach (if/when you have token & domain)

---

## 1) Project Structure

```
shop-site/
├─ public/
│  ├─ grainy.jpg                 # Hero background
│  ├─ logo.png                   # Navbar logo & favicon source
│  ├─ favicon.ico                # (optional) generated from logo.png
│  ├─ robots.txt
│  ├─ sitemap.xml                # (optional; see SEO section)
│  └─ og-image.png               # (optional OG image)
├─ src/
│  ├─ css/
│  │  └─ styles.css              # Global styles + utilities
│  ├─ js/
│  │  ├─ buy-button.js           # Shopify Buy Button SDK integration (optional)
│  │  └─ storefront-api.js       # Storefront API (optional alternative)
│  ├─ pages/
│  │  ├─ index.html              # Home (hero uses grainy.jpg)
│  │  ├─ product.html            # Product details + Buy Button/cart
│  │  ├─ cart.html               # Lightweight cart (optional; SDK)
│  │  ├─ checkout.html           # Redirector/notes about checkout
│  │  ├─ faq.html
│  │  ├─ about.html
│  │  ├─ contact.html
│  │  ├─ privacy.html
│  │  ├─ terms.html
│  │  └─ 404.html
│  └─ partials/
│     ├─ head.html               # Meta, OG, CSS includes
│     ├─ header.html             # Navbar w/ logo.png
│     └─ footer.html
├─ .env.example                  # For tokens (if using SDK/API)
├─ package.json                  # (optional) if you use a bundler
├─ README.md                     # This guide or a short pointer to it
└─ index.html                    # Root redirect to /src/pages/index.html (optional)
```

> **Tip:** For purely static hosting (GitHub Pages, Netlify, Vercel), you can keep everything inside a `/` directory and publish `/`. The above structure is just to stay organized.

---

## 2) Quick Start (No-JS Buy Link That Always Works)

This approach needs **no token and no JavaScript**. It sends customers straight to Shopify’s secure checkout with the selected variant and quantity.

### 2.1 The Magic URL

```
https://YOUR_SHOP.myshopify.com/cart/51884459065681:1
```

* Replace `YOUR_SHOP` with your store’s subdomain.
* `51884459065681` is your **variant ID**.
* `:1` is the quantity (change as needed, e.g., `:2`).

> You can append multiple variant lines with commas if you ever sell multiple items, e.g., `/cart/VARIANT_A:1,VARIANT_B:2`.

### 2.2 Minimal “Buy Now” Button (works on any page)

```html
<a class="btn btn-primary" href="https://YOUR_SHOP.myshopify.com/cart/51884459065681:1" rel="nofollow noopener" target="_blank">
  Buy Now
</a>
```

Use this immediately on `index.html` and `product.html`. You can progressively enhance later with the SDK.

---

## 3) Enhanced Setup: Shopify Buy Button SDK (Optional)

If you want an embedded product card, image gallery, quantity selector, and a slide-out cart — use Shopify’s Buy Button SDK. You’ll need:

* **Store domain:** `YOUR_SHOP.myshopify.com`
* **Storefront Access Token** (create in Shopify Admin → Apps → Develop apps → Storefront API tokens)

### 3.1 Environment Variables

Create a `.env` (not committed) from `.env.example`:

```
SHOPIFY_STORE_DOMAIN=YOUR_SHOP.myshopify.com
SHOPIFY_STOREFRONT_TOKEN=shpat_or_stf_XXXXXXXX
SHOPIFY_PRODUCT_ID=10361268568401
SHOPIFY_VARIANT_ID=51884459065681
```

> You can also inline these in `buy-button.js` if you’re not building with a bundler.

### 3.2 Include the SDK

Add this to your page `<head>` or before `</body>`:

```html
<script src="https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js" async></script>
```

### 3.3 Initialize and Render a Product Component

Create `src/js/buy-button.js`:

```html
<script>
(function() {
  function loadClient(callback){
    if (window.ShopifyBuy && window.ShopifyBuy.UI) {
      callback();
      return;
    }
    if (window.ShopifyBuy) {
      window.ShopifyBuy.buildClient({
        domain: 'YOUR_SHOP.myshopify.com',
        storefrontAccessToken: 'SHOPIFY_STOREFRONT_TOKEN'
      });
      ShopifyBuy.UI.onReady(client).then(callback);
      return;
    }
    // Fallback: poll until SDK loads
    var interval = setInterval(function(){
      if (window.ShopifyBuy && window.ShopifyBuy.UI) {
        clearInterval(interval);
        callback();
      }
    }, 100);
  }

  function client(){
    return ShopifyBuy.buildClient({
      domain: 'YOUR_SHOP.myshopify.com',
      storefrontAccessToken: 'SHOPIFY_STOREFRONT_TOKEN'
    });
  }

  loadClient(function(){
    ShopifyBuy.UI.onReady(client()).then(function(ui) {
      ui.createComponent('product', {
        id: '10361268568401', // SHOPIFY_PRODUCT_ID
        node: document.getElementById('buy-button-root'),
        moneyFormat: '%C2%A3%7B%7Bamount%7D%7D', // GBP (£) example
        options: {
          product: {
            iframe: false,
            buttonDestination: 'checkout',
            layout: 'vertical',
            contents: {
              img: true,
              imgWithCarousel: true,
              title: true,
              price: true,
              options: true,
              quantity: true,
              button: true
            },
            text: {
              button: 'Buy Now'
            },
          },
          cart: {
            startOpen: false,
            popup: false
          },
          modalProduct: {
            contents: {
              img: true,
              title: true,
              price: true,
              options: true,
              quantity: true,
              button: true
            },
          },
          toggle: {
            sticky: true
          }
        }
      });
    });
  });
})();
</script>
```

On your `product.html`, add the mounting node and script:

```html
<div id="buy-button-root"></div>
<script src="/src/js/buy-button.js" defer></script>
```

> **Note:** The Buy Button SDK also supports adding items to a cart instead of direct-to-checkout. Adjust `buttonDestination` to `'cart'` if you prefer a slide-out cart.

---

## 4) Pages

Each page below includes a **ready-to-paste** skeleton. Adjust copy as needed.

### 4.1 Partials: `head.html`, `header.html`, `footer.html`

**`src/partials/head.html`**

```html
<!-- Global <head> partial -->
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{{ PAGE_TITLE }}</title>
<meta name="description" content="{{ PAGE_DESCRIPTION }}">
<link rel="icon" href="/public/favicon.ico">
<link rel="preload" href="/public/grainy.jpg" as="image">
<link rel="stylesheet" href="/src/css/styles.css">
<meta property="og:title" content="{{ OG_TITLE }}">
<meta property="og:description" content="{{ OG_DESCRIPTION }}">
<meta property="og:type" content="website">
<meta property="og:image" content="/public/og-image.png">
<meta property="og:url" content="{{ CANONICAL_URL }}">
<link rel="canonical" href="{{ CANONICAL_URL }}">
```

**`src/partials/header.html`**

```html
<header class="site-header">
  <div class="container nav">
    <a href="/src/pages/index.html" class="brand">
      <img src="/public/logo.png" alt="Brand Logo" class="logo">
      <span class="brand-text">Your Brand</span>
    </a>
    <nav>
      <ul class="nav-list">
        <li><a href="/src/pages/product.html">Product</a></li>
        <li><a href="/src/pages/faq.html">FAQ</a></li>
        <li><a href="/src/pages/about.html">About</a></li>
        <li><a href="/src/pages/contact.html">Contact</a></li>
      </ul>
    </nav>
  </div>
</header>
```

**`src/partials/footer.html`**

```html
<footer class="site-footer">
  <div class="container footer-grid">
    <div>
      <img src="/public/logo.png" alt="Brand Logo" class="logo small">
      <p>© <span id="year"></span> Your Brand. All rights reserved.</p>
    </div>
    <nav>
      <ul class="footer-links">
        <li><a href="/src/pages/privacy.html">Privacy</a></li>
        <li><a href="/src/pages/terms.html">Terms</a></li>
        <li><a href="/src/pages/404.html">404</a></li>
        <li><a href="/src/pages/accessibility.html">Accessibility</a></li>
      </ul>
    </nav>
  </div>
  <script>document.getElementById('year').textContent = new Date().getFullYear();</script>
</footer>
```

### 4.2 Home (`index.html`)

A minimal hero using `grainy.jpg` and a direct-to-checkout CTA that works today.

```html
<!doctype html>
<html lang="en">
  <head>
    <!--# include file="/src/partials/head.html" -->
    <title>Home — Your Brand</title>
    <meta name="description" content="Your product’s one-liner value proposition.">
  </head>
  <body>
    <!--# include file="/src/partials/header.html" -->

    <section class="hero" style="background-image:url('/public/grainy.jpg');">
      <div class="container hero-inner">
        <h1>Meet the Product</h1>
        <p>Short, sharp pitch about why it’s great.</p>
        <div class="cta-row">
          <a class="btn btn-primary" href="https://YOUR_SHOP.myshopify.com/cart/51884459065681:1" target="_blank" rel="nofollow noopener">Buy Now</a>
          <a class="btn btn-secondary" href="/src/pages/product.html">Learn More</a>
        </div>
      </div>
    </section>

    <section class="features container">
      <div class="grid-3">
        <article><h3>Feature One</h3><p>Explain benefit.</p></article>
        <article><h3>Feature Two</h3><p>Explain benefit.</p></article>
        <article><h3>Feature Three</h3><p>Explain benefit.</p></article>
      </div>
    </section>

    <!--# include file="/src/partials/footer.html" -->
  </body>
</html>
```

### 4.3 Product (`product.html`)

```html
<!doctype html>
<html lang="en">
  <head>
    <!--# include file="/src/partials/head.html" -->
    <title>Product — Your Brand</title>
    <meta name="description" content="Deep dive into features, specs, and price.">
  </head>
  <body>
    <!--# include file="/src/partials/header.html" -->

    <main class="container">
      <header class="stack">
        <h1>Product Name</h1>
        <p class="lede">One paragraph overview of the product.</p>
      </header>

      <!-- Always-works CTA -->
      <p>
        <a class="btn btn-primary" href="https://YOUR_SHOP.myshopify.com/cart/51884459065681:1" target="_blank" rel="nofollow noopener">Buy Now</a>
      </p>

      <!-- Enhanced (optional) Buy Button SDK mount -->
      <div id="buy-button-root" class="card"></div>
      <script src="https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js" async></script>
      <script src="/src/js/buy-button.js" defer></script>

      <section class="stack">
        <h2>What’s Included</h2>
        <ul>
          <li>Item A</li>
          <li>Item B</li>
          <li>Item C</li>
        </ul>
      </section>

      <section class="stack">
        <h2>Specs</h2>
        <table class="specs">
          <tr><th>Dimension</th><td>…</td></tr>
          <tr><th>Material</th><td>…</td></tr>
          <tr><th>Weight</th><td>…</td></tr>
        </table>
      </section>
    </main>

    <!--# include file="/src/partials/footer.html" -->
  </body>
</html>
```

### 4.4 Cart (`cart.html`)

If you rely solely on direct-to-checkout links, you don’t need a cart page. If you use the Buy Button SDK with `buttonDestination: 'cart'`, you may create a light wrapper page:

```html
<!doctype html>
<html lang="en">
  <head>
    <!--# include file="/src/partials/head.html" -->
    <title>Cart — Your Brand</title>
    <meta name="robots" content="noindex">
  </head>
  <body>
    <!--# include file="/src/partials/header.html" -->

    <main class="container">
      <h1>Your Cart</h1>
      <div id="buy-button-root"></div>
      <script src="https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js" async></script>
      <script src="/src/js/buy-button.js" defer></script>
    </main>

    <!--# include file="/src/partials/footer.html" -->
  </body>
</html>
```

### 4.5 Checkout (`checkout.html`)

A simple page that redirects users to Shopify checkout (using the variant permalink). Useful for tracking or adding notes.

```html
<!doctype html>
<html lang="en">
  <head>
    <!--# include file="/src/partials/head.html" -->
    <meta http-equiv="refresh" content="0; url=https://YOUR_SHOP.myshopify.com/cart/51884459065681:1">
    <title>Redirecting to Checkout…</title>
  </head>
  <body>
    <p class="container">Redirecting to secure checkout… If you’re not redirected, <a href="https://YOUR_SHOP.myshopify.com/cart/51884459065681:1">click here</a>.</p>
  </body>
</html>
```

### 4.6 FAQ (`faq.html`)

```html
<!doctype html>
<html lang="en">
  <head>
    <!--# include file="/src/partials/head.html" -->
    <title>FAQ — Your Brand</title>
    <meta name="description" content="Answers to common questions about shipping, returns, and the product.">
  </head>
  <body>
    <!--# include file="/src/partials/header.html" -->

    <main class="container">
      <h1>Frequently Asked Questions</h1>
      <details class="faq"><summary>What’s the delivery time?</summary><p>Most orders ship within 1–2 business days.</p></details>
      <details class="faq"><summary>What’s the return policy?</summary><p>30-day returns in original condition.</p></details>
      <details class="faq"><summary>Is there a warranty?</summary><p>1-year limited warranty against defects.</p></details>
    </main>

    <!--# include file="/src/partials/footer.html" -->
  </body>
</html>
```

### 4.7 About (`about.html`)

```html
<!doctype html>
<html lang="en">
  <head>
    <!--# include file="/src/partials/head.html" -->
    <title>About — Your Brand</title>
    <meta name="description" content="Our story and why we built this.">
  </head>
  <body>
    <!--# include file="/src/partials/header.html" -->

    <main class="container stack">
      <h1>About Us</h1>
      <p>Tell the origin story, mission, and what sets you apart.</p>
    </main>

    <!--# include file="/src/partials/footer.html" -->
  </body>
</html>
```

### 4.8 Contact (`contact.html`)

```html
<!doctype html>
<html lang="en">
  <head>
    <!--# include file="/src/partials/head.html" -->
    <title>Contact — Your Brand</title>
    <meta name="description" content="Get in touch with our team.">
  </head>
  <body>
    <!--# include file="/src/partials/header.html" -->

    <main class="container stack">
      <h1>Contact</h1>
      <form class="card stack" action="https://formspree.io/f/yourid" method="POST">
        <label>Name<input required name="name" type="text"></label>
        <label>Email<input required name="email" type="email"></label>
        <label>Message<textarea required name="message" rows="5"></textarea></label>
        <button class="btn btn-primary" type="submit">Send</button>
      </form>
    </main>

    <!--# include file="/src/partials/footer.html" -->
  </body>
</html>
```

### 4.9 Privacy (`privacy.html`)

```html
<!doctype html>
<html lang="en">
  <head>
    <!--# include file="/src/partials/head.html" -->
    <title>Privacy Policy — Your Brand</title>
    <meta name="robots" content="noindex">
  </head>
  <body>
    <!--# include file="/src/partials/header.html" -->

    <main class="container stack prose">
      <h1>Privacy Policy</h1>
      <p>Describe what data you collect, why, and how to contact you for data requests.</p>
    </main>

    <!--# include file="/src/partials/footer.html" -->
  </body>
</html>
```

### 4.10 Terms (`terms.html`)

```html
<!doctype html>
<html lang="en">
  <head>
    <!--# include file="/src/partials/head.html" -->
    <title>Terms of Service — Your Brand</title>
    <meta name="robots" content="noindex">
  </head>
  <body>
    <!--# include file="/src/partials/header.html" -->

    <main class="container stack prose">
      <h1>Terms of Service</h1>
      <p>Include purchase terms, pricing, and jurisdiction.</p>
    </main>

    <!--# include file="/src/partials/footer.html" -->
  </body>
</html>
```

### 4.11 404 (`404.html`)

```html
<!doctype html>
<html lang="en">
  <head>
    <!--# include file="/src/partials/head.html" -->
    <title>Page Not Found — Your Brand</title>
    <meta name="robots" content="noindex">
  </head>
  <body>
    <!--# include file="/src/partials/header.html" -->

    <main class="container center">
      <h1>404</h1>
      <p>We couldn’t find that page.</p>
      <a class="btn" href="/src/pages/index.html">Go Home</a>
    </main>

    <!--# include file="/src/partials/footer.html" -->
  </body>
</html>
```

### 4.12 Accessibility (`accessibility.html`)

```html
<!doctype html>
<html lang="en">
  <head>
    <!--# include file="/src/partials/head.html" -->
    <title>Accessibility — Your Brand</title>
  </head>
  <body>
    <!--# include file="/src/partials/header.html" -->

    <main class="container stack prose">
      <h1>Accessibility Statement</h1>
      <p>State your commitment, WCAG target, and contact channel for issues.</p>
    </main>

    <!--# include file="/src/partials/footer.html" -->
  </body>
</html>
```

---

## 5) Styling (CSS), Dark Mode, and Utilities

**`src/css/styles.css`** — compact utility classes + layout and component styles.

```css
:root { --bg: #0f0f10; --fg: #e8e8e8; --muted: #a3a3a3; --brand: #5e8cff; --card: #17181a; }
* { box-sizing: border-box; }
html, body { margin: 0; padding: 0; }
body { font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif; background: var(--bg); color: var(--fg); line-height: 1.6; }
img { max-width: 100%; height: auto; display: block; }
a { color: var(--fg); text-decoration: none; }
a:hover { text-decoration: underline; }
.container { width: min(1100px, 92%); margin: 0 auto; }
.stack > * + * { margin-top: 1rem; }
.center { text-align: center; }
.prose p { max-width: 65ch; }

/* Navbar */
.site-header { position: sticky; top: 0; background: rgba(15,15,16,0.8); backdrop-filter: blur(8px); border-bottom: 1px solid #222; z-index: 20; }
.nav { display: flex; align-items: center; justify-content: space-between; padding: .75rem 0; }
.logo { height: 32px; width: auto; }
.logo.small { height: 24px; }
.brand { display: flex; align-items: center; gap: .5rem; }
.brand-text { font-weight: 600; letter-spacing: .2px; }
.nav-list { display: flex; gap: 1rem; list-style: none; margin: 0; padding: 0; }

/* Hero */
.hero { background-size: cover; background-position: center; padding: 14vmin 0; border-bottom: 1px solid #222; }
.hero-inner { background: rgba(0,0,0,0.35); padding: 2rem; border-radius: 16px; box-shadow: 0 10px 30px rgba(0,0,0,.25); }
.hero h1 { font-size: clamp(2rem, 6vw, 3.25rem); margin: 0 0 .5rem; }
.lede { color: var(--muted); }

/* Buttons */
.btn { display: inline-block; padding: .75rem 1rem; border-radius: 12px; border: 1px solid #2a2a2a; background: #1b1c1f; color: var(--fg); }
.btn:hover { filter: brightness(1.1); }
.btn-primary { background: var(--brand); color: #0b0c0f; border-color: transparent; font-weight: 600; }
.btn-secondary { background: #222; }
.cta-row { display: flex; gap: .75rem; flex-wrap: wrap; }

/* Cards & grids */
.card { background: var(--card); border: 1px solid #222; border-radius: 14px; padding: 1rem; }
.grid-3 { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem; }

/* Tables */
.specs { width: 100%; border-collapse: collapse; }
.specs th, .specs td { border-bottom: 1px solid #222; text-align: left; padding: .5rem; }

/* Footer */
.site-footer { margin-top: 3rem; padding: 2rem 0; border-top: 1px solid #222; color: var(--muted); }
.footer-grid { display: grid; grid-template-columns: 1fr auto; gap: 1rem; align-items: center; }
.footer-links { display: flex; gap: 1rem; list-style: none; padding: 0; margin: 0; }

/* Forms */
label { display: grid; gap: .35rem; }
input, textarea { background: #121316; color: var(--fg); border: 1px solid #2a2a2a; border-radius: 10px; padding: .6rem .75rem; }
input:focus, textarea:focus { outline: 2px solid var(--brand); border-color: transparent; }

/* Responsive tweaks */
@media (max-width: 640px) {
  .nav-list { gap: .5rem; }
}
```

> If `logo.png` is light, consider adding a `filter: drop-shadow(0 1px 1px rgba(0,0,0,.6))` on `.logo` for contrast.

---

## 6) SEO, Metadata, and Favicons

1. **Title & description**: unique on each page.
2. **Open Graph**: set `og:title`, `og:description`, `og:image`, and canonical URLs.
3. **Robots**: allow indexing for public pages (noindex for legal/system pages as needed).
4. **Sitemap**: generate a simple `sitemap.xml` listing the main pages.
5. **Favicons**: generate `favicon.ico` from `logo.png` (use any favicon generator offline or online).

**`public/robots.txt`**

```
User-agent: *
Allow: /
Sitemap: https://YOUR_DOMAIN/sitemap.xml
```

**(Optional) `public/sitemap.xml`** (update the URLs)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://YOUR_DOMAIN/</loc></url>
  <url><loc>https://YOUR_DOMAIN/src/pages/product.html</loc></url>
  <url><loc>https://YOUR_DOMAIN/src/pages/faq.html</loc></url>
  <url><loc>https://YOUR_DOMAIN/src/pages/about.html</loc></url>
  <url><loc>https://YOUR_DOMAIN/src/pages/contact.html</loc></url>
  <url><loc>https://YOUR_DOMAIN/src/pages/privacy.html</loc></url>
  <url><loc>https://YOUR_DOMAIN/src/pages/terms.html</loc></url>
  <url><loc>https://YOUR_DOMAIN/src/pages/404.html</loc></url>
  <url><loc>https://YOUR_DOMAIN/src/pages/accessibility.html</loc></url>
</urlset>
```

---

## 7) Deployment

### 7.1 GitHub Pages

* Put the site in a repo and set **Pages** to serve `/` from the `main` branch (or `/docs`).
* If you need clean URLs, consider a static site generator or custom 404 routing.

### 7.2 Netlify

* Drag-and-drop the folder or connect the repo.
* If using bundlers, set build command and publish directory accordingly.
* Add **Environment Variables** (store domain/token) if using SDK.

### 7.3 Vercel

* Import Git repo and select the framework = “Other”.
* Configure output directory (root or `dist`).
* Add **Environment Variables** if using SDK or Storefront API.

### 7.4 Caching & Performance

* Preload `grainy.jpg` (already in `head.html`).
* Compress images (use `webp/avif` variants if possible).
* Minify CSS and inline critical CSS on `index.html` if needed.

---

## 8) Testing Checklist

* [ ] **Buy link** opens `https://YOUR_SHOP.myshopify.com/cart/51884459065681:1` in a new tab and shows correct product.
* [ ] **Navbar logo** appears on every page; links back to Home.
* [ ] **Hero** shows `grainy.jpg` on Home; text remains readable.
* [ ] **SEO**: unique title/description per page; Open Graph present.
* [ ] **Forms**: Contact form submits successfully (update endpoint).
* [ ] **Accessibility**: check color contrast (WCAG AA), focus indicators, `alt` text for `logo.png`.
* [ ] **Mobile**: test navigation and hero readability at 360px width.
* [ ] **404**: broken route renders `404.html`.

---

## 9) Troubleshooting

* **I don’t have a token yet**: Use the **Quick Start** buy link. It requires no token.
* **Variant not found**: Confirm the variant ID (`51884459065681`) is published to Online Store channel and the product is active.
* **Currency mismatch**: Adjust `moneyFormat` in `buy-button.js` (GBP example provided).
* **CORS/SDK errors**: Ensure correct `domain` and `storefrontAccessToken`. Token must be a *Storefront API* token, not Admin token.
* **Images look soft**: Export `logo.png` at 2× or 3× size and set CSS `height` so browsers downscale.

---

## 10) Optional: Storefront API Fetch (No SDK)

If you prefer hand-rolled fetch calls (requires token + domain):

```html
<script>
const domain = 'YOUR_SHOP.myshopify.com';
const token  = 'SHOPIFY_STOREFRONT_TOKEN';
const endpoint = `https://${domain}/api/2024-07/graphql.json`;

async function fetchProduct(id) {
  const query = `#graphql
    query($id: ID!) {
      product(id: $id) {
        title
        description
        featuredImage { url altText }
        variants(first: 10) { edges { node { id title price { amount currencyCode } } } }
      }
    }
  `;
  const variables = { id };
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': token
    },
    body: JSON.stringify({ query, variables })
  });
  return res.json();
}

// Example Shopify GID format for products: gid://shopify/Product/10361268568401
fetchProduct('gid://shopify/Product/10361268568401').then(console.log);
</script>
```

To send a user to checkout for a given variant quantity via Storefront API, create a checkout with a line item and then redirect to the `webUrl` received in the response — but again, for speed use the **Quick Start** URL.

---

## 11) Short How-To: Add Another Variant or Bundle

* **Another quantity**: change the `:1` portion of the URL to the quantity you want.
* **Bundle with a second variant**: `/cart/51884459065681:1,SECOND_VARIANT_ID:1`
* **Preapply a discount**: append `?discount=CODE` to the URL.

---

## 12) Final Notes

* Replace all placeholders (`YOUR_SHOP`, `YOUR_DOMAIN`, token, copy) as you go.
* Keep this .md in your repo as `GUIDE.md` or `SHOPIFY_SITE.md` for teammates.
* The **Quick Start** link means you can ship the site fast and iterate later with the SDK.

Good luck — ship it! 🚀
=======

# 🍯 GLAZED QR Reward Page Redesign Prompt (Windurf)

## 🎯 Project Goal

Redesign the `/qr` landing page users reach after scanning the **GLAZED: Runny Honey Hair Drizzle** QR code on the packaging. This must fully match the vibrant, juicy, honey-drip, candy-gloss identity of the product — visually linked to the packaging, bottle design, and dripping pop-art goddess aesthetic.

---

## 🎨 Brand Identity

| Element            | Style |
|--------------------|-------|
| **Color Palette**  | Vibrant baby blue (#77C9F1), syrupy gold, bubblegum pink, cream vanilla, neon accents |
| **Texture**        | Dripping honey, gloss shine, sparkle overlays, glaze flow |
| **Tone**           | Bold, femme-forward, cheeky, empowering, sugar-slick |
| **Inspiration**    | Comic book cover art, Lisa Frank meets Glossier, digital donut shop meets high-gloss glam |

---

## 🧁 Page Components

### 💥 Hero Header
- Background: **Full-bleed baby blue** with animated **honey drips from the top**
- Illustration: **Cartoon Glazed Girl** or **mouth open with glaze dripping**
- Text in pop-art font:
  - **“THANK YOU, GLAZED GODDESS!”**
  - Sub: “Drop your 5-star drip & unlock your reward ✨”

### ⏰ Countdown Timer
- Embedded in a **golden dripping donut** or **glossy syrup bubble**
- Example: `Special glaze code expires in: 04:27`
- Animated sparkles around it

### ⭐️ Star Rating UI
- Replace default stars with **3D dripping gold stars**
- Hover state: shimmer or sparkle effect

### 📝 Form Redesign
- **Input Field**:
  - Styled like a **glaze bottle label**
  - Rounded, creamy beige background, gold outline, honey drizzle accents
  - Label: `Where should we drizzle your code?`
  - Placeholder: `your@glow.com`

### 📤 Upload Section
- Drop zone shaped like a **dripping frosting tray** or donut
- Icon: cartoon camera in a glaze splash
- Button:
  - Honey gold pill-shaped with hover animation
  - Text: `Upload My 5-Star Screenshot 🍯`

### 💥 Submit Button
- Text: **“CLAIM MY 40% OFF GLASSY CODE”**
- Style: Giant honey droplet with shine & bounce animation

---

## 🔮 Background Details
- Floating pink-glazed donuts
- Glossy starbursts
- Dripping lines from the top
- Sparkles + bubble animations
- Subtle halftone comic texture overlay

---

## 📱 Mobile Friendly
- Stacked layout for mobile screens
- Drips and visuals scale properly
- CTA remains visible

---

## 🌟 Brand References
- Glazed tongue box illustration
- Syrupy honey bottle design
- Pink sprinkle donut visuals
- Baby blue Snapchat QR panel styling

---

## 💅 Bonus Visuals
- Donut mascot or glaze bottle with eyes/tongue
- Hover Easter eggs on countdown
- Drip-on-scroll animation
- Footer tagline: **"Glaze Today. Glow Tomorrow."**

---

## 🧰 Optional Add-ons
- Figma layout file
- Visual mockups
- Front-end build guide
>>>>>>> 930945056a68ddd4da0346fdc74fff18f6f5c66e
