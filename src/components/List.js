import React from 'react'
import {Button, Icon, Navbar, NavItem, Row, Input, Autocomplete} from 'react-materialize'
import './List.css';
import Header from './Header'

const List = () => {
  return (
<div>
  <Header />
  <h5>LIST YOUR MEMBERSHIP RENTAL HERE</h5>
  <form>
    <Row>
	<Input class="selectgym" type='select' label="Select Your Gym" defaultValue='2'>
		<option value='1'>Colorado Athletic Club</option>
		<option value='2'>24 Hour Fitness</option>
		<option value='3'>Boulder One Fitness</option>
	</Input>
</Row>
<div>

</div>
</form>
</div>
)
}

export default List
