import Link from 'next/link';
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-glz-blue/80 backdrop-blur-sm py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-glz-honey rounded-full flex items-center justify-center">
            <span className="text-ink font-bold text-lg">G</span>
          </div>
          <span className="text-xl font-bold text-ink">GLAZED</span>
        </Link>
        
        <button 
          className="flex items-center space-x-1 text-ink/80 hover:text-ink transition-colors"
          onClick={() => {
            // Will implement the help dialog later
            alert('Help dialog will be implemented here');
          }}
        >
          <QuestionMarkCircleIcon className="w-5 h-5" />
          <span className="text-sm font-medium">Need help?</span>
        </button>
      </div>
    </header>
  );
}
