'use client';

<<<<<<< HEAD
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import QRHero from '@/components/qr/QRHero';
import StepHeader from '@/components/qr/StepHeader';
import StepOne from '@/components/qr/StepOne';
import StepTwo from '@/components/qr/StepTwo';
import StepThree from '@/components/qr/StepThree';
import FAQ from '@/components/qr/FAQ';
import TrustBand from '@/components/qr/TrustBand';

export default function QRPage() {
  const searchParams = useSearchParams();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    orderId: searchParams.get('orderId') || '',
    tiktokHandle: '',
    email: '',
    reviewUrl: '',
    screenshot: null as File | null
  });
  const [generatedCode, setGeneratedCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleFormSubmit = async () => {
    setIsLoading(true);
    setError('');

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('orderId', formData.orderId);
      formDataToSend.append('tiktokHandle', formData.tiktokHandle);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('reviewUrl', formData.reviewUrl);
      if (formData.screenshot) {
        formDataToSend.append('screenshot', formData.screenshot);
      }

      const response = await fetch('/api/review-reward/upload', {
        method: 'POST',
        body: formDataToSend,
      });

      const result = await response.json();

      if (response.ok) {
        setGeneratedCode(result.code);
        setCurrentStep(3);
      } else {
        setError(result.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const steps = [
    { number: 1, title: 'Post your review on TikTok Shop', completed: currentStep > 1 },
    { number: 2, title: 'Upload your screenshot', completed: currentStep > 2 },
    { number: 3, title: 'Your 30% code 🎉', completed: currentStep >= 3 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-pink-50">
      <main className="mx-auto max-w-md px-4 pb-28">
        {/* Hero Section */}
        <QRHero />

        {/* Progress Stepper */}
        <StepHeader steps={steps} currentStep={currentStep} />

        {/* Step Content */}
        <div className="space-y-6">
          {currentStep === 1 && (
            <StepOne 
              onNext={handleNextStep}
              formData={formData}
              setFormData={setFormData}
            />
          )}
          
          {currentStep === 2 && (
            <StepTwo 
              onNext={handleNextStep}
              onPrev={handlePrevStep}
              formData={formData}
              setFormData={setFormData}
              onSubmit={handleFormSubmit}
              isLoading={isLoading}
              error={error}
            />
          )}
          
          {currentStep === 3 && (
            <StepThree 
              generatedCode={generatedCode}
              formData={formData}
            />
          )}
        </div>

        {/* FAQ Section */}
        <FAQ />

        {/* Trust Band */}
        <TrustBand />
      </main>

      {/* Sticky Bottom CTA */}
      {currentStep === 2 && (
        <div className="fixed inset-x-0 bottom-0 z-40 bg-white/90 backdrop-blur">
          <button 
            onClick={handleFormSubmit}
            disabled={isLoading || !formData.screenshot || !formData.orderId || !formData.tiktokHandle || !formData.email}
            className="mx-4 my-3 h-14 w-[calc(100%-2rem)] rounded-full bg-gradient-to-r from-yellow-500 to-pink-500 text-white text-lg font-bold shadow-lg active:scale-[.99] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
          >
            {isLoading ? 'Processing...' : 'Submit & Unlock 30% Off'}
          </button>
        </div>
      )}
    </div>
  );
}
=======
import { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCircleIcon,
  PhotoIcon,
  XMarkIcon,
  SparklesIcon,
  ArrowPathIcon,
} from '@heroicons/react/24/solid';

/* -------------------------------------------
   Brand helpers
-------------------------------------------- */

// Brand baby blue + honey gold
const BABY_BLUE = '#77C9F1';
const HONEY = '#F4B000';
const HOT_PINK = '#FF2F7B';

// Generate promo
const generateCouponCode = () => {
  const prefix = 'GLAZED-40-';
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let result = '';
  for (let i = 0; i < 6; i++) result += chars[Math.floor(Math.random() * chars.length)];
  return prefix + result;
};

// Simple 6‑hour countdown (adjust via initialSeconds)
function useCountdown(initialSeconds = 6 * 60 * 60) {
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds);
  useEffect(() => {
    const id = setInterval(() => setSecondsLeft(s => Math.max(0, s - 1)), 1000);
    return () => clearInterval(id);
  }, []);
  const hh = String(Math.floor(secondsLeft / 3600)).padStart(2, '0');
  const mm = String(Math.floor((secondsLeft % 3600) / 60)).padStart(2, '0');
  const ss = String(secondsLeft % 60).padStart(2, '0');
  return { hh, mm, ss, secondsLeft };
}

/* -------------------------------------------
   Honey Drip SVG (repeats horizontally)
-------------------------------------------- */
const HoneyDrip = () => (
  <div className="relative w-full h-20 overflow-hidden">
    <svg
      className="absolute inset-0 w-[200%] h-full animate-[drip_18s_linear_infinite]"
      viewBox="0 0 1600 160"
      preserveAspectRatio="none"
      style={{ filter: 'drop-shadow(0 4px 0 rgba(0,0,0,.15))' }}
    >
      <defs>
        <linearGradient id="honey" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFC839" />
          <stop offset="60%" stopColor={HONEY} />
          <stop offset="100%" stopColor="#D59400" />
        </linearGradient>
      </defs>
      <path
        fill="url(#honey)"
        d="M0,0 H1600 V95
           C1500,120 1480,160 1400,160
           C1320,160 1310,120 1210,95
           C1100,65 1080,155 1000,155
           C920,155 900,90 800,90
           C700,90 700,160 610,160
           C520,160 520,110 420,95
           C320,80 310,145 220,150
           C130,155 120,110 0,95 Z"
      />
    </svg>
  </div>
);

/* -------------------------------------------
   Sparkle field (tiny twinkles)
-------------------------------------------- */
const Sparkles = () => (
  <div
    aria-hidden
    className="pointer-events-none absolute inset-0"
    style={{
      backgroundImage:
        'radial-gradient(white 1px, rgba(255,255,255,0) 1.5px)',
      backgroundSize: '24px 24px',
      opacity: 0.35,
      maskImage:
        'linear-gradient(to bottom, rgba(0,0,0,.15), rgba(0,0,0,1))',
    }}
  />
);

/* -------------------------------------------
   Page
-------------------------------------------- */
export default function QRLandingPage() {
  const [email, setEmail] = useState('');
  const [preview, setPreview] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [coupon, setCoupon] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const { hh, mm, ss } = useCountdown();

  const canSubmit = Boolean(email && preview && !submitting);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const r = new FileReader();
    r.onload = () => setPreview(String(r.result));
    r.readAsDataURL(file);
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    setSubmitting(true);
    await new Promise(r => setTimeout(r, 1200)); // simulate
    const code = generateCouponCode();
    setCoupon(code);
    setSubmitting(false);

    // smooth scroll
    setTimeout(() => {
      document.getElementById('coupon')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 50);
  };

  const bg = useMemo(
    () =>
      `radial-gradient(80rem 60rem at 10% -10%, rgba(255,255,255,.6), rgba(255,255,255,0)),
       radial-gradient(60rem 50rem at 110% 10%, rgba(255,255,255,.5), rgba(255,255,255,0))`,
    []
  );

  return (
    <main
      className="min-h-[100dvh] w-full text-slate-900 overflow-x-hidden"
      style={{ background: `${bg}, ${BABY_BLUE}` }}
    >
      {/* Sky / header drip */}
      <div className="relative">
        <HoneyDrip />
      </div>

      {/* Hero */}
      <section className="relative max-w-5xl mx-auto px-6 pt-8">
        <Sparkles />
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/60 overflow-hidden"
        >
          {/* floating honey glows */}
          <div className="pointer-events-none absolute -top-16 -left-10 w-56 h-56 rounded-full bg-amber-300/70 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -right-10 w-72 h-72 rounded-full bg-pink-300/60 blur-3xl" />

          <div className="relative p-6 sm:p-10">
            <motion.h1
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.05 }}
              className="text-center font-black tracking-tight"
              style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', color: '#0b3b60' }}
            >
              Welcome to the club! - Unlock **40% OFF**
            </motion.h1>

            <p className="text-center mt-2 text-slate-700">
              Leave a <span className="font-bold">5★ TikTok Shop review</span>, upload a screenshot,
              and we’ll send you a <span className="font-extrabold">40% coupon</span>.
            </p>

            {/* countdown + badge */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <span className="inline-flex items-center rounded-full bg-white border border-amber-200 px-4 py-2 text-sm font-semibold text-amber-800 shadow-sm">
                Offer ends in&nbsp;
                <span className="tabular-nums font-black">
                  {hh}:{mm}:{ss}
                </span>
              </span>
              <span className="inline-flex items-center rounded-full bg-gradient-to-r from-amber-400 to-pink-500 text-white px-4 py-2 text-sm font-bold shadow-md">
                40% Off Code
              </span>
            </div>

            {/* form + preview */}
            <div className="mt-10 grid md:grid-cols-2 gap-8">
              {/* Left: Instructions */}
              <motion.div
                initial={{ x: -12, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-amber-50/80 border border-amber-200 rounded-2xl p-5"
              >
                <h3 className="font-extrabold text-amber-900 mb-3">How to Claim</h3>
                <ol className="list-decimal pl-5 space-y-2 text-amber-900/90">
                  <li>Open TikTok &gt; Profile &gt; Orders.</li>
                  <li>Find your <span className="font-semibold">GLAZED</span> order &gt; Write a Review.</li>
                  <li>Rate <b>5★</b> and post a few words.</li>
                  <li>Screenshot your posted review (show stars + username).</li>
                  <li>Upload below and grab your code.</li>
                </ol>
              </motion.div>

              {/* Right: Form */}
              <motion.form
                onSubmit={onSubmit}
                initial={{ x: 12, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="space-y-5"
              >
                <div className="relative">
                  <label className="block text-sm font-semibold text-slate-800 mb-2">
                    Where should we send your code?
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@glow.com"
                    className="w-full rounded-2xl border-2 border-amber-200 bg-white/80 px-5 py-4 outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-800 mb-2">
                    Upload your 5★ review screenshot
                  </label>

                  {/* Upload / Preview */}
                  <AnimatePresence mode="wait">
                    {preview ? (
                      <motion.div
                        key="preview"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        className="relative"
                      >
                        <div className="relative h-60 w-full overflow-hidden rounded-2xl border-2 border-amber-300 bg-white">
                          <Image
                            src={preview}
                            alt="Review screenshot"
                            fill
                            className="object-contain"
                            priority
                          />
                        </div>
                        <button
                          type="button"
                          onClick={() => {
                            setPreview(null);
                            if (fileRef.current) fileRef.current.value = '';
                          }}
                          className="absolute -top-3 -right-3 inline-flex items-center justify-center rounded-full bg-amber-500 p-2 text-white shadow-lg hover:bg-amber-600"
                          aria-label="Remove image"
                        >
                          <XMarkIcon className="h-5 w-5" />
                        </button>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="drop"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        className="relative group"
                      >
                        <div
                          role="button"
                          tabIndex={0}
                          onClick={() => fileRef.current?.click()}
                          onKeyDown={(e) => (e.key === 'Enter' ? fileRef.current?.click() : null)}
                          className="flex h-60 w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-amber-300 bg-gradient-to-br from-white/70 to-amber-50/70 text-center transition hover:bg-white"
                        >
                          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 shadow-sm group-hover:scale-105 transition">
                            <PhotoIcon className="h-8 w-8 text-amber-500" />
                          </div>
                          <p className="font-semibold text-slate-800">Click to upload</p>
                          <p className="text-xs text-slate-600">
                            JPG/PNG/WebP • Max 5MB • Show stars + username
                          </p>
                          <span className="inline-flex items-center gap-1 rounded-full bg-amber-500 px-3 py-1 text-xs font-bold text-white">
                            <SparklesIcon className="h-4 w-4" />
                            Upload Screenshot
                          </span>
                        </div>
                        <input
                          ref={fileRef}
                          type="file"
                          accept="image/*"
                          onChange={handleFile}
                          className="hidden"
                          aria-hidden="true"
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <button
                  type="submit"
                  disabled={!canSubmit}
                  className={`group relative w-full overflow-hidden rounded-2xl px-6 py-4 text-lg font-extrabold tracking-wide text-white shadow-lg transition
                    ${canSubmit ? 'bg-gradient-to-r from-amber-500 to-pink-500 hover:shadow-amber-200/60' : 'bg-slate-300 cursor-not-allowed'}`}
                >
                  {submitting ? (
                    <span className="inline-flex items-center">
                      <ArrowPathIcon className="mr-2 h-5 w-5 animate-spin" />
                      Glazing your code…
                    </span>
                  ) : (
                    <>
                      <span className="relative z-10">CLAIM MY 40% OFF CODE</span>
                      {canSubmit && (
                        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-white/20 to-white/0 transition-transform duration-700 group-hover:translate-x-full" />
                      )}
                    </>
                  )}
                </button>
              </motion.form>
            </div>

            {/* Coupon reveal */}
            <AnimatePresence>
              {coupon && (
                <motion.div
                  id="coupon"
                  initial={{ opacity: 0, y: 20, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.45 }}
                  className="mt-10 rounded-3xl border border-white/70 bg-white/70 p-6 text-center backdrop-blur-xl"
                >
                  <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100">
                    <CheckCircleIcon className="h-10 w-10 text-amber-600" />
                  </div>
                  <h3 className="text-2xl font-black text-amber-900">
                    Your 40% Off Code Is Ready!
                  </h3>
                  <p className="mt-1 text-slate-700">Use this code at checkout:</p>

                  <div className="mx-auto mt-4 max-w-md rounded-2xl border-2 border-amber-300 bg-amber-50 p-4">
                    <div className="text-xs font-semibold text-amber-700">PROMO CODE</div>
                    <div className="font-mono text-3xl font-black tracking-widest text-amber-900">
                      {coupon}
                    </div>
                  </div>

                  <button
                    onClick={() => navigator.clipboard.writeText(coupon)}
                    className="mt-5 rounded-xl bg-amber-600 px-5 py-2.5 font-bold text-white hover:bg-amber-700"
                  >
                    Copy Code
                  </button>

                  <p className="mt-3 text-xs text-slate-600">
                    Valid 30 days • One use per customer
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Footer */}
        <p className="mt-10 pb-8 text-center text-xs text-slate-700">
          © {new Date().getFullYear()} GLAZED — Glaze Today. Glow Tomorrow.
        </p>
      </section>

      {/* keyframes */}
      <style jsx global>{`
        @keyframes drip {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </main>
  );
}
>>>>>>> 930945056a68ddd4da0346fdc74fff18f6f5c66e
