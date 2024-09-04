import React from 'react';
import Head from 'next/head';

import Navbar from './Navbar';
import Footer from './Footer';
import SaleBanner from './SaleBanner';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>Kopped Kulture</title>
      </Head>
      <header>
        <Navbar />
        <SaleBanner /> {/* Add the SaleBanner here */}
      </header>
      <main className="main-container">
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
