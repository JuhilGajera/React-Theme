import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from './Component/redux/theme';
import './App.css';
import { Link, Outlet } from 'react-router-dom';

const App = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <>
      <div className={`App ${theme}`}>
        <h1>Geekster</h1>
        <button onClick={handleToggleTheme}>Change theme</button>
        <Link to='/'>Home</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/services'>Services</Link>
      </div>
      <Outlet />
    </>
  );
};

export default App;
