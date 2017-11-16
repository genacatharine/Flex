import React from 'react'
<<<<<<< HEAD
import {Button, Icon, Navbar, NavItem, Row, Input, Autocomplete, Modal} from 'react-materialize'
=======
import {Button, Icon, Navbar, NavItem, Row, Input, Autocomplete} from 'react-materialize'
>>>>>>> a23c511bc4101df3d109037d9bf15c50a8361113

const Header = () => {

  // function modal(e) {
  //   e.preventDefault()
  //   console.log('test')
  //   $('#foo').modal('open')
  // }

  return (

<<<<<<< HEAD
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
=======
    <Navbar brand='FLEX' right>
      <NavItem href='list-your-membership'>List a Membership</NavItem>
      <NavItem href='components.html'>About</NavItem>
      <NavItem href='components.html'>Sign Up</NavItem>
      <NavItem href='get-started.html'>Login</NavItem>
    </Navbar>
>>>>>>> a23c511bc4101df3d109037d9bf15c50a8361113

  )

}

export default Header
