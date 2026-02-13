import React from 'react';
import { UserDetails } from '../types';

interface ReviewDetailsProps {
    details: UserDetails;
}

export const ReviewDetails: React.FC<ReviewDetailsProps> = ({ details }) => {
  return (
    <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-sm font-semibold text-gray-900">Review details</h3>
        <button className="text-sm text-blue-600 font-medium hover:text-blue-700">Edit</button>
      </div>
      <p className="text-xs text-gray-500 mb-4">We have pre-filled your PAN & Email</p>
      
      <div className="space-y-3">
        <div className="flex justify-between items-center border-b border-gray-200 pb-2 border-dashed">
            <span className="text-sm text-gray-500">PAN</span>
            <span className="text-sm font-medium text-gray-900 tracking-wider">{details.pan}</span>
        </div>
        <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">Email</span>
            <span className="text-sm font-medium text-gray-900">{details.email}</span>
        </div>
      </div>
    </div>
  );
};