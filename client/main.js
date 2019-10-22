import React from 'react';
import ReactDOM from 'react-dom'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import HomeRoute from './routes/home'
import Home from '../client/container/home/Home'
import Login from '../client/components/login/Login'
import SaisieActe from './container/gestion/saisie_acte/SaisieActe'


const routes = (
  <>   
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path="/saisie_acte" component={SaisieActe}/>
        <Route path="/login" component={Login} />
        { HomeRoute }
      </Switch>
      
    </BrowserRouter>
  </>
)

Meteor.startup(()=>{
  ReactDOM.render(routes,document.getElementById('root'))
})