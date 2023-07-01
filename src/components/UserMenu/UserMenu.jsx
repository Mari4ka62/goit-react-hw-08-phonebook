import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/user/operations';
import { selectUserName } from 'redux/user/selectors';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const userName = useSelector(selectUserName);
  const dispatch = useDispatch();

  return (
    <div className={css.userContainer}>
      <p className={css.text}>Welcome, {userName}</p>
      <button className={css.button} onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};
