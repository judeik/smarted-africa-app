import React from 'react';
import { CheckCircle } from 'lucide-react';

const Dashboard = ({ onBackToLogin }) => {
  return (
    <div className="text-center py-12">
      <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-4" />
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome to your dashboard!</h2>
      <p className="text-gray-600 mb-6">You've successfully completed the authentication flow.</p>
      <button
        onClick={onBackToLogin}
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
      >
        Back to Login
      </button>
    </div>
  );
};

export default Dashboard;