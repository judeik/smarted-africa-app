import React, { useState, useEffect } from 'react';
import { Phone, Mail, User, Lock, RotateCcw, Clock } from 'lucide-react';
import InputField from '../components/forms/InputField';
import PasswordStrength from '../components/forms/PasswordStrength';
import CaptchaComponent from '../components/forms/CaptchaComponent';
import ProgressBar from '../components/navigation/ProgressBar';
import ErrorAlert from '../components/alerts/ErrorAlert';
import SuccessAlert from '../components/alerts/SuccessAlert';

const Signup = ({ 
  formData, 
  errors, 
  captchaSolved, 
  isPhone, 
  globalError, 
  globalSuccess, 
  globalWarning,
  currentStep,
  onChange, 
  onCaptchaSolve, 
  onSubmit, 
  onResendToken,
  resendCooldown,
  onBackToLogin 
}) => {
  const signupSteps = ['Identifier', 'Confirm', 'Password', 'Profile'];
  
  const isFormValid = () => {
    if (currentStep === 0) {
      return formData.identifier && !errors.identifier;
    } else if (currentStep === 1) {
      return formData.token && !errors.token;
    } else if (currentStep === 2) {
      return formData.password && formData.confirmPassword && 
             !errors.password && !errors.confirmPassword;
    } else if (currentStep === 3) {
      return formData.firstName && formData.lastName && 
             formData.termsAccepted && captchaSolved;
    }
    return true;
  };

  if (currentStep === 1) {
    return (
      <>
        <div className="text-center py-4">
          <CheckCircle className="mx-auto h-12 w-12 text-green-500 mb-3" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">Check your {isPhone ? 'phone' : 'inbox'}</h3>
          <p className="text-gray-600 mb-4">
            We've sent a 6-digit verification code to{' '}
            <span className="font-medium">
              {isPhone ? formData.identifier : formData.identifier}
            </span>
          </p>
        </div>
        
        <InputField
          label="Verification Code"
          id="token"
          value={formData.token}
          onChange={onChange}
          error={errors.token}
          placeholder="123456"
          required
          maxLength={6}
        />
        
        <div className="flex justify-between items-center mt-2">
          <button
            type="button"
            onClick={onResendToken}
            disabled={resendCooldown > 0}
            className={`text-sm font-medium ${
              resendCooldown > 0 
                ? 'text-gray-400 cursor-not-allowed' 
                : 'text-green-600 hover:text-green-500'
            }`}
          >
            {resendCooldown > 0 ? (
              <span className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                Resend in {resendCooldown}s
              </span>
            ) : (
              <span className="flex items-center">
                <RotateCcw className="h-4 w-4 mr-1" />
                Resend code
              </span>
            )}
          </button>
          
          <button
            type="button"
            onClick={() => onChange({ target: { name: 'currentStep', value: 0 } })}
            className="text-sm text-gray-600 hover:text-gray-900"
          >
            Change {isPhone ? 'phone' : 'email'}
          </button>
        </div>
        
        <button
          type="submit"
          disabled={!isFormValid()}
          className={`w-full mt-6 py-2 px-4 rounded-md text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 ${
            !isFormValid()
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-green-600 hover:bg-green-700 focus:ring-green-500'
          }`}
        >
          Verify Code
        </button>
      </>
    );
  }
  
  return (
    <>
      {currentStep < signupSteps.length && (
        <ProgressBar currentStep={currentStep} steps={signupSteps} />
      )}
      
      <SuccessAlert message={globalSuccess} />
      <ErrorAlert message={globalError} />
      
      {currentStep === 0 && (
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
      )}
      
      {currentStep === 2 && (
        <>
          <InputField
            label="Password"
            id="password"
            type="password"
            value={formData.password}
            onChange={onChange}
            error={errors.password}
            placeholder="••••••••"
            required
            icon={Lock}
            showPasswordToggle
            showPassword={formData.showPassword}
            setShowPassword={(show) => onChange({ target: { name: 'showPassword', value: show } })}
            onInput={(e) => {
              const value = e.target.value;
              onChange({ target: { name: 'password', value } });
            }}
          />
          <PasswordStrength password={formData.password} />
          
          <InputField
            label="Confirm Password"
            id="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={onChange}
            error={errors.confirmPassword}
            placeholder="••••••••"
            required
            icon={Lock}
            showPasswordToggle
            showPassword={formData.showConfirmPassword}
            setShowPassword={(show) => onChange({ target: { name: 'showConfirmPassword', value: show } })}
          />
        </>
      )}
      
      {currentStep === 3 && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <InputField
              label="First Name"
              id="firstName"
              value={formData.firstName}
              onChange={onChange}
              error={errors.firstName}
              placeholder="John"
              required
              icon={User}
            />
            <InputField
              label="Last Name"
              id="lastName"
              value={formData.lastName}
              onChange={onChange}
              error={errors.lastName}
              placeholder="Doe"
              required
              icon={User}
            />
          </div>
          
          <div className="mb-4">
            <label className="flex items-start">
              <input
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={(e) => onChange(e)}
                className="mt-1 h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                aria-describedby="terms-error"
              />
              <span className="ml-2 text-sm text-gray-700">
                I agree to the <a href="#" className="text-green-600 hover:underline">Terms of Service</a> and <a href="#" className="text-green-600 hover:underline">Privacy Policy</a>
              </span>
            </label>
            {errors.termsAccepted && (
              <p id="terms-error" className="mt-1 text-sm text-red-600 flex items-center">
                <AlertCircle className="h-4 w-4 mr-1" />
                {errors.termsAccepted}
              </p>
            )}
          </div>
          
          {formData.termsAccepted && (
            <CaptchaComponent 
              onSolve={onCaptchaSolve} 
              solved={captchaSolved} 
            />
          )}
        </>
      )}
      
      <button
        type="submit"
        disabled={!isFormValid()}
        className={`w-full py-2 px-4 rounded-md text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 ${
          !isFormValid()
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-green-600 hover:bg-green-700 focus:ring-green-500'
        }`}
      >
        {currentStep === 0 ? 'Send Verification Code' : 
         currentStep === 1 ? 'Verify Code' :
         currentStep === 2 ? 'Set Password' :
         'Complete Signup'}
      </button>
      
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          Already have an account?{' '}
          <button
            onClick={onBackToLogin}
            className="font-medium text-green-600 hover:text-green-500 focus:outline-none focus:underline"
            aria-label="Switch to login page"
          >
            Sign in
          </button>
        </p>
      </div>
    </>
  );
};

export default Signup;