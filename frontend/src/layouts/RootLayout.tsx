import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../component/navbar';

const RootLayout: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
