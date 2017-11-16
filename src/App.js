import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery'
import {Button, Icon, Navbar, NavItem, Row, Input} from 'react-materialize'

import Index from './components/Index'


class App extends Component {
  render() {
    return (

      <div>

        <Index />

      </div>

    );
  }
}

export default App;
