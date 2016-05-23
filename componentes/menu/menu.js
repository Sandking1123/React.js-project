import React, { Component, PropTypes as PT } from 'react'
import {Navbar, Nav, NavItem} from 'react-bootstrap'

class Menu extends Component {

  render(){
    return(
      <div id="menu">
        <Navbar fluid={true} fixedTop={true} >
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">React-News</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    )
  }
}
export default Menu
