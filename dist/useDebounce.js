import { useEffect, useRef, useState } from 'react';
function useDebounce(input, delay) {
    if (delay < 0) {
        console.error('Delay should be a non-negative number.');
        return;
    }
    const [debouncedValue, setDebouncedValue] = useState(undefined);
    const timeoutRef = useRef(null);
    useEffect(() => {
        const handler = () => {
            setDebouncedValue(typeof input === 'function' ? input() : input);
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
