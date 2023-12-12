import React, { createContext, useState, useContext } from 'react';

const NavbarContext = createContext();

const NavbarProvider = ({ children }) => {
  const [navbar, setNavbar] = useState(false);

  const toggleNavbar = () => {
    setNavbar(!navbar);
  };

  const value = {
    navbar,
    setNavbar,
    toggleNavbar,
  };

  return <NavbarContext.Provider value={value}>{children}</NavbarContext.Provider>;
};

const useNavbar = () => {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error('useNavbar must be used within a NavbarProvider');
  }
  return context;
};

export { NavbarProvider, useNavbar };
