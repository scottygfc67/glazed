Create a highly mobile‑optimized landing page at /qr that customers reach by scanning a QR code on our packaging. The page motivates shoppers to leave a 5‑star review on TikTok Shop and, after they upload a screenshot of their posted review, instantly unlocks a 40% off coupon. Visual language must match our brand’s baby blue / honey yellow look from the packaging and bottle artwork (assets provided). 

GLAZED

0) Tech + Project Setup

Framework: Next.js 14 (App Router) + TypeScript

Styling: Tailwind CSS (JIT). Use CSS variables for brand colors.

File uploads: use one of:

Cloudinary unsigned upload (quickest) or

UploadThing (Vercel-friendly) or

S3 via a simple /api/presign endpoint.

Email (optional but preferred): Resend (to email the code + receipt of submission).

Analytics: TikTok Pixel (primary), optional GA4.

A11y: WCAG 2.2 AA.

Perf: Lighthouse ≥ 95 mobile.

1) Route & Page Anatomy

Route: /qr

Meta:

Title: “GLAZED: 40% Off — Thanks for Your Review!”

Description: “Leave a 5‑star TikTok Shop review for GLAZED. Upload a quick screenshot to unlock a 40% off coupon instantly.”

Open Graph image: composite of bottle + dripping honey motif.

Theme color: baby blue.

Sections (single scroll; mobile‑first)

Sticky Brand Bar (top)

Left: mini logo (honey drip mark).

Right: “Need help?” opens bottom sheet with FAQ.

Hero

Big, bold headline: “Glaze Today. Glow Tomorrow.”

Subhead: “Post a 5‑star TikTok Shop review, upload a quick screenshot, and snag 40% OFF your next bottle.”

Product image carousel (swipeable) using provided assets.

Trust chips: “< 60s to complete”, “Instant code”, “Secure upload”.

How It Works (3 cards)

Buy & Review

Screenshot your posted 5★ review

Upload → Unlock 40%
Each card tappable; expands with one‑sentence tip.

Upload Gate (primary CTA)

Email input (required) + order # (optional)

“Upload review screenshot” button → file picker & camera (accept image/*)

Live preview, client‑side crop/rotate, size limit 8 MB, formats: JPG/PNG/HEIC/WEBP.

On successful upload: instantly reveal coupon code card and copy button.

Coupon Reveal

Large coupon tile with confetti micro‑animation:

“YOUR 40% OFF CODE”

Code in mono font + copy‑to‑clipboard

“Apply at checkout” + deep link button to the store.

If email provided, show “We’ve also emailed your code.”

FAQ (accordion)

“How do I find my TikTok Shop review?” with 4 screenshot tips.

“What qualifies?” (Must clearly show 5★, product title, and your username).

“When will it work?” (Immediately; one code per order).

“Privacy?” (We store only what’s needed; see Privacy below).

Footer

Links: Privacy, Terms, Contact.

Small print: “TikTok is a trademark… not affiliated.”

2) Visual Direction

Palette (CSS custom props — approximate from packaging/bottle):

:root{
  --glz-blue-50:#E6F7FF;
  --glz-blue:#29B7E6;   /* baby blue background */
  --glz-honey:#F4B400;  /* honey yellow */
  --glz-cream:#FFF4DC;  /* label cream */
  --glz-rose:#FF3B8D;   /* accent from 'GLAZED:' text */
  --ink:#101418;
}


Layout & UI

Big tap targets (min 48px).

Single‑column, carded layout with soft shadows and rounded‑2xl.

Honey drip top border on Hero and Coupon tile (SVG).

Micro‑sparkle icons around product image (subtle).

Motion: 150–200ms ease‑out hover/tap scales; confetti burst on coupon reveal.

Typography

Headings: “Poppins” (700/800).

Body/UI: “Inter” (400/600).

Coupon code: mono (e.g., “JetBrains Mono”).

Assets

Use the two attached pack/bottle images for hero & carousel (optimize to WebP, lazy‑load).

/public/brand/boxfront.png

/public/brand/bottle.jpeg

Optional sticker: round “40% OFF” badge.

3) UX Flows & Logic
A) Upload → Unlock (client + server)

User enters email (required). Basic regex + MX hint; show inline errors.

Tap Upload → accept from camera or library.

Client validation: type, size, min dimensions 800×800.

Optional client redaction helper: toggle to blur personal info (uses canvas gaussian blur on user-chosen area).

Upload to provider. Store path: reviews/{date}/{hash}.{ext}.

On server (API route):

Verify MIME, generate a submission ID and unique, one‑time 40% code:

Format: GLAZED-40-{XXXXXX} where XXXXXX is base32 of crypto‑random 4 bytes.

Persist row: {id, email, storage_url, created_at, code, status:'issued'}.

(Optional) Send transactional email with code via Resend.

Respond with JSON { code, deepLink }.

UI swaps to Coupon Reveal state; shows code + copy button and “Shop now” CTA.

Note: Do not block code issuance while waiting for manual review; we’ll spot‑audit later. Include an admin tag field for later moderation (status: 'approved' | 'flagged').

B) Guardrails / Anti‑abuse

Rate‑limit by IP + email (5/day).

Hash the image (pHash) client‑side to catch exact re‑uses; include in payload.

One active code per email per 30 days; surface friendly error with “Already got a code?” help.

4) Components (Tailwind + TSX)

Build as isolated components in /app/(qr)/qr/page.tsx with a components/qr/ folder.

<HoneyDripBorder /> – SVG top edge used in Hero and Coupon.

<ProductCarousel images=[...] /> – swipeable (keen‑slider or embla).

<HowItWorks /> – three cards with icons and short copy.

<UploadCard /> – email + upload, preview, progress bar, submit button.

<CouponCard code="GLAZED-40-XXXXXX" /> – large code tile + copy button.

<Faq /> – accordion.

<BottomSheetHelp /> – contact and tips.

Sample pseudo‑markup
<main className="min-h-dvh bg-[var(--glz-blue)] text-[var(--ink)]">
  <Header />
  <section className="px-4 pb-8">
    <Hero />
    <HowItWorks />
    {unlocked ? <CouponCard code={code}/> : <UploadCard onUnlock={setCode}/>}
    <Faq />
  </section>
  <Footer />
</main>

5) Copy (ready to paste)

Hero H1:
Get 40% OFF — Just For Your 5★ TikTok Review

Subhead:
Post your review, upload a quick screenshot here, and your 40% code appears instantly.

CTA Button (pre‑upload):
Upload Screenshot

Microcopy under upload:
“Show your review with the 5★, your username, and the product title. Clear and readable please!”

Success Title:
Sweet! Your Code Is Ready 🍯

Success Body:
“Use this code at checkout within 30 days. We’ve also emailed it to you.”

Code Button:
Copy Code

Shop CTA:
Shop GLAZED Now

FAQ bullets (concise):

Where do I leave a review? On your TikTok Shop orders page → “Write a review”.

What counts? A posted 5★ review for GLAZED with a visible screenshot.

Why email? To send your code and reduce fraud. We never sell your data.

6) Form & Upload Requirements

Fields: email (required), order number (optional), screenshot file (required).

Accept: image/* with capture preferred (capture="environment").

Limits: max 8 MB; min ~800px; 1 file only.

Preview: contain fit, pinch‑zoom, tap to rotate 90°.

States: idle → picking → validating → uploading (progress) → success (code) or error (retry).

Accessibility: input labels, describe‑by hints, focus management on errors, keyboard navigable.

Privacy note (below button): “Your screenshot is used only to confirm your review. See Privacy.”

7) Back‑End (simple)
API: POST /api/review-submission

Req body: { email, orderNumber?, fileKey, fileHash? }
Server steps:

Verify fileKey exists in storage.

Create row in submissions table / KV.

Generate coupon:

Preferred: call ecommerce platform or coupon service to create a single‑use 40% code with 30‑day expiry.

Fallback: generate formatted token; maintain allowlist server‑side.

Return { code, deepLink:"/discount/{code}" }.

Admin (optional)

Simple /admin/submissions list with status filter and thumbnail; enable mark approved/flagged.

8) TikTok Pixel & Events

Base pixel on route load.

Fire events:

SubmitApplication when upload starts.

CompleteRegistration when email captured.

GenerateLead when code is issued.
Include email as advanced matching (hashed).

9) QA Checklist (mobile first)

Tap targets ≥ 48px; page usable one‑handed.

Works on iOS Safari, Android Chrome.

HEIC support tested (iOS photos).

Copy‑to‑clipboard works reliably (fallback reveals long‑press field).

Upload from camera rolls without orientation bugs (EXIF fix).

Lighthouse mobile ≥ 95; CLS < 0.05.

a11y: color contrast ≥ 4.5:1; focus states visible.

10) Legal / Policy

One coupon per customer per 30 days.

Code valid 30 days from issue.

Review incentive disclosure: “By uploading a screenshot of your review you agree to receive a promotional code in return.”

Privacy link: explain data retention and deletion upon request.

11) Tailwind Token Starter (drop into globals.css)
:root{
  --glz-blue:#29B7E6;
  --glz-blue-50:#E6F7FF;
  --glz-honey:#F4B400;
  --glz-cream:#FFF4DC;
  --glz-rose:#FF3B8D;
  --ink:#101418;
}
.honey-card{ @apply bg-[var(--glz-cream)] rounded-2xl shadow-lg; }
.btn-primary{ @apply bg-[var(--glz-honey)] text-[var(--ink)] font-semibold rounded-xl px-5 py-3; }

12) Assets To Import

/public/brand/boxfront.png (pack art)

/public/brand/bottle.jpeg (bottle)

Favicon/SVG: honey drip mark

Use these to keep the baby‑blue / honey‑yellow mood consistent with the label and box. Optimize and lazy‑load.

Deliverable

Ship a fully functional /qr page with the above UI/UX, brand styling, upload gating, unique 40% code issuance, and TikTok Pixel tracking — polished for small screens first.