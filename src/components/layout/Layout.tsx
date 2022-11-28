import React from 'react';
import Header from '../Header/Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Header />
      <main className="container">{children}</main>
    </div>
  );
};

export default Layout;
