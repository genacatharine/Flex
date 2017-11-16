import React from 'react'
import {Button, Icon, Navbar, NavItem, Row, Input, Autocomplete} from 'react-materialize'


const Header = () => {

  return (

    <Navbar brand='FLEX' right>
      <NavItem href='components.html'>List a Membership</NavItem>
      <NavItem href='components.html'>About</NavItem>
      <NavItem href='components.html'>Sign Up</NavItem>
      <NavItem href='get-started.html'>Login</NavItem>
    </Navbar>

  )

}

export default Header
