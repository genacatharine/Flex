import React, { Component } from 'react';
import { BrowserRouter, Browser, Route, Link, Router, Switch } from 'react-router-dom'
import logo from './logo.svg';
import $ from 'jquery'
import {Button, Icon, Navbar, NavItem, Row, Input} from 'react-materialize'

import HomePage from './components/HomePage'
import Payment from './components/Payment'
import List from './components/List'
import history from './components/History'
import ErrorPage from './components/ErrorPage'
import ListYourMembership from './components/ListYourMembership'
import Search from './components/Search'


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (

      <div>

        <Router history={history}>
          <Switch>
            <Route path="/payment" component={Payment} />
            <Route path="/list" component={List} />
            <Route path="/list-your-membership" component={ListYourMembership} />
            <Route path="/search" component={Search} />
            <Route path="/:id" component={ErrorPage} />
            <HomePage />
          </Switch>
        </Router>


      </div>

    );
  }
}

export default App;
