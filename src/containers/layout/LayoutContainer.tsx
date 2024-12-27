import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import React from 'react';

interface ILayoutContainerProps {
  children: React.ReactNode;
}

const LayoutContainer = ({ children }: ILayoutContainerProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default LayoutContainer;
