import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="centerNavbar">
      <Link to="/tech" style={{ textDecoration: 'none' }}>
        <p className="app-title">Research project</p>
      </Link>
    </div>
  )
}

export default Navbar
