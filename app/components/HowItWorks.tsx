import { CheckCircleIcon, PhotoIcon, ShoppingBagIcon, StarIcon } from '@heroicons/react/24/solid';

export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      icon: ShoppingBagIcon,
      title: 'Buy & Review',
      description: 'Purchase GLAZED on TikTok Shop and leave a 5-star review',
      tip: 'Your honest feedback helps others discover our products!',
    },
    {
      id: 2,
      icon: PhotoIcon,
      title: 'Screenshot',
      description: 'Take a screenshot of your posted 5★ review',
      tip: 'Make sure your username and the 5-star rating are visible',
    },
    {
      id: 3,
      icon: StarIcon,
      title: 'Upload & Unlock',
      description: 'Upload your screenshot and get 40% off',
      tip: 'We\'ll verify your review and send your code instantly',
    },
  ];

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((step, index) => (
          <div 
            key={step.id} 
            className="bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition-colors cursor-pointer group"
            onClick={() => alert(step.tip)}
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-glz-honey/20 p-3 rounded-xl">
                <step.icon className="w-6 h-6 text-glz-honey" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                <p className="text-ink/80 mt-1">{step.description}</p>
              </div>
              <CheckCircleIcon className="w-5 h-5 text-green-400 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 text-2xl text-ink/30">
                →
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
