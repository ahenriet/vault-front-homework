import { useState, useEffect } from 'react';

/**
 * A custom hook that debounces a value.
 * NB: I could have used lodash's debounce, but as it is a simple one, I preferred not to add another dependency.
 *
 * @param value The value to debounce.
 * @param delay The delay in milliseconds. Default is 500ms.
 * @returns The debounced value.
 */
export default <T>(value: T, delay = 500) => {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => clearTimeout(timeout);
    }, [value, delay]);

    return debouncedValue;
};
