"use client";

import { useState, useEffect, useCallback } from "react";

export function useLoadingManager(timeoutMs = 5000) {
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [isFullyLoaded, setIsFullyLoaded] = useState(false);

  const handleVideoReady = useCallback(() => {
    setIsVideoReady(true);
  }, []);

  useEffect(() => {
    // When video is ready, we are ready to reveal the page
    if (isVideoReady) {
      // Add a tiny delay to ensure smooth transition right after video buffers
      const timer = setTimeout(() => {
        setIsFullyLoaded(true);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isVideoReady]);

  useEffect(() => {
    // Safety fallback: Force loaded state after timeout
    const timer = setTimeout(() => {
      setIsFullyLoaded(true);
    }, timeoutMs);

    return () => clearTimeout(timer);
  }, [timeoutMs]);

  return {
    isFullyLoaded,
    handleVideoReady,
  };
}
