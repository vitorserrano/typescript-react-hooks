import { useEffect, useState } from "react";

export const useDebouncedValue = (
  value: number | string,
  delay: number = 500
) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

// resolve problema de requisições feitas a cada letra digitada pelo usuário.
