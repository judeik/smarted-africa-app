import React from 'react';
import { Phone, Mail } from 'lucide-react';
import InputField from '../components/forms/InputField';
import CaptchaComponent from '../components/forms/CaptchaComponent';
import ErrorAlert from '../components/alerts/ErrorAlert';
import SuccessAlert from '../components/alerts/SuccessAlert';
import WarningAlert from '../components/alerts/WarningAlert';
import LockoutMessage from '../components/alerts/LockoutMessage';

const ForgotPassword = ({ 
  formData, 
  errors, 
  captchaSolved, 
  isPhone, 
  globalError, 
  globalSuccess, 
  globalWarning,
  rateLimit,
  onChange, 
  onCaptchaSolve, 
  onSubmit, 
  onBackToLogin 
}) => {
  const { isLocked, lockoutTime, lockoutDuration } = rateLimit;
  
  const isFormValid = () => {
    return formData.identifier && !errors.identifier && captchaSolved;
  };

  return (
    <>
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Reset your password</h2>
        <p className="mt-2 text-sm text-gray-600">
          Enter your email or phone number and we'll send you reset instructions
        </p>
      </div>
      
      {isLocked && (
        <LockoutMessage lockoutTime={lockoutTime} lockoutDuration={lockoutDuration} />
      )}
      
      <SuccessAlert message={globalSuccess} />
      <ErrorAlert message={globalError} />
      <WarningAlert message={globalWarning} />
      
      <InputField
        label={isPhone ? "Phone Number" : "Email Address"}
        id="identifier"
        type={isPhone ? "tel" : "email"}
        value={formData.identifier}
        onChange={onChange}
        error={errors.identifier}
        placeholder={isPhone ? "+1234567890" : "you@example.com"}
        required
        icon={isPhone ? Phone : Mail}
      />
      
      <CaptchaComponent 
        onSolve={onCaptchaSolve} 
        solved={captchaSolved} 
      />
      
      <button
        type="submit"
        disabled={!isFormValid() || isLocked}
        className={`w-full py-2 px-4 rounded-md text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 ${
          !isFormValid() || isLocked
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-green-600 hover:bg-green-700 focus:ring-green-500'
        }`}
      >
        Send Reset Instructions
      </button>
      
      <div className="mt-4 text-center">
        <button
          onClick={onBackToLogin}
          className="text-sm font-medium text-green-600 hover:text-green-500 focus:outline-none"
        >
          Back to login
        </button>
      </div>
    </>
  );
};

export default ForgotPassword;