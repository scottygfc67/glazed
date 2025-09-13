'use client';

export default function TrustBand() {
  return (
    <div className="mt-12 text-center">
      <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
        <div className="flex items-center justify-center space-x-6 text-sm text-gray-600 mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-green-500">🔒</span>
            <span>Encrypted uploads</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-blue-500">🎁</span>
            <span>One-time codes</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-purple-500">🛡️</span>
            <span>We never sell your data</span>
          </div>
        </div>
        
        <p className="text-xs text-gray-500 leading-relaxed">
          We verify your submission to keep rewards fair. Your screenshot is stored securely and never shared.
        </p>
      </div>
    </div>
  );
}
