import React, { useRef } from 'react';
import { Phone, Mail, Lock } from 'lucide-react';
import InputField from '../components/forms/InputField';
import CaptchaComponent from '../components/forms/CaptchaComponent';
import ErrorAlert from '../components/alerts/ErrorAlert';
import SuccessAlert from '../components/alerts/SuccessAlert';
import WarningAlert from '../components/alerts/WarningAlert';
import LockoutMessage from '../components/alerts/LockoutMessage';

const Login = ({ 
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
  onForgotPassword,
  onSignup 
}) => {
  const identifierRef = useRef(null);
  const { isLocked, lockoutTime, lockoutDuration } = rateLimit;
  
  const isFormValid = () => {
    return formData.identifier && formData.password && 
           !errors.identifier && !errors.password && captchaSolved;
  };

  return (
    <>
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
        ref={identifierRef}
      />
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
      />
      
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
          />
          <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
            Remember me
          </label>
        </div>
        <div className="text-sm">
          <button
            onClick={onForgotPassword}
            className="font-medium text-green-600 hover:text-green-500 focus:outline-none"
          >
            Forgot password?
          </button>
        </div>
      </div>
      
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
        Sign in
      </button>
      
      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">Or continue with</span>
          </div>
        </div>
        
        <div className="mt-6 grid grid-cols-3 gap-3">
          <button
            type="button"
            className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            <span className="sr-only">Sign in with Google</span>
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z" />
            </svg>
          </button>
          <button
            type="button"
            className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            <span className="sr-only">Sign in with Facebook</span>
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
            </svg>
          </button>
          <button
            type="button"
            className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            <span className="sr-only">Sign in with GitHub</span>
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
      
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          Don't have an account?{' '}
          <button
            onClick={onSignup}
            className="font-medium text-green-600 hover:text-green-500 focus:outline-none focus:underline"
            aria-label="Switch to signup page"
          >
            Sign up
          </button>
        </p>
      </div>
    </>
  );
};

export default Login;