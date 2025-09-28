import { useState, useEffect } from 'react';
import api from '../api';

export const useApiCall = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { 
    immediate = true, 
    onSuccess,
    onError,
    transform = (data) => data 
  } = options;

  const execute = async (customUrl = url, customOptions = {}) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await api.get(customUrl, customOptions);
      const transformedData = transform(response.data);
      
      setData(transformedData);
      onSuccess?.(transformedData);
      
      return transformedData;
    } catch (err) {
      const errorMessage = err.response?.data?.message || err.message || 'An error occurred';
      setError(errorMessage);
      onError?.(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (immediate && url) {
      execute();
    }
  }, [url, immediate]);

  return {
    data,
    loading,
    error,
    execute,
    setData,
    setError
  };
};

export const usePost = (url, options = {}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const { onSuccess, onError } = options;

  const execute = async (postData, customUrl = url) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await api.post(customUrl, postData);
      setData(response.data);
      onSuccess?.(response.data);
      
      return response.data;
    } catch (err) {
      const errorMessage = err.response?.data?.message || err.message || 'An error occurred';
      setError(errorMessage);
      onError?.(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    execute,
    loading,
    error,
    data,
    setError
  };
};