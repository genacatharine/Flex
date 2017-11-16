import React from 'react'
import {Button, Icon, Navbar, NavItem, Row, Input, Autocomplete} from 'react-materialize'
import './List.css';
import Header from './Header'
import DatePicker from './DatePicker'

const List = () => {
  return (
<div>

  <Header />
  <div className="genaslistpage">
<div className="center">

    <h5>LIST YOUR MEMBERSHIP RENTAL HERE</h5>
  </div>
  <form>
    <Row>
      <div className="genas-input">
      	<Input class="selectgym" type='select'>
          <p>Select your gym</p>
      		<option value='1'>Colorado Athletic Club</option>
      		<option value='2'>24 Hour Fitness</option>
      		<option value='3'>Boulder One Fitness</option>
      	</Input>
      </div>
    </Row>
<div>
  <p className="center">Select the days you want to list</p>
  <DatePicker />

</div>
<div>
		<Button id="submitlist" waves='light' node='a' href='http://www.google.com'> Submit </Button>
</div>
</form>
</div>
</div>

)
}

export default List
