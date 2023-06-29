import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/user/operations';
import { selectUserName } from 'redux/user/selectors';

export const UserMenu = () => {
  const userName = useSelector(selectUserName);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Welcome, {userName}</p>
      <button onClick={() => dispatch(logOut())}>Logout</button>
    </div>
  );
};
