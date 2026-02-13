import React, { useState } from 'react';
import { Header } from './components/Header';
import { TrustBannerV2 } from './components/TrustBannerV2';
import { IncomeSelection } from './components/IncomeSelection';
import { ReviewDetails } from './components/ReviewDetails';
import { PersonalDetailsInputs } from './components/PersonalDetailsInputs';
import { CompactSummaryCard } from './components/CompactSummaryCard';
import { IncomeType, UserDetails, CohortType } from './types';
import { MapPin, ShieldCheck, Check, ChevronRight } from 'lucide-react';

// Mock Data
const MOCK_USER_DETAILS: UserDetails = {
  pan: 'ABCDE1234F',
  email: 'ajxx.pxxxx@gmail.com'
};

interface BasicDetailsV2Props {
    onBack: () => void;
    cohort: CohortType;
}

export const BasicDetailsV2: React.FC<BasicDetailsV2Props> = ({ onBack, cohort }) => {
  // Determine initial state based on cohort
  const isFresh = cohort === 'fresh';
  const isAllPrefilled = cohort === 'prefilled_all';

  // State to toggle between summary card and edit view for 'prefilled_all'
  const [isEditMode, setIsEditMode] = useState<boolean>(!isAllPrefilled);

  const [incomeType, setIncomeType] = useState<IncomeType>(
      isAllPrefilled ? 'salaried' : null
  );
  const [pincode, setPincode] = useState<string>(
      isAllPrefilled ? '122001' : ''
  );
  
  // State for Personal Details (Editable for Fresh, Static/Mock for others)
  const [pan, setPan] = useState<string>(isFresh ? '' : MOCK_USER_DETAILS.pan);
  const [email, setEmail] = useState<string>(isFresh ? '' : MOCK_USER_DETAILS.email);

  const [termsAccepted, setTermsAccepted] = useState<boolean>(!isFresh);
  const [isConsentExpanded, setIsConsentExpanded] = useState<boolean>(false);

  // For the purpose of "Make it active", we primarily check termsAccepted for the visual state.
  const isCTAEnabled = termsAccepted;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 pb-44">
      <Header onBack={onBack} />
      
      {/* Custom Styles for Animations */}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes arrow-nudge {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(4px); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite linear;
        }
        .animate-arrow {
          animation: arrow-nudge 1.2s ease-in-out infinite;
        }
      `}</style>

      <main className="flex-grow">
        <TrustBannerV2 />

        <div className="px-4 py-5 space-y-4">
            
            {!isEditMode && isAllPrefilled ? (
                <CompactSummaryCard 
                    incomeType={incomeType}
                    pincode={pincode}
                    details={{ pan, email }}
                    onEdit={() => setIsEditMode(true)}
                />
            ) : (
                <>
                    {/* Section 1: Employment Type */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
                        <IncomeSelection 
                            selected={incomeType} 
                            onSelect={setIncomeType} 
                        />
                    </div>

                    {/* Section 2: Pincode */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
                        <label className="block text-sm font-semibold text-gray-800 mb-2">
                            Current Residence Pincode
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                <MapPin size={20} />
                            </div>
                            <input
                                type="text"
                                maxLength={6}
                                value={pincode}
                                onChange={(e) => {
                                    const val = e.target.value;
                                    if (/^\d*$/.test(val)) setPincode(val);
                                }}
                                placeholder="Enter 6-digit pincode"
                                className="block w-full pl-10 pr-3 py-3.5 border border-gray-300 rounded-xl leading-5 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-base"
                            />
                        </div>
                        <p className="mt-2 text-xs text-gray-500 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full inline-block"></span>
                            To check lender availability in your area
                        </p>
                    </div>

                    {/* Section 3: Personal Details (Input for Fresh, Review for others) */}
                    {isFresh ? (
                        <PersonalDetailsInputs 
                            pan={pan}
                            email={email}
                            onPanChange={setPan}
                            onEmailChange={setEmail}
                        />
                    ) : (
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
                            <ReviewDetails details={MOCK_USER_DETAILS} />
                        </div>
                    )}
                </>
            )}

        </div>
      </main>

      {/* Sticky Footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] px-4 py-3 z-40">
        <div className="max-w-md mx-auto">
            
            {/* Terms Checkbox - Compact Version */}
            <div 
                className="flex items-start gap-2.5 mb-3 cursor-pointer group select-none"
                onClick={() => setTermsAccepted(!termsAccepted)}
            >
                <div className={`
                    mt-0.5 w-4 h-4 rounded-[4px] border flex items-center justify-center transition-all duration-200 shrink-0
                    ${termsAccepted ? 'bg-blue-600 border-blue-600' : 'bg-white border-gray-400 group-hover:border-blue-500'}
                `}>
                    {termsAccepted && <Check size={12} className="text-white" strokeWidth={3} />}
                </div>
                
                <div className="flex-1 text-[11px] text-gray-500 leading-snug">
                    <span className="inline">By proceeding, I agree to the </span>
                    <span className="text-blue-600 font-medium">Terms & Conditions</span>
                    
                    {!isConsentExpanded ? (
                        <>
                           <span>... </span>
                           <button 
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setIsConsentExpanded(true);
                                }}
                                className="text-blue-600 font-bold hover:underline inline-block"
                           >
                               Read More
                           </button>
                        </>
                    ) : (
                        <>
                            <span> and </span>
                            <span className="text-blue-600 font-medium">Privacy Policy</span>
                            <span> and authorize One97 Communications & its lending partners to fetch my credit report.</span>
                            <button 
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setIsConsentExpanded(false);
                                }}
                                className="text-gray-400 font-medium ml-1 hover:text-gray-600"
                           >
                               Show Less
                           </button>
                        </>
                    )}
                </div>
            </div>

            {/* CTA Button with 3 Arrows Shimmer */}
            <button
                disabled={!isCTAEnabled}
                className={`
                    w-full py-3.5 rounded-full font-bold text-base transition-all duration-300 shadow-md flex items-center justify-center relative overflow-hidden group
                    ${isCTAEnabled 
                        ? 'bg-[#002E6E] text-white hover:bg-[#002558] hover:shadow-lg transform active:scale-[0.98] cursor-pointer' 
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'}
                `}
            >
                {/* Shimmer Overlay */}
                {isCTAEnabled && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shimmer pointer-events-none" />
                )}
                
                <span className="relative z-10 flex items-center gap-1">
                    <span>View Loan Offers</span>
                    {isCTAEnabled && (
                        <div className="flex items-center -space-x-3 ml-1">
                             <ChevronRight size={20} strokeWidth={3} className="animate-arrow text-white/40" style={{ animationDelay: '0s' }} />
                             <ChevronRight size={20} strokeWidth={3} className="animate-arrow text-white/70" style={{ animationDelay: '0.1s' }} />
                             <ChevronRight size={20} strokeWidth={3} className="animate-arrow text-white" style={{ animationDelay: '0.2s' }} />
                        </div>
                    )}
                </span>
            </button>

            {/* Trust Footer with Gradient */}
            <div className="mt-3 flex items-center justify-center gap-1.5 text-xs font-medium">
                <ShieldCheck size={14} className="text-green-600" />
                <span className="bg-gradient-to-r from-green-600 via-blue-600 to-blue-800 bg-clip-text text-transparent">
                    No impact on your credit score
                </span>
            </div>
        </div>
      </div>
    </div>
  );
};