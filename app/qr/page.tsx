'use client';

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import QRHero from '@/components/qr/QRHero';
import StepHeader from '@/components/qr/StepHeader';
import StepOne from '@/components/qr/StepOne';
import StepTwo from '@/components/qr/StepTwo';
import StepThree from '@/components/qr/StepThree';
import FAQ from '@/components/qr/FAQ';
import TrustBand from '@/components/qr/TrustBand';

function QRPageContent() {
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

  const steps = [
    { number: 1, title: 'Review', completed: currentStep > 1 },
    { number: 2, title: 'Upload', completed: currentStep > 2 },
    { number: 3, title: 'Get Code', completed: currentStep > 3 }
  ];

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
        setError(result.error || 'Something went wrong');
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-pink-50 to-yellow-50">
      <QRHero />
      
      <main className="mx-auto max-w-md px-4 pb-28">
        <StepHeader steps={steps} currentStep={currentStep} />
        
        {currentStep === 1 && (
          <StepOne 
            onNext={handleNextStep} 
            formData={formData} 
            setFormData={(data) => setFormData(data)} 
          />
        )}
        
        {currentStep === 2 && (
          <StepTwo
            formData={formData}
            setFormData={(data) => setFormData(data)}
            onPrev={handlePrevStep}
            onSubmit={handleFormSubmit}
            isLoading={isLoading}
            error={error}
          />
        )}
        
        {currentStep === 3 && (
          <StepThree
            generatedCode={generatedCode}
          />
        )}
        
        <FAQ />
        <TrustBand />
      </main>

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

export default function QRPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <QRPageContent />
    </Suspense>
  );
}