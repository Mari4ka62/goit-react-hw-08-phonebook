import AuthNav from 'components/AuthNav/AuthNav';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import React from 'react';

const AppBar = () => {
  return (
    <header>
      <Navigation />
      <UserMenu />
      <AuthNav />
    </header>
  );
};

export default AppBar;
