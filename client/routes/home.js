import React from 'react'
import { Route } from 'react-router-dom'

import MenuStat from '../container/statistique/MenuStat'
import MenuCompta from '../container/comptabilite/MenuCompta'
import MenuTeletrans from '../container/teletrans/MenuTeletrans'
import MenuAgenda from '../container/agenda/MenuAgenda'
import MenuGestion from '../container/gestion/MenuGestion'
import MenuParam from '../container/params/MenuParam'

const HomeRoute = (
  <>
    <Route path="/stats" component={MenuStat} />
    <Route path="/compta" component={MenuCompta} />
    <Route path="/agenda" component={MenuAgenda} />
    <Route path="/gestion" component={MenuGestion} />
    <Route path="/teletrans" component={MenuTeletrans} />
    <Route path="/params" component={MenuParam} />
  </>
)

export default HomeRoute