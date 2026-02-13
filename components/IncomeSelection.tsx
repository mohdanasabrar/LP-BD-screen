import React from 'react';
import { IncomeType } from '../types';

interface IncomeSelectionProps {
  selected: IncomeType;
  onSelect: (type: IncomeType) => void;
}

export const IncomeSelection: React.FC<IncomeSelectionProps> = ({ selected, onSelect }) => {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-800 mb-3">
        Employment Type
      </label>
      <div className="flex flex-wrap gap-3">
        {/* Salaried Chip */}
        <button
          onClick={() => onSelect('salaried')}
          className={`
            px-5 py-2.5 rounded-full border text-sm font-medium transition-all duration-200 flex items-center gap-2
            ${selected === 'salaried' 
              ? 'border-[#00BAF2] bg-blue-50 text-[#002E6E] ring-1 ring-[#00BAF2]' 
              : 'border-gray-300 bg-white text-gray-600 hover:border-gray-400'}
          `}
        >
          Salaried
        </button>

        {/* Business Chip */}
        <button
          onClick={() => onSelect('business')}
          className={`
            px-5 py-2.5 rounded-full border text-sm font-medium transition-all duration-200 flex items-center gap-2
            ${selected === 'business' 
              ? 'border-[#00BAF2] bg-blue-50 text-[#002E6E] ring-1 ring-[#00BAF2]' 
              : 'border-gray-300 bg-white text-gray-600 hover:border-gray-400'}
          `}
        >
          Self Employed / Business
        </button>
      </div>
    </div>
  );
};