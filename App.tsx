import React, { useState } from 'react';
import { Users, FileText, CheckCircle2, ChevronRight, LayoutGrid } from 'lucide-react';
import { VersionSelection } from './VersionSelection';
import { CohortType } from './types';

const App: React.FC = () => {
  const [selectedCohort, setSelectedCohort] = useState<CohortType | null>(null);

  if (selectedCohort) {
    return <VersionSelection onBack={() => setSelectedCohort(null)} cohort={selectedCohort} />;
  }

  return (
    <div className="min-h-screen bg-[#F0F2F5] flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-lg">
        
        {/* Header Section */}
        <div className="text-center mb-10">
            <div className="w-16 h-16 bg-white rounded-2xl mx-auto flex items-center justify-center shadow-sm mb-4">
                <LayoutGrid className="text-blue-600 w-8 h-8" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Select User Cohort</h1>
            <p className="text-gray-500 mt-2 text-sm">Choose a user state to preview the prototype flow</p>
        </div>

        {/* Cards Grid */}
        <div className="space-y-4">
            {/* Card 1: Fresh Customer */}
            <CohortCard 
                title="Fresh Customer" 
                description="No previous data. All fields empty."
                icon={<Users className="w-6 h-6 text-orange-500" />}
                onClick={() => setSelectedCohort('fresh')}
                badge="New"
            />

            {/* Card 2: All Details Prefilled */}
            <CohortCard 
                title="All Details Prefilled" 
                description="Employment, Pincode, PAN, Email pre-filled. Consent checked."
                icon={<CheckCircle2 className="w-6 h-6 text-green-500" />}
                onClick={() => setSelectedCohort('prefilled_all')}
            />

            {/* Card 3: PAN & Email Prefilled */}
            <CohortCard 
                title="Partial Prefilled (Current)" 
                description="Only PAN & Email known. Others empty. Consent checked."
                icon={<FileText className="w-6 h-6 text-blue-500" />}
                onClick={() => setSelectedCohort('prefilled_pan_email')}
            />
        </div>
        
        <div className="mt-8 text-center text-xs text-gray-400">
           Select a cohort to proceed to version selection
        </div>
      </div>
    </div>
  );
};

const CohortCard = ({ title, description, icon, onClick, badge }: any) => {
    return (
        <button 
            onClick={onClick}
            className="w-full bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-200 flex items-center text-left group"
        >
            <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mr-4 group-hover:bg-blue-50 transition-colors">
                {icon}
            </div>
            
            <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-gray-900 text-lg">{title}</h3>
                    {badge && (
                        <span className="bg-orange-100 text-orange-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
                            {badge}
                        </span>
                    )}
                </div>
                <p className="text-sm text-gray-500 leading-snug">{description}</p>
            </div>

            <ChevronRight className="text-gray-300 group-hover:text-blue-500 transition-colors" />
        </button>
    );
};

export default App;