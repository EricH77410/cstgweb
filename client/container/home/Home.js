import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../layout/Layout'

const Home = () => {
  return (
    <Layout>
      <div className="home-bg">
          <div className="home-gestion-clinique">
            <Link className="home-link" to="/gestion">Gestion Clinique</Link>
          </div>
          <div className="home-agenda">
            <Link className="home-link" to="/agenda">Agenda</Link>
          </div>
          <div className="home-comptabilite">
            <Link className="home-link" to="/compta">Comptabilité</Link>
          </div>
          <div className="home-stats">
            <Link className="home-link" to="/stats">Statistiques</Link>
          </div>
          <div className="home-teletrans">
            <Link className="home-link" to="/teletrans">Teletransmission</Link>
          </div>
          <div className="home-params">
            <Link className="home-link" to="/params">Paramètrage</Link>
          </div>   
      </div>      
    </Layout>
  )
}

export default Home