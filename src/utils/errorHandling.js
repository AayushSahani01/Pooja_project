// Global error handling utilities

// Error types
export const ERROR_TYPES = {
  NETWORK: 'NETWORK_ERROR',
  VALIDATION: 'VALIDATION_ERROR',
  AUTH: 'AUTH_ERROR',
  NOT_FOUND: 'NOT_FOUND_ERROR',
  SERVER: 'SERVER_ERROR',
  CLIENT: 'CLIENT_ERROR',
  PERMISSION: 'PERMISSION_ERROR',
  TIMEOUT: 'TIMEOUT_ERROR'
};

// Error severity levels
export const ERROR_SEVERITY = {
  LOW: 'low',
  MEDIUM: 'medium',
  HIGH: 'high',
  CRITICAL: 'critical'
};

// Create standardized error object
export const createError = (type, message, details = {}) => {
  return {
    type,
    message,
    details,
    timestamp: new Date().toISOString(),
    id: `error-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
  };
};

// Network error handler
export const handleNetworkError = (error) => {
  if (!navigator.onLine) {
    return createError(
      ERROR_TYPES.NETWORK,
      'You appear to be offline. Please check your internet connection.',
      { offline: true }
    );
  }

  if (error.code === 'ECONNABORTED') {
    return createError(
      ERROR_TYPES.TIMEOUT,
      'Request timed out. Please try again.',
      { timeout: true }
    );
  }

  return createError(
    ERROR_TYPES.NETWORK,
    'Network error occurred. Please try again.',
    { originalError: error.message }
  );
};

// API error handler
export const handleApiError = (error) => {
  const status = error.response?.status;
  const data = error.response?.data;

  switch (status) {
    case 400:
      return createError(
        ERROR_TYPES.VALIDATION,
        data?.message || 'Invalid request. Please check your input.',
        { status, data }
      );
    
    case 401:
      return createError(
        ERROR_TYPES.AUTH,
        'Please log in to continue.',
        { status, data, requiresLogin: true }
      );
    
    case 403:
      return createError(
        ERROR_TYPES.PERMISSION,
        'You don\'t have permission to access this resource.',
        { status, data }
      );
    
    case 404:
      return createError(
        ERROR_TYPES.NOT_FOUND,
        'The requested resource was not found.',
        { status, data }
      );
    
    case 429:
      return createError(
        ERROR_TYPES.SERVER,
        'Too many requests. Please wait a moment and try again.',
        { status, data, rateLimited: true }
      );
    
    case 500:
    case 502:
    case 503:
    case 504:
      return createError(
        ERROR_TYPES.SERVER,
        'Server error occurred. Please try again later.',
        { status, data, serverError: true }
      );
    
    default:
      return createError(
        ERROR_TYPES.CLIENT,
        data?.message || 'An unexpected error occurred.',
        { status, data }
      );
  }
};

// Form validation error handler
export const handleFormError = (validationErrors) => {
  const fieldErrors = {};
  const generalErrors = [];

  Object.entries(validationErrors).forEach(([field, messages]) => {
    if (Array.isArray(messages)) {
      fieldErrors[field] = messages[0]; // Take first error message
    } else {
      fieldErrors[field] = messages;
    }
  });

  return {
    type: ERROR_TYPES.VALIDATION,
    fieldErrors,
    generalErrors,
    hasFieldErrors: Object.keys(fieldErrors).length > 0,
    hasGeneralErrors: generalErrors.length > 0
  };
};

// Global error reporter
export const reportError = (error, context = {}) => {
  const errorReport = {
    ...error,
    context: {
      url: window.location.href,
      userAgent: navigator.userAgent,
      timestamp: new Date().toISOString(),
      ...context
    }
  };

  // In development, log to console
  if (process.env.NODE_ENV === 'development') {
    console.error('Error Report:', errorReport);
  }

  // In production, send to error tracking service
  // Example: Sentry, LogRocket, Rollbar, etc.
  // errorTrackingService.captureException(errorReport);

  return errorReport;
};

// Retry mechanism
export const createRetryHandler = (fn, maxRetries = 3, delay = 1000) => {
  return async (...args) => {
    let lastError;
    
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        return await fn(...args);
      } catch (error) {
        lastError = error;
        
        if (attempt === maxRetries) {
          throw lastError;
        }
        
        // Exponential backoff
        const waitTime = delay * Math.pow(2, attempt - 1);
        await new Promise(resolve => setTimeout(resolve, waitTime));
      }
    }
  };
};

// Safe async function wrapper
export const safeAsync = (asyncFn) => {
  return async (...args) => {
    try {
      return { data: await asyncFn(...args), error: null };
    } catch (error) {
      return { data: null, error: handleApiError(error) };
    }
  };
};

// Component error wrapper
export const withErrorHandling = (Component, fallbackComponent = null) => {
  return function ErrorHandledComponent(props) {
    return (
      <ErrorBoundary fallback={fallbackComponent}>
        <Component {...props} />
      </ErrorBoundary>
    );
  };
};

// User-friendly error messages
export const getUserFriendlyMessage = (error) => {
  const messages = {
    [ERROR_TYPES.NETWORK]: 'Connection problem. Please check your internet and try again.',
    [ERROR_TYPES.VALIDATION]: 'Please check your input and try again.',
    [ERROR_TYPES.AUTH]: 'Please log in to continue.',
    [ERROR_TYPES.NOT_FOUND]: 'The page or resource you\'re looking for doesn\'t exist.',
    [ERROR_TYPES.SERVER]: 'Our servers are having trouble. Please try again in a moment.',
    [ERROR_TYPES.PERMISSION]: 'You don\'t have permission to do that.',
    [ERROR_TYPES.TIMEOUT]: 'The request took too long. Please try again.'
  };

  return messages[error.type] || error.message || 'Something went wrong. Please try again.';
};

// Error notification system
export const notifyError = (error, options = {}) => {
  const { 
    showToast = true, 
    duration = 5000,
    severity = ERROR_SEVERITY.MEDIUM 
  } = options;

  const message = getUserFriendlyMessage(error);

  if (showToast) {
    // This would integrate with your toast notification system
    // toast.error(message, { duration });
    console.error('Error notification:', message);
  }

  // Report critical errors immediately
  if (severity === ERROR_SEVERITY.CRITICAL) {
    reportError(error, { severity });
  }

  return message;
};