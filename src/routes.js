'use strict';

import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout';
import IndexPage from './components/IndexPage';
import LoginPage from './components/LoginPage';
import Birthdays from './components/Birthdays';
import Events from './components/Events';
import NotFoundPage from './components/NotFoundPage';

function requireAuth(nextState, replace) {
  console.log("here")
  if (true) {
    replace({
      pathname: "/login",
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={LoginPage} onEnter={requireAuth}/>
    <Route path="/profile" component={IndexPage}/>
    <Route path="/login" component={LoginPage}/>
    <Route path="/bdaySettings" component={Birthdays}/>
    <Route path="/eventSettings" component={Events}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);

export default routes;
