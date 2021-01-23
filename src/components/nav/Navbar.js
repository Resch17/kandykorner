import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export const Navbar = (props) => {
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
    </ul>
  )
}
