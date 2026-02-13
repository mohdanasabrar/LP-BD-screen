import React from 'react';
import { CreditCard, Mail } from 'lucide-react';

interface PersonalDetailsInputsProps {
    pan: string;
    email: string;
    onPanChange: (value: string) => void;
    onEmailChange: (value: string) => void;
}

export const PersonalDetailsInputs: React.FC<PersonalDetailsInputsProps> = ({ 
    pan, 
    email, 
    onPanChange, 
    onEmailChange 
}) => {
    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 space-y-5">
            {/* PAN Input */}
            <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                    Permanent Account Number (PAN)
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                        <CreditCard size={20} />
                    </div>
                    <input
                        type="text"
                        value={pan}
                        onChange={(e) => onPanChange(e.target.value.toUpperCase())}
                        maxLength={10}
                        placeholder="Enter 10-digit PAN"
                        className="block w-full pl-10 pr-3 py-3.5 border border-gray-300 rounded-xl leading-5 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-base uppercase font-medium"
                    />
                </div>
            </div>

            {/* Email Input */}
            <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                    Personal Email ID
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                        <Mail size={20} />
                    </div>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => onEmailChange(e.target.value)}
                        placeholder="Enter email address"
                        className="block w-full pl-10 pr-3 py-3.5 border border-gray-300 rounded-xl leading-5 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-base font-medium"
                    />
                </div>
            </div>
        </div>
    );
};