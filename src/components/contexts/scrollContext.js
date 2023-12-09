import React, { createContext, useState, useEffect, useContext } from 'react';

const ScrolledContext = createContext();

export const useScrolled = () => {
  return useContext(ScrolledContext);
};

export const ScrolledProvider = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let prevScrollY = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      const scrolledDown = currentScrollY > 50 && currentScrollY > prevScrollY;
      setIsScrolled(scrolledDown);

      prevScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ScrolledContext.Provider value={isScrolled}>
      {children}
    </ScrolledContext.Provider>
  );
};
