import React from 'react';
import { Lock } from 'lucide-react';
import InputField from '../components/forms/InputField';
import PasswordStrength from '../components/forms/PasswordStrength';
import CaptchaComponent from '../components/forms/CaptchaComponent';
import ErrorAlert from '../components/alerts/ErrorAlert';
import SuccessAlert from '../components/alerts/SuccessAlert';
import WarningAlert from '../components/alerts/WarningAlert';
import LockoutMessage from '../components/alerts/LockoutMessage';

const ResetPassword = ({ 
  formData, 
  errors, 
  captchaSolved, 
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
    return formData.password && formData.confirmPassword && 
           !errors.password && !errors.confirmPassword && captchaSolved;
  };

  return (
    <>
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Set new password</h2>
        <p className="mt-2 text-sm text-gray-600">
          Create a new password for your account
        </p>
      </div>
      
      {isLocked && (
        <LockoutMessage lockoutTime={lockoutTime} lockoutDuration={lockoutDuration} />
      )}
      
      <SuccessAlert message={globalSuccess} />
      <ErrorAlert message={globalError} />
      <WarningAlert message={globalWarning} />
      
      <InputField
        label="New Password"
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
        label="Confirm New Password"
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
        Reset Password
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

export default ResetPassword;