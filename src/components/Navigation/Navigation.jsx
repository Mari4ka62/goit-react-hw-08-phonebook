import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  //   const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {/* {isLoggedIn */}
      <NavLink to="/tasks">Tasks</NavLink>
    </nav>
  );
};
export default Navigation;
