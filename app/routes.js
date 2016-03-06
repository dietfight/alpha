/**
 * Created by Yash on 28/02/16.
 */

import React from 'react'
import { Route, IndexRoute } from 'react-router'

//Website paths
import Index from './components/index'
import HomePage from './components/web/home'
import AboutPage from './components/web/about'
import ContactPage from './components/web/contact'
import Login from './components/login'

//Component paths
import WorkSpace from './components/workspace'
import DailyPlanner from './components/dailyPlanner'
import Planner from './components/planner'

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
