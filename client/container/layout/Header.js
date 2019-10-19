import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="nav">
      <Link to="/" className="nav-link">CS Trophy Gestion</Link>
      <Link to="/login" className="nav-link">Login</Link>
      <Link to="/saisie_acte" className="nav-link">Saisie Acte</Link>
      
    </nav>
  )
}

export default Header