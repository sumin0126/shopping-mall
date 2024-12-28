import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import React from 'react';

interface ILayoutContainerProps {
  children: React.ReactNode;
}

/**
 * @description 레이아웃 컨테이너
 */
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
