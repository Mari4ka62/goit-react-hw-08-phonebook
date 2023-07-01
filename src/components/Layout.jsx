import React, { Suspense } from 'react';
import { AppBar } from './AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import css from './Layout.module.css';

const Layout = () => {
  return (
    <div>
      <AppBar />
      <section className={css.wrapper}>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </section>
      <Toaster position="top-right" />
    </div>
  );
};

export default Layout;
