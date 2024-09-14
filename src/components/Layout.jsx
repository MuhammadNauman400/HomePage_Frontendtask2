import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => (
  <div className="flex flex-col items-start">
    <Header />
    <main className="w-full">
      {children}
    </main>
    <Footer />
  </div>
);

export default Layout;