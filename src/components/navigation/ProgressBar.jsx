import React from 'react';

const ProgressBar = ({ currentStep, steps }) => {
  return (
    <div className="w-full mb-6">
      <div className="flex justify-between mb-2">
        {steps.map((step, index) => (
          <span 
            key={index} 
            className={`text-xs font-medium ${
              index <= currentStep ? 'text-green-600' : 'text-gray-400'
            }`}
          >
            {step}
          </span>
        ))}
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-green-500 transition-all duration-500 ease-in-out"
          style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          role="progressbar"
          aria-valuenow={currentStep + 1}
          aria-valuemin={1}
          aria-valuemax={steps.length}
          aria-label={`Step ${currentStep + 1} of ${steps.length}`}
        />
      </div>
    </div>
  );
};

export default ProgressBar;