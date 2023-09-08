import { useEffect, useState } from 'react';

const getWindowDimensions = (isWindowUndefined: boolean) => {
  const width = isWindowUndefined ? window.innerWidth : null;
  const height = isWindowUndefined ? window.innerHeight : null;

  return { width, height };
};

export const useWindowDimensions = () => {
  const hasWindow = typeof window !== 'undefined';

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions(hasWindow));

  const handleResize = () => {
    setWindowDimensions(getWindowDimensions(hasWindow));
  };

  useEffect(() => {
    if (hasWindow) {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [hasWindow]);
  return windowDimensions;
};
