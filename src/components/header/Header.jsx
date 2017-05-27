import React from 'react';
import styles from './Header.css';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'
import system from '../../js/system.js'

const user = system.getUser()

class Header extends React.Component {

    constructor(props) {
        super(props)
        this.userLogout = this.userLogout.bind(this)
        system.setHeaderComponent(this)
    }

    userLogout() {
        system.destroyUser()
        system.getHeaderComponent().forceUpdate()
        system.getBodyComponent().forceUpdate()
    }

   render() {
      return (
          <Navbar className={styles.menu} inverse collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#">IRegi Web</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <NavItem eventKey={1} href="#">Мои мероприятия</NavItem>
              </Nav>
              <Nav pullRight>

                <NavDropdown eventKey={3} title={user.getName()} id="userProfile">
                    <MenuItem eventKey={3.3}>Редактировать профиль</MenuItem>
                    <MenuItem divider />
                    <MenuItem onClick={this.userLogout}>Выход</MenuItem>
                </NavDropdown>

              </Nav>
            </Navbar.Collapse>
          </Navbar>
      );
   }
}

export default Header;
