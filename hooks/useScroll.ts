import { useState, useEffect, useCallback } from 'react';

export const useScroll = () => {
  const [scroll, setScroll] = useState(1);

  const handleScroll = useCallback(() => {
    setScroll(window.scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return scroll;
};
