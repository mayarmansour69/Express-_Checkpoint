import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/services">Our Services</Link>
      <Link to="/contact">Contact us</Link>
    </nav>
  );
}

export default Navbar;
