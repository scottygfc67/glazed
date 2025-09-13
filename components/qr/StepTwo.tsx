'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';

interface FormData {
  orderId: string;
  tiktokHandle: string;
  email: string;
  reviewUrl: string;
  screenshot: File | null;
}

interface StepTwoProps {
  onPrev: () => void;
  formData: FormData;
  setFormData: (data: FormData) => void;
  onSubmit: () => void;
  isLoading: boolean;
  error: string;
}

export default function StepTwo({ onPrev, formData, setFormData, onSubmit, isLoading, error }: StepTwoProps) {
  const [preview, setPreview] = useState<string | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (file: File) => {
    if (file && file.size <= 5 * 1024 * 1024) { // 5MB limit
      setFormData({ ...formData, screenshot: file });
      
      // Create preview
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      alert('File too large. Please choose an image under 5MB.');
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
    
    const files = e.dataTransfer.files;
    if (files && files[0]) {
      handleFileChange(files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
  };

  const handleFileInputClick = () => {
    fileInputRef.current?.click();
  };

  const isFormValid = formData.screenshot && formData.tiktokHandle && formData.email;

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
      <div className="text-center mb-6">
        <div className="text-4xl mb-4">📸</div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Upload your screenshot
        </h2>
        <p className="text-gray-600">
          Take a screenshot of your TikTok review and upload it here
        </p>
      </div>

      {/* File Upload Area */}
      <div
        className={`relative border-2 border-dashed rounded-2xl p-8 text-center transition-all duration-300 ${
          dragActive
            ? 'border-[#35C1F1] bg-[#35C1F1]/5'
            : formData.screenshot
            ? 'border-green-400 bg-green-50'
            : 'border-gray-300 hover:border-[#35C1F1]'
        }`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={(e) => e.target.files?.[0] && handleFileChange(e.target.files[0])}
          className="hidden"
        />

        {preview ? (
          <div className="space-y-4">
            <div className="relative w-32 h-32 mx-auto rounded-xl overflow-hidden">
              <Image
                src={preview}
                alt="Review screenshot preview"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-green-600 font-medium">✓ Screenshot uploaded successfully!</p>
            <button
              onClick={() => {
                setFormData({ ...formData, screenshot: null });
                setPreview(null);
              }}
              className="text-sm text-gray-500 hover:text-gray-700 underline"
            >
              Choose different image
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="text-4xl">📷</div>
            <div>
              <button
                onClick={handleFileInputClick}
                className="text-[#35C1F1] font-medium hover:underline"
              >
                Tap to upload
              </button>
              <span className="text-gray-500"> or drag and drop</span>
            </div>
            <p className="text-sm text-gray-500">
              PNG, JPG, HEIC up to 5MB
            </p>
          </div>
        )}
      </div>

      {/* Form Fields */}
      <div className="space-y-4 mt-6">
        {/* TikTok Handle */}
        <div>
          <label htmlFor="tiktokHandle" className="block text-sm font-medium text-gray-700 mb-2">
            TikTok Handle *
          </label>
          <input
            type="text"
            id="tiktokHandle"
            value={formData.tiktokHandle}
            onChange={(e) => setFormData({ ...formData, tiktokHandle: e.target.value })}
            placeholder="@yourusername"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#35C1F1] focus:border-transparent transition-all duration-200"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="your@email.com"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#35C1F1] focus:border-transparent transition-all duration-200"
            required
          />
        </div>

        {/* Review URL (Optional) */}
        <div>
          <label htmlFor="reviewUrl" className="block text-sm font-medium text-gray-700 mb-2">
            Review URL (optional)
          </label>
          <input
            type="url"
            id="reviewUrl"
            value={formData.reviewUrl}
            onChange={(e) => setFormData({ ...formData, reviewUrl: e.target.value })}
            placeholder="https://tiktok.com/@user/video/..."
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#35C1F1] focus:border-transparent transition-all duration-200"
          />
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl">
          <p className="text-red-600 text-sm">{error}</p>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex space-x-4 mt-6">
        <button
          onClick={onPrev}
          className="flex-1 py-3 px-6 border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-all duration-200"
        >
          ← Back
        </button>
        <button
          onClick={onSubmit}
          disabled={!isFormValid || isLoading}
          className="flex-1 bg-gradient-to-r from-[#35C1F1] to-[#FF4FB4] text-white py-3 px-6 rounded-xl font-bold hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Processing...' : 'Submit & Unlock 30% Off'}
        </button>
      </div>
    </div>
  );
}
