import React from 'react'
import Layout from '../../layout/Layout'
import Arcade from '../schema_dentaire/Arcade'

const SaisieActe = (props) => {
  return (
    <Layout>
    <div className="row">
      <div className="col-9 offset-1">
      HEADER
      </div>
      
    </div>
    <div className="row">
      <div className="col-1">
        NAV
      </div>      
      <div className="col-9">
        <Arcade />
      </div>
      <div className="col-2">
        Palette
      </div>  
      
    </div>
    <div>LISTE ACTES</div>
    </Layout>
  )
}

export default SaisieActe;