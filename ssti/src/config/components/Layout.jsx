import React from 'react';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

const Layout = ({ children }) => (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );

export default Layout
