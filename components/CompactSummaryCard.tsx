import React from 'react';
import { UserDetails, IncomeType } from '../types';
import { Pencil, MapPin, Briefcase, CreditCard, Mail } from 'lucide-react';

interface CompactSummaryCardProps {
  incomeType: IncomeType;
  pincode: string;
  details: UserDetails;
  onEdit: () => void;
}

export const CompactSummaryCard: React.FC<CompactSummaryCardProps> = ({
  incomeType, pincode, details, onEdit
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
      <div className="flex justify-between items-center mb-5">
         <h3 className="font-bold text-gray-900 text-lg">Your Details</h3>
         <button 
            onClick={onEdit} 
            className="text-blue-600 font-semibold text-sm flex items-center gap-1.5 bg-blue-50 px-3 py-1.5 rounded-full transition-colors hover:bg-blue-100"
         >
            Edit <Pencil size={14} strokeWidth={2.5} />
         </button>
      </div>

      <div className="grid grid-cols-1 gap-5">
         {/* Employment */}
         <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0 text-gray-600 border border-gray-100">
                <Briefcase size={18} />
            </div>
            <div className="flex-1 border-b border-gray-50 pb-2">
                <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">Employment Type</p>
                <p className="text-gray-900 font-medium capitalize">{incomeType === 'business' ? 'Self Employed / Business' : 'Salaried'}</p>
            </div>
         </div>

         {/* Pincode */}
         <div className="flex items-center gap-4">
             <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0 text-gray-600 border border-gray-100">
                <MapPin size={18} />
            </div>
            <div className="flex-1 border-b border-gray-50 pb-2">
                <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">Pincode</p>
                <p className="text-gray-900 font-medium">{pincode}</p>
            </div>
         </div>

         {/* PAN */}
         <div className="flex items-center gap-4">
             <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0 text-gray-600 border border-gray-100">
                <CreditCard size={18} />
            </div>
            <div className="flex-1 border-b border-gray-50 pb-2">
                <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">PAN</p>
                <p className="text-gray-900 font-medium">{details.pan}</p>
            </div>
         </div>

          {/* Email */}
         <div className="flex items-center gap-4">
             <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0 text-gray-600 border border-gray-100">
                <Mail size={18} />
            </div>
            <div className="flex-1">
                <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">Email</p>
                <p className="text-gray-900 font-medium break-all">{details.email}</p>
            </div>
         </div>
      </div>
    </div>
  );
};