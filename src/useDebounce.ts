import { useEffect, useRef, useState } from 'react';

type ValueOrFunction<T> = T | (() => T);

function useDebounce<T>(input: ValueOrFunction<T>, delay: number): T | undefined {
  if (delay < 0) {
    console.error('Delay should be a non-negative number.');
    return;
  }

  const [debouncedValue, setDebouncedValue] = useState<T | undefined>(undefined);
  const timeoutRef = useRef<number  | null>(null);

  useEffect(() => {
    const handler = () => {
      setDebouncedValue(typeof input === 'function' ? (input as () => T)() : input);
    };

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(handler, delay);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [input, delay]);

  return debouncedValue;
}

export default useDebounce;
