import React from 'react';
import { Link } from 'react-router-dom';

// Generic error fallback
export const GenericErrorFallback = ({ error, onRetry, onReport }) => (
  <div className="flex items-center justify-center min-h-64 p-6">
    <div className="text-center max-w-md">
      <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
        <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">Something went wrong</h3>
      <p className="text-gray-600 mb-4">This section couldn't load properly.</p>
      <div className="space-x-3">
        <button
          onClick={onRetry}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition"
        >
          Try Again
        </button>
        <button
          onClick={onReport}
          className="border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded transition"
        >
          Report Issue
        </button>
      </div>
    </div>
  </div>
);

// Image loading error fallback
export const ImageErrorFallback = ({ onRetry }) => (
  <div className="flex items-center justify-center bg-gray-100 p-6 rounded">
    <div className="text-center">
      <svg className="w-12 h-12 mx-auto mb-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
      <p className="text-sm text-gray-600 mb-2">Image failed to load</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="text-xs text-blue-600 hover:underline"
        >
          Retry
        </button>
      )}
    </div>
  </div>
);

// Form error fallback
export const FormErrorFallback = ({ error, onRetry }) => (
  <div className="bg-red-50 border border-red-200 rounded p-4">
    <div className="flex items-start">
      <svg className="w-5 h-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <div className="flex-1">
        <h4 className="text-red-800 font-medium">Form Error</h4>
        <p className="text-red-700 text-sm mt-1">
          There was a problem with the form. Please try again.
        </p>
        {error?.message && (
          <p className="text-red-600 text-xs mt-1 font-mono">
            {error.message}
          </p>
        )}
        <button
          onClick={onRetry}
          className="text-red-800 hover:text-red-900 text-sm font-medium mt-2 underline"
        >
          Try again
        </button>
      </div>
    </div>
  </div>
);

// Network error fallback
export const NetworkErrorFallback = ({ onRetry }) => (
  <div className="text-center p-6">
    <div className="w-16 h-16 mx-auto mb-4 bg-yellow-100 rounded-full flex items-center justify-center">
      <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </div>
    <h3 className="text-lg font-semibold text-gray-800 mb-2">Connection Problem</h3>
    <p className="text-gray-600 mb-4">
      Unable to connect to our servers. Please check your internet connection.
    </p>
    <div className="space-y-2">
      <button
        onClick={onRetry}
        className="block w-full bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded transition"
      >
        Try Again
      </button>
      <p className="text-xs text-gray-500">
        If the problem persists, please{' '}
        <Link to="/contacts" className="text-blue-600 hover:underline">
          contact us
        </Link>
      </p>
    </div>
  </div>
);

// Page error fallback (for entire page failures)
export const PageErrorFallback = ({ error, onRetry, onReport }) => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
    <div className="max-w-lg w-full bg-white shadow-lg rounded-lg p-8 text-center">
      <div className="w-20 h-20 mx-auto mb-6 bg-red-100 rounded-full flex items-center justify-center">
        <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
      </div>
      
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Page Error
      </h1>
      
      <p className="text-gray-600 mb-6">
        This page encountered an unexpected error and couldn't load properly.
      </p>

      <div className="space-y-3 mb-6">
        <button
          onClick={onRetry}
          className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-4 rounded-lg transition duration-300"
        >
          Reload Page
        </button>
        
        <Link
          to="/"
          className="block w-full bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 px-4 rounded-lg transition duration-300"
        >
          Go to Homepage
        </Link>
        
        <button
          onClick={onReport}
          className="w-full border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold py-3 px-4 rounded-lg transition duration-300"
        >
          Report This Issue
        </button>
      </div>

      <div className="text-sm text-gray-500">
        <p>Need help? <Link to="/contacts" className="text-blue-600 hover:underline">Contact our support team</Link></p>
      </div>
    </div>
  </div>
);