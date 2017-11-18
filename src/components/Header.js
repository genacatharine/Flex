import React from 'react'
import {Button, Icon, Navbar, NavItem, Row, Input, Autocomplete, Modal} from 'react-materialize'
import './Header.css';
// import $ from 'jquery';
declare var $: any;

const Header = ({logoutUser, isLoggedIn, state, modal, changeModalState, createUser, userLogin}) => {

  // if (isLoggedIn() == true) {
  //   console.log('user is logged in')
  //   // $('#loginmodal').modal('close')
  // }
  // isLoggedIn()

  function getCookie(name) {
      var dc = document.cookie;
      var prefix = name + "=";
      var begin = dc.indexOf("; " + prefix);
      if (begin == -1) {
          begin = dc.indexOf(prefix);
          if (begin != 0) return null;
      }
      else
      {
          begin += 2;
          var end = document.cookie.indexOf(";", begin);
          if (end == -1) {
          end = dc.length;
          }
      }
      // because unescape has been deprecated, replaced with decodeURI
      //return unescape(dc.substring(begin + prefix.length, end));
      return decodeURI(dc.substring(begin + prefix.length, end));
  }

  let token = getCookie('token');
  console.log(token)

  function pickModalHtml() {
    if (modal.name === "Welcome to Flex") {
      return <SignUpButtons />
    } else if (modal.name === "Welcome back") {
      return <SignInForm />
    }
    else {
      return <SignUpForm />
    }
  }

  const preChangeModalState = (string) => {
    console.log('premodalstates=change fired')
    changeModalState(string)
  }

  function errorMessageClasses() {
    let classes = "errorMessage u-hidden"
    if (!!modal.loginFailed) {
      classes = "errorMessage"
    }
    return classes
  }


  function SignInForm() {
        console.log('test 2')
    return (
      <div>
        <form onSubmit={getToken}>
          <div>
            <label className="email-label">
              Email
            </label>
            <input name="email" className="email-input">

            </input>
          </div>
          <div>
            <label className="password-label">
              Password
            </label>
            <input name="password" className="password-input">

            </input>
          </div>
          <input id="email-btn" type="submit" value="Sign up" className="btn btn-primary"></input>
        </form>
        <div className={errorMessageClasses()}>
          Please check your email and password.
        </div>
        <span className="signup-already-have-an-account-span">
          Don't have an account?
          <button onClick={() => preChangeModalState("Welcome to Flex")} className="signin-modal-login-btn">Sign up</button>
        </span>
      </div>
    )
  }

  function SignUpButtons() {
    console.log('test')
    return (
      <div>
        <div className="button-container">
          <a id="facebook-btn" ><img className="facebook-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/F_icon_reversed.svg/1000px-F_icon_reversed.svg.png"></img>Sign up with Facebook</a>
          <a id="google-btn" ><img className="google-logo" src="https://cdn.worldvectorlogo.com/logos/google-icon.svg"></img>Sign up with Google</a>
        </div>
        <p className="signup-or-p">or</p>
        <a id="email-btn" onClick={() => preChangeModalState("Let's get Started")} >Sign up with email</a>
        <span className="signup-already-have-an-account-span">
          Already have an account?
          <button onClick={() => preChangeModalState("Welcome back")} className="signin-modal-login-btn">Log in</button>
        </span>
      </div>
    )
  }

  const registerUser = (e) => {
    e.preventDefault()
    createUser({
      first_name: e.target.first_name.value,
      last_name: e.target.last_name.value,
      email: e.target.email.value,
      password: e.target.password.value
    })
  }

  const getToken = (e) => {
    e.preventDefault()
    userLogin({
      email: e.target.email.value,
      password: e.target.password.value
    })
  }

  function SignUpForm() {
    return (
      <div>
        <form onSubmit={registerUser}>
          <div className="main-name-div">
            <div className="name-input-div-left">
              <label className="name-label">
                First name
              </label>
              <input name="first_name" className="name-input">

              </input>
            </div>
            <div className="name-input-div-right">
              <label className="name-label">
                Last name
              </label>
              <input name="last_name" className="name-input">

              </input>
            </div>
          </div>
          <div>
            <label className="email-label">
              Email
            </label>
            <input name="email" className="email-input">

            </input>
          </div>
          <div>
            <label className="password-label">
              Choose a password
            </label>
            <input name="password" className="password-input">

            </input>
          </div>
          <input type="submit" value="Send" className="btn btn-primary"></input>
        </form>
      </div>
    )
  }

  const navSignUpClasses = () => {
    console.log('navClasses ' + state.isLoggedIn)
    if (state.isLoggedIn == true) {
      console.log('yayo')
      $('#loginmodal').modal('close')
      return "u-hidden"
    } else {
      return ""
    }
  }

  const loginNavItem = () => {
    if (token != null) {
      return "Log out"
    } else {
      return "Log in"
    }
  }

  const pickInOrOut = () => {
    if (token != null) {
      return (
        <span>
        <NavItem className="u-hidden" onClick={(e) => {
          preChangeModalState("Welcome to Flex")
          e.preventDefault()
          $('#signupmodal').modal('open')
        }}>Sign up</NavItem>
        <Modal
          id='signupmodal'
          header={modal.name}>
          {pickModalHtml()}
        </Modal>
      </span>
      )
    } else {
      return (
        <span>
        <NavItem className="" onClick={(e) => {
          preChangeModalState("Welcome to Flex")
          e.preventDefault()
          $('#signupmodal').modal('open')
        }}>Sign up</NavItem>
        <Modal
          id='signupmodal'
          header={modal.name}>
          {pickModalHtml()}
        </Modal>
      </span>
      )
    }
  }

  function loginButton() {
    if (token != null) {
      console.log('logout')
      logoutUser()
    } else {
      console.log('login')
    }
  }

  return (

    <div className="header">

      <Navbar brand='FLEX' right>
        <NavItem href='list'>List</NavItem>
        <NavItem href='search'>Rent</NavItem>
        <NavItem href='components.html'>About</NavItem>

        {pickInOrOut()}

      	<NavItem onClick={(e) => {
          loginButton()
          preChangeModalState("Welcome back")
          e.preventDefault()
      		$('#loginmodal').modal('open')
      	}}>{loginNavItem()}</NavItem>
      	<Modal
      		id='loginmodal'
      		header={modal.name}>
      		{pickModalHtml()}
      	</Modal>

      </Navbar>

   </div>


  )

}

export default Header
