import React from 'react'
import {Button, Icon, Navbar, NavItem, Row, Input, Autocomplete} from 'react-materialize'

const List = () => {
<div>
  <h1>LIST YOUR MEMBERSHIP RENTAL HERE</h1>
  <form action="" method="POST">
      <div class="form-line">
          <label for="js-listingAddressInput">Which gym are you a member of?</label>
            <input type="text" id="list-gym-dropdown" name="streetAddress" class="required text ui-autocomplete-input" autocomplete="off" data-specialty-details-required="" placeholder="Enter gym name" value="">
      </div>
            <div class="form-line form-line--largeTopMargin">
                <div class="grid grid--withVerticalSpacing">
                    <div class="grid-item grid-item--3">
                        <label for="js-yearsInput">Start Day</label>
                        <span class="styled-select-container styled-select-container--fluid styled-select-container--disabled">
                            <select id="js-yearsInput" name="year" class="required" disabled="">
                                <option value="">Select</option>
                            </select>
                            <span class="text placeholder">Select</span>
                        </span>
                    </div>

                    <div class="grid-item grid-item--3">
                        <label for="js-makesInput">End Day</label>
                        <span class="styled-select-container styled-select-container--fluid styled-select-container--disabled">
                            <select id="js-makesInput" name="make" class="required" disabled="">
                                <option value="">Select</option>

                            </select>
                            <span class="text placeholder">Select</span>
                        </span>
                    </div>
            <div class="buttonWrapper buttonWrapper--largeTopMargin">
                <button type="submit" class="button button--purple js-submitButton">Next</button>
            </div>
            <a id="js-edmundsLink" class="edmundsLink" href="http://www.edmunds.com/?id=apis" target="_blank"><div class="js-edmundsLogo edmundsLogo edmundsLogo--invisible"></div></a>
        </form>
</div>
}

export default List
