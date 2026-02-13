import React, { useState, useEffect } from 'react';
import { Clock, Percent, Landmark, Zap } from 'lucide-react';
import { TrustMarker } from '../types';

const trustMarkers: TrustMarker[] = [
  { id: 1, text: "In last 24 hrs, 1000+ got a loan" },
  { id: 2, text: "Trusted by 20Lac customers" },
  { id: 3, text: "10,000 customers completed journey in less than 2min" },
];

export const TrustBannerV3: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Change slide every 4 seconds (3s wait + 1s transition buffer)
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % trustMarkers.length);
        setIsAnimating(false);
      }, 500); // Wait for exit animation to finish before switching content/position reset
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#002970] pt-6 pb-0 relative overflow-hidden">
      
      {/* Value Props Grid */}
      <div className="px-4 mb-6">
        <div className="flex justify-between gap-3 text-center">
            {/* Prop 1 */}
            <div className="flex-1 flex flex-col items-center bg-gradient-to-b from-white/20 to-white/5 p-3 rounded-xl border border-white/20 shadow-sm backdrop-blur-sm">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-2 text-[#002970] shadow-sm">
                    <Clock size={20} strokeWidth={2.5} />
                </div>
                <p className="text-[10px] uppercase font-bold text-blue-200 tracking-wide mb-0.5">Instant</p>
                <p className="text-xs font-semibold text-white leading-tight">Get money<br/>in 5mins</p>
            </div>

            {/* Prop 2 */}
            <div className="flex-1 flex flex-col items-center bg-gradient-to-b from-white/20 to-white/5 p-3 rounded-xl border border-white/20 shadow-sm backdrop-blur-sm">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-2 text-[#002970] shadow-sm">
                    <Percent size={20} strokeWidth={2.5} />
                </div>
                <p className="text-[10px] uppercase font-bold text-blue-200 tracking-wide mb-0.5">Interest</p>
                <p className="text-xs font-semibold text-white leading-tight">0.75%*<br/>Monthly</p>
            </div>

            {/* Prop 3 - CHANGED FOR V3 */}
            <div className="flex-1 flex flex-col items-center bg-gradient-to-b from-white/20 to-white/5 p-3 rounded-xl border border-white/20 shadow-sm backdrop-blur-sm">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-2 text-[#002970] shadow-sm">
                    <Landmark size={20} strokeWidth={2.5} />
                </div>
                <p className="text-[10px] uppercase font-bold text-blue-200 tracking-wide mb-0.5">100% Digital</p>
                <p className="text-xs font-semibold text-white leading-tight">No Bank<br/>Visit</p>
            </div>
        </div>
      </div>

      {/* Animated Ticker - One by one */}
      <div className="w-full bg-[#00BCF1] border-t border-white/10 h-10 relative flex items-center overflow-hidden">
        <div className="w-full flex items-center justify-center px-4">
            <div 
                key={currentIndex}
                className="flex items-center gap-2 text-xs font-medium text-white animate-slide-in-out whitespace-nowrap"
            >
                <Zap size={14} className="text-white fill-white" />
                {trustMarkers[currentIndex].text}
            </div>
        </div>
      </div>
      
      <style>{`
        @keyframes slideInOut {
            0% { transform: translateX(100%); opacity: 0; }
            10% { transform: translateX(0); opacity: 1; }
            90% { transform: translateX(0); opacity: 1; }
            100% { transform: translateX(-100%); opacity: 0; }
        }
        .animate-slide-in-out {
            animation: slideInOut 3.5s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
};