import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {


  return (

        <div className='centerNavbar'>
          <Link to='/' style={{ textDecoration: 'none' }}>
          <p className='test'>Research project</p>
          </Link>
        </div>
  );
}

export default Navbar;