import { useCallback, useState } from "react";

const useHttp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    
    const sendRequest = useCallback(async (url, type, token, fn) => {
        setIsLoading(false);
        setError(false);
        const authToken = 'Token ' + token;
        try {
            const response = await fetch(url, {
                method: type,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': authToken
                }
            });

            if (!response.ok) {
                throw new error('Request failed!');
            }

            const data = await response.json();
            fn(data);
        } catch (err) {
            setError(err.message || 'Something went wrong');
        }
        setIsLoading(false);
    }, []);
    
    return {
        isLoading,
        error,
        sendRequest
    }
}

export default useHttp;

/* import { useState, useCallback } from 'react';

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig, applyData) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : 'GET',
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      const data = await response.json();
      applyData(data);
    } catch (err) {
      setError(err.message || 'Something went wrong!');
    }
    setIsLoading(false);
  }, []);

  return sendRequest;
};

export default useHttp; */