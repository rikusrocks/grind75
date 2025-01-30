import React, { useState, useRef } from 'react';

const HttpRequestQueue = () => {
  const [status, setStatus] = useState('');
  const requestQueue = useRef([]);
  const isRequestRunning = useRef(false);
  const cancelRequests = useRef(false);

  const handleButtonClick = () => {
    addRequestToQueue(() => sendHttpRequest());
  };

  const addRequestToQueue = (requestFunc) => {
    requestQueue.current.push(requestFunc);
    if (!isRequestRunning.current) {
      processQueue();
    }
  };

  const processQueue = async () => {
    isRequestRunning.current = true;
    cancelRequests.current = false;

    while (requestQueue.current.length > 0) {
      if (cancelRequests.current) {
        setStatus('Requests cancelled due to failure.');
        break;
      }

      const requestFunc = requestQueue.current.shift();
      try {
        await requestFunc();
      } catch (error) {
        cancelRequests.current = true;
        console.error("Request failed:", error);
      }
    }

    isRequestRunning.current = false;
  };

  const sendHttpRequest = async () => {
    setStatus('Sending request...');
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate a 50% chance of failure
        if (Math.random() > 0.5) {
          setStatus('Request succeeded!');
          resolve('Success');
        } else {
          setStatus('Request failed!');
          reject('Error');
        }
      }, 1000); // Simulate network delay
    });
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Send HTTP Request</button>
      <div>{status}</div>
    </div>
  );
};

export default HttpRequestQueue;
