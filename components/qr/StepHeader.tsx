'use client';

interface Step {
  number: number;
  title: string;
  completed: boolean;
}

interface StepHeaderProps {
  steps: Step[];
  currentStep: number;
}

export default function StepHeader({ steps, currentStep }: StepHeaderProps) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 mb-6 shadow-lg">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={step.number} className="flex flex-col items-center flex-1">
            {/* Step Circle */}
            <div className={`relative w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
              step.completed
                ? 'bg-gradient-to-r from-[#FFC22E] to-[#FF4FB4] text-white'
                : currentStep === step.number
                ? 'bg-gradient-to-r from-[#35C1F1] to-[#FF4FB4] text-white'
                : 'bg-gray-200 text-gray-500'
            }`}>
              {step.completed ? '✓' : step.number}
            </div>

            {/* Step Title */}
            <div className="mt-2 text-center">
              <p className={`text-xs font-medium transition-colors duration-300 ${
                currentStep === step.number
                  ? 'text-gray-800'
                  : step.completed
                  ? 'text-gray-600'
                  : 'text-gray-400'
              }`}>
                {step.title}
              </p>
            </div>

            {/* Connector Line */}
            {index < steps.length - 1 && (
              <div className={`absolute top-5 left-1/2 w-full h-0.5 transition-colors duration-300 ${
                step.completed
                  ? 'bg-gradient-to-r from-[#FFC22E] to-[#FF4FB4]'
                  : 'bg-gray-200'
              }`} style={{ transform: 'translateX(50%)' }}></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
