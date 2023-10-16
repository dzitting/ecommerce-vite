import React from 'react';
import { Link, Form } from 'react-router-dom';
import '../styles/navbar.modules.css';

const Navbar = () => {
    return (
        <div>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              gap: "1rem",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <li>
              <Link to={"/home"}>Home</Link>
            </li>
            <li>
              <Link to={'/about'}>About</Link>
            </li>
            <li>
              <Link to={'/contact'}>Contact</Link>
            </li>
          </ul>
        </div>
    )
}

export default Navbar;