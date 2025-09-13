'use client';

interface FormData {
  orderId: string;
  tiktokHandle: string;
  email: string;
  reviewUrl: string;
  screenshot: File | null;
}

interface StepOneProps {
  onNext: () => void;
  formData: FormData;
  setFormData: (data: FormData) => void;
}

export default function StepOne({ onNext, formData, setFormData }: StepOneProps) {
  const handleTikTokClick = () => {
    // Open TikTok Shop reviews page
    // This would be a deep link to the actual product review page
    window.open('https://www.tiktok.com/shop', '_blank');
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
      <div className="text-center mb-6">
        <div className="text-4xl mb-4">📱</div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Post your review on TikTok Shop
        </h2>
        <p className="text-gray-600">
          Head to TikTok Shop and leave an honest review of your GLAZED purchase
        </p>
      </div>

      {/* TikTok Button */}
      <button
        onClick={handleTikTokClick}
        className="w-full bg-black text-white py-4 px-6 rounded-2xl font-bold text-lg hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl active:scale-[.98] mb-6"
      >
        Open TikTok Reviews
      </button>

      {/* Instructions */}
      <div className="bg-gradient-to-r from-[#35C1F1]/10 to-[#FF4FB4]/10 rounded-xl p-4 mb-6">
        <h3 className="font-bold text-gray-800 mb-2">How to find your review:</h3>
        <ol className="text-sm text-gray-600 space-y-1">
          <li>1. Open TikTok Shop on your phone</li>
          <li>2. Go to "My Orders" or search "GLAZED Hair Drizzle"</li>
          <li>3. Find your purchase and tap "Write Review"</li>
          <li>4. Leave an honest review with a star rating</li>
        </ol>
      </div>

      {/* Order ID Input */}
      <div className="mb-6">
        <label htmlFor="orderId" className="block text-sm font-medium text-gray-700 mb-2">
          Order ID (optional - helps us verify)
        </label>
        <input
          type="text"
          id="orderId"
          value={formData.orderId}
          onChange={(e) => setFormData({ ...formData, orderId: e.target.value })}
          placeholder="e.g., #12345 or order-abc123"
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#35C1F1] focus:border-transparent transition-all duration-200"
        />
        <p className="text-xs text-gray-500 mt-1">
          <button className="text-[#35C1F1] hover:underline">
            Where's my order ID?
          </button>
        </p>
      </div>

      {/* Next Button */}
      <button
        onClick={onNext}
        className="w-full bg-gradient-to-r from-[#35C1F1] to-[#FF4FB4] text-white py-4 px-6 rounded-2xl font-bold text-lg hover:shadow-xl transition-all duration-300 active:scale-[.98]"
      >
        I've Posted My Review →
      </button>
    </div>
  );
}
