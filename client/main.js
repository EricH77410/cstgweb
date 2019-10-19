import React from 'react';
import ReactDOM from 'react-dom'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Home from '../client/container/home/Home'
import SaisieActe from './container/saisie_acte/SaisieActe'

const routes = (
  <>   
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path="/saisie_acte" component={SaisieActe}/>
      </Switch>
    </BrowserRouter>
  </>
)

Meteor.startup(()=>{
  ReactDOM.render(routes,document.getElementById('root'))
})