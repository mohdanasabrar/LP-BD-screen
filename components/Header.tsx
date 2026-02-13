import React from 'react';
import { ArrowLeft, IndianRupee } from 'lucide-react';

interface HeaderProps {
  onBack?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onBack }) => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm px-4 py-3 flex items-center justify-between relative">
      {/* Left Action */}
      <button 
        onClick={onBack}
        className="p-1 -ml-1 hover:bg-gray-100 rounded-full transition-colors z-10" 
        aria-label="Go back"
      >
        <ArrowLeft className="w-6 h-6 text-gray-800" />
      </button>
      
      {/* Center Logo - Absolutely positioned to ensure true center alignment */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-2.5">
          {/* Logo Icon */}
          <div className="w-10 h-10 rounded-full bg-[#00BAF2] p-[3px] flex items-center justify-center flex-shrink-0">
              <div className="w-full h-full rounded-full bg-[#002970] flex items-center justify-center">
                  <IndianRupee className="text-white w-5 h-5" strokeWidth={2.5} />
              </div>
          </div>
          
          {/* Logo Text */}
          <div className="flex flex-col">
              <span className="text-[15px] font-bold text-gray-900 leading-none tracking-tight">Personal</span>
              <span className="text-[15px] font-bold text-gray-900 leading-none tracking-tight">Loan</span>
          </div>
      </div>

      {/* Right Action */}
      <button className="text-blue-600 font-semibold text-sm z-10">
        Help
      </button>
    </header>
  );
};