import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export const Navbar = (props) => {
  const logout = () => {
    localStorage.clear();
  };

  return (
    <ul className="navbar">
      <li className="navbar__item">
        <Link className="navbar__link" to="/locations">
          Locations
        </Link>
      </li>
      <li className="navbar__item">
        <Link className="navbar__link" to="/products">
          Products
        </Link>
      </li>
      <li className="navbar__item">
        <Link className="navbar__link" to="/employees">
          Employees
        </Link>
      </li>
      <li className="navbar__item">
        <Link className="navbar__link" to="/order">
          My Order
        </Link>
      </li>
      <li className="navbar__item">
        <Link className="navbar__link" to="/">
          <button className="logout-button" onClick={logout}>
            Log Out
          </button>
        </Link>
      </li>
    </ul>
  );
};
