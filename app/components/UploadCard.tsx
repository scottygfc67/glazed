'use client';

import { useState, useRef, ChangeEvent } from 'react';
import { useForm } from 'react-hook-form';
import { PhotoIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

interface UploadCardProps {
  onSubmitReview: (email: string) => Promise<void>;
}

type FormData = {
  email: string;
  orderNumber?: string;
};

export default function UploadCard({ onSubmitReview }: UploadCardProps) {
  const [preview, setPreview] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    const validTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/heic'];
    if (!validTypes.includes(file.type)) {
      setError('Please upload a valid image file (JPG, PNG, WEBP, or HEIC)');
      return;
    }

    // Validate file size (8MB max)
    if (file.size > 8 * 1024 * 1024) {
      setError('File size should be less than 8MB');
      return;
    }

    // Create preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
      setError(null);
    };
    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    setPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const onSubmit = async (data: FormData) => {
    if (!preview) {
      setError('Please upload a screenshot of your review');
      return;
    }

    setIsUploading(true);
    setError(null);

    try {
      // Call the parent component's submit handler with the email
      await onSubmitReview(data.email);
      
      // In a real app, you would upload the image to your server here
      // and handle the response to show the coupon
      console.log('Submitting:', { ...data, hasImage: !!preview });
      
      // The coupon code will be set by the parent component
      
    } catch (err) {
      console.error('Error submitting review:', err);
      setError('Something went wrong. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/10">
      <h2 className="text-2xl font-bold mb-6 text-center">Upload Your Review Screenshot</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email Address <span className="text-rose-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:ring-2 focus:ring-glz-honey focus:border-transparent"
            placeholder="your@email.com"
            {...register('email', { 
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-rose-400">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="orderNumber" className="block text-sm font-medium mb-1">
            Order Number (optional)
          </label>
          <input
            id="orderNumber"
            type="text"
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:ring-2 focus:ring-glz-honey focus:border-transparent"
            placeholder="e.g., #12345"
            {...register('orderNumber')}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Review Screenshot <span className="text-rose-500">*</span>
          </label>
          
          {preview ? (
            <div className="relative group">
              <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-black/20">
                <Image
                  src={preview}
                  alt="Review preview"
                  fill
                  className="object-contain"
                />
              </div>
              <button
                type="button"
                onClick={removeImage}
                className="absolute -top-2 -right-2 bg-rose-500 text-white rounded-full p-1.5 hover:bg-rose-600 transition-colors"
                aria-label="Remove image"
              >
                <XMarkIcon className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed border-white/20 rounded-xl">
              <div className="space-y-1 text-center">
                <PhotoIcon className="mx-auto h-12 w-12 text-ink/40" />
                <div className="flex text-sm text-ink/60">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer bg-white/5 rounded-md font-medium text-glz-honey hover:text-glz-honey/80 focus-within:outline-none"
                  >
                    <span>Upload a file</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                      accept="image/*"
                      capture="environment"
                      onChange={handleFileChange}
                      ref={fileInputRef}
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-ink/50">
                  PNG, JPG, WEBP, or HEIC up to 8MB
                </p>
              </div>
            </div>
          )}
          
          <p className="mt-2 text-sm text-ink/60">
            Show your review with the 5★, your username, and the product title. Clear and readable please!
          </p>
        </div>

        {error && (
          <div className="p-3 bg-rose-500/10 text-rose-400 rounded-lg text-sm">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={isUploading}
          className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-ink bg-glz-honey hover:bg-glz-honey/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-glz-honey/50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isUploading ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-ink" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Uploading...
            </>
          ) : (
            'Submit Review & Get 40% Off'
          )}
        </button>

        <p className="text-xs text-ink/50 text-center">
          Your screenshot is used only to confirm your review. See our{' '}
          <a href="#" className="text-glz-honey hover:underline">Privacy Policy</a>.
        </p>
      </form>
    </div>
  );
}
