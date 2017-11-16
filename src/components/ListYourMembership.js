import React from 'react'
import Header from '../components/Header'
import {Button, Icon, Navbar, NavItem, Row, Input, Autocomplete} from 'react-materialize'
import './ListYourMembership.css';

const ListYourMembership = () => {

  return (

    // https://static1.squarespace.com/static/5995d96dbf629ab9fc226638/t/59d29e3912abd95b114165e0/1506977910596/Equinox.jpg

    <div>
      <Header />

      <div className="list-your-membership-background-container">
        <div className="search-container">
          <div>
            <h1 className="list-your-membership-header" >List Your</h1>
            <h1 className="list-your-membership-header" >Gym Membership</h1>
          </div>
        </div>
        <div className="list-your-membership-button-div">
          <a href="list"><Button href="list" className="search-button" waves='light'>List Your Membership</Button></a>
        </div>
      </div>

    </div>

  )

}

export default ListYourMembership
