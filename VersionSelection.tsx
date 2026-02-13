import React, { useState } from 'react';
import { BasicDetailsV1 } from './BasicDetailsV1';
import { BasicDetailsV2 } from './BasicDetailsV2';
import { BasicDetailsV3 } from './BasicDetailsV3';
import { ChevronRight, Layers, ArrowLeft } from 'lucide-react';
import { CohortType } from './types';

interface VersionSelectionProps {
    onBack: () => void;
    cohort: CohortType;
}

export const VersionSelection: React.FC<VersionSelectionProps> = ({ onBack, cohort }) => {
  const [currentVersion, setCurrentVersion] = useState<'home' | 'v1' | 'v2' | 'v3'>('home');

  if (currentVersion === 'v1') {
    return <BasicDetailsV1 onBack={() => setCurrentVersion('home')} cohort={cohort} />;
  }
  
  if (currentVersion === 'v2') {
     return <BasicDetailsV2 onBack={() => setCurrentVersion('home')} cohort={cohort} />;
  }

  if (currentVersion === 'v3') {
     return <BasicDetailsV3 onBack={() => setCurrentVersion('home')} cohort={cohort} />;
  }

  return (
    <div className="min-h-screen bg-[#F5F7FA] flex items-center justify-center p-4 font-sans relative">
      <div className="absolute top-4 left-4">
        <button 
            onClick={onBack}
            className="flex items-center gap-1 text-gray-500 hover:text-gray-900 transition-colors text-sm font-medium"
        >
            <ArrowLeft size={16} />
            Change Cohort
        </button>
      </div>

      <div className="w-full max-w-md">
        
        {/* Header Section */}
        <div className="text-center mb-10">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl mx-auto flex items-center justify-center shadow-xl shadow-blue-200 mb-6 rotate-3 hover:rotate-6 transition-transform duration-300">
                <Layers className="text-white w-10 h-10" />
            </div>
            <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Proto<span className="text-blue-600">Flow</span></h1>
            <p className="text-gray-500 mt-3 text-sm font-medium">
                Cohort: <span className="font-bold text-gray-800 bg-gray-200 px-2 py-0.5 rounded-md capitalize">{cohort.replace(/_/g, ' ')}</span>
            </p>
        </div>

        {/* Cards Grid */}
        <div className="space-y-4">
            <VersionCard 
                title="Version 1" 
                subtitle="Original Revamped Screen" 
                tags={['Live', 'High Fidelity']}
                color="blue"
                onClick={() => setCurrentVersion('v1')} 
            />
            <VersionCard 
                title="Version 2" 
                subtitle="Modified Value Props (Close Anytime)" 
                tags={['Live', 'Variant A']}
                color="blue"
                onClick={() => setCurrentVersion('v2')} 
            />
             <VersionCard 
                title="Version 3" 
                subtitle="Modified Value Props (No Bank Visit)" 
                tags={['Live', 'Variant B']}
                color="blue"
                onClick={() => setCurrentVersion('v3')} 
            />
        </div>

        <div className="mt-12 text-center">
            <p className="text-xs text-gray-400 font-medium">© 2024 Paytm Personal Loan Prototype</p>
        </div>
      </div>
    </div>
  );
};

// Subcomponent for the Menu Cards
const VersionCard = ({ title, subtitle, tags, color, onClick }: any) => {
    const isLive = color === 'blue';
    return (
        <button 
            onClick={onClick}
            className={`
                w-full p-5 rounded-2xl text-left border transition-all duration-300 flex items-center justify-between group relative overflow-hidden bg-white
                ${isLive 
                    ? 'border-blue-100 hover:border-blue-300 shadow-sm hover:shadow-lg hover:-translate-y-0.5' 
                    : 'border-gray-100 opacity-90 hover:opacity-100 hover:border-gray-300 shadow-sm'}
            `}
        >
            <div className="relative z-10">
                <div className="flex items-center gap-2.5 mb-1.5">
                    <h3 className={`font-bold text-lg ${isLive ? 'text-gray-900' : 'text-gray-700'}`}>{title}</h3>
                    {tags.map((tag: string) => (
                        <span key={tag} className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${isLive ? 'bg-blue-50 text-blue-700' : 'bg-gray-100 text-gray-500'}`}>
                            {tag}
                        </span>
                    ))}
                </div>
                <p className="text-sm text-gray-500 font-medium">{subtitle}</p>
            </div>
            
            <div className={`
                w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300
                ${isLive ? 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white' : 'bg-gray-50 text-gray-400 group-hover:bg-gray-200 group-hover:text-gray-600'}
            `}>
                <ChevronRight size={20} strokeWidth={2.5} className="ml-0.5" />
            </div>

            {/* Subtle bg decoration for Live card */}
            {isLive && (
                <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-blue-50/50 to-transparent pointer-events-none" />
            )}
        </button>
    )
}