import React, { Component } from 'react';
import { BrowserRouter, Browser, Route, Link, Router, Switch } from 'react-router-dom'
import logo from './logo.svg';
import $ from 'jquery'
import {Button, Icon, Navbar, NavItem, Row, Input} from 'react-materialize'

import Index from './components/Index'
import Payment from './components/Payment'
import List from './components/List'
import history from './components/History'



class App extends Component {
  render() {
    return (

      <div>

        <Router history={history}>
          <Switch>
            <Route path="/payment" component={Payment} />
            <Route path="/list" component={List} />
            <Route path="/" component={Index} />
          </Switch>
        </Router>


      </div>

    );
  }
}

export default App;
