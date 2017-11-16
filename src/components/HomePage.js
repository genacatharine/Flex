import React from 'react'
import {Button, Icon, Navbar, NavItem, Row, Input, Autocomplete} from 'react-materialize'
import './HomePage.css';
import Header from '../components/Header'

const Index = () => {
  return (
    <div>

      <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Proxima Nova"></link>

      <Header />

        <div className="homepage-background-container">
          <div className="search-container">
            <div>
              <h1 className="homepage-header" >FLEX</h1>
              <h5>Rent short-term gym memberships. Work out wherever you want.</h5>
              <div>
                <Row>
                	<Autocomplete title='Where' data={{}}/>
                </Row>
                <Row>
                  <Input label="When" name='on' type='date' onChange={function(e, value) {}} />
                </Row>
              </div>
              <div>
                <Button className="search-button" waves='light'>Search</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="homepage-about">
          <h4>
            Rent short-term gym memberships.
          </h4>
          <h4>
            Work out wherever you want.
          </h4>
        </div>
    </div>
  )
}


export default Index
