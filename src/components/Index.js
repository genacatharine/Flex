import React from 'react'
import {Button, Icon, Navbar, NavItem, Row, Input, Autocomplete} from 'react-materialize'



const Index = () => {
  return (
    <div>

        <Navbar brand='Flex' right>
          <NavItem href='components.html'>List a Membership</NavItem>
          <NavItem href='components.html'>About</NavItem>
          <NavItem href='components.html'>Sign Up</NavItem>
          <NavItem href='get-started.html'>Login</NavItem>
        </Navbar>


        <div className="background-container">
          <div className="search-container">
            <div>
              <h1>FLEX</h1>
              <h5>Rent short-term gym memberships. Work out wherever you want.</h5>
              <div>
                <Row>
                	<Autocomplete title='Where'
              		data={
              			{

              			}
              		}/>
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
