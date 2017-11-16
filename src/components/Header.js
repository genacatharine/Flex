import React from 'react'
import {Button, Icon, Navbar, NavItem, Row, Input, Autocomplete, Modal} from 'react-materialize'

const Header = () => {

  // function modal(e) {
  //   e.preventDefault()
  //   console.log('test')
  //   $('#foo').modal('open')
  // }

  return (

    <div>

      <Navbar brand='FLEX' right>
        <NavItem href='list-your-membership'>List a Membership</NavItem>
        <NavItem href='components.html'>About</NavItem>
        <Modal
          header='Welcome to Flex'
          trigger={  <NavItem >Sign Up</NavItem>}>
          <div className="button-container">
            <a id="facebook-btn" >Sign up With Facebook</a>
            <a id="google-btn" >Sign up With Google</a>
          </div>
        </Modal>
        <NavItem href='get-started.html'>Login</NavItem>
      </Navbar>



      {/* <div>
      	<Button onClick={() => {
      		$('#foo').modal('open')
      	}}>Show Modal</Button>
      	<Modal
      		id='foo'
      		header='Modal Header'>
      		Lorem ipsum dolor sit amet
      	</Modal>
      </div>; */}

   </div>

    <Navbar brand='FLEX' right>
      <NavItem href='list-your-membership'>List a Membership</NavItem>
      <NavItem href='components.html'>About</NavItem>
      <NavItem href='components.html'>Sign Up</NavItem>
      <NavItem href='get-started.html'>Login</NavItem>
    </Navbar>


  )

}

export default Header
