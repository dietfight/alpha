/**
 * Created by Yash on 28/02/16.
 */

import React from 'react'
import { Route, IndexRoute } from 'react-router'

//Website paths
import Index from './compenents/index'
import HomePage from './compenents/web/home'
import AboutPage from './compenents/web/about'
import ContactPage from './compenents/web/contact'
import Login from './compenents/login'

//Component paths
import WorkSpace from './compenents/workspace'
import DailyPlanner from './compenents/dailyPlanner'
import Planner from './compenents/planner'

export default (
  <Route path="/" component={Index}>

    <IndexRoute component={HomePage} />
    <Route path="about" component={AboutPage}></Route>
    <Route path="contact" component={ContactPage}></Route>
    <Route path="login" component={Login}></Route>

    <Route path="app" component={WorkSpace}>
      <IndexRoute component={DailyPlanner} />
      <Route path="today" component={DailyPlanner}></Route>
      <Route path="planner" component={Planner}></Route>
    </Route>

  </Route>
)
