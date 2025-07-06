import { useEffect, useRef, useState } from 'react';

export function useCounterAnimation(
  targetValue: number,
  duration: number = 2000,
  shouldStart: boolean = false
) {
  const [currentValue, setCurrentValue] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const animationRef = useRef<number>();

  useEffect(() => {
    if (!shouldStart || hasStarted) return;

    setHasStarted(true);
    const startTime = Date.now();
    const startValue = 0;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const value = Math.floor(startValue + (targetValue - startValue) * easeOutCubic);
      
      setCurrentValue(value);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setCurrentValue(targetValue);
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [targetValue, duration, shouldStart, hasStarted]);

  // Fallback: if shouldStart is true but animation hasn't started after a delay, show target value
  useEffect(() => {
    if (shouldStart && !hasStarted) {
      const fallbackTimer = setTimeout(() => {
        setCurrentValue(targetValue);
        setHasStarted(true);
      }, 500);

      return () => clearTimeout(fallbackTimer);
    }
  }, [shouldStart, hasStarted, targetValue]);

  return currentValue;
}
