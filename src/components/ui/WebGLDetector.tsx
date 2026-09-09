import { useState, useEffect } from 'react';

export type QualityTier = 'high' | 'medium' | 'low' | 'fallback';

export function isWebGLAvailable(): boolean {
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch (e) {
    return false;
  }
}

export function isReducedMotionPreferred(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function useDeviceQualityTier(): {
  quality: QualityTier;
  webGLAvailable: boolean;
  reducedMotion: boolean;
} {
  const [webGLAvailable, setWebGLAvailable] = useState<boolean>(true);
  const [reducedMotion, setReducedMotion] = useState<boolean>(false);
  const [quality, setQuality] = useState<QualityTier>('high');

  useEffect(() => {
    const hasWebGL = isWebGLAvailable();
    const prefersReduced = isReducedMotionPreferred();

    setWebGLAvailable(hasWebGL);
    setReducedMotion(prefersReduced);

    if (!hasWebGL || prefersReduced) {
      setQuality('fallback');
      return;
    }

    const screenWidth = window.innerWidth;
    const concurrency = navigator.hardwareConcurrency || 4;

    if (screenWidth < 640 || concurrency <= 2) {
      setQuality('low');
    } else if (screenWidth < 1024 || concurrency <= 4) {
      setQuality('medium');
    } else {
      setQuality('high');
    }

    const handleResize = () => {
      if (!hasWebGL || prefersReduced) return;
      const width = window.innerWidth;
      if (width < 640) setQuality('low');
      else if (width < 1024) setQuality('medium');
      else setQuality('high');
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { quality, webGLAvailable, reducedMotion };
}
