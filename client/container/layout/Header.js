import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="nav navbar-default">
      <div className="navbar-header">
        <Link to="/" className="navbar-brand">CS Trophy Gestion</Link>
      </div>
      <ul className="nav navbar-nav">
        <li>
          <Link to="#">Utilisateurs</Link>
        </li>
        <li>
          <Link to="/saisie_acte">Saisie Acte</Link>
        </li>
       </ul>
    </nav>
  )
}

export default Header