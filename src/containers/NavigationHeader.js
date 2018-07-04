import React from 'react'
import Login from './Profile'
import {Navbar, Nav, NavDropdown, MenuItem, Button, NavItem} from 'react-bootstrap'
import {connect} from "react-redux";
import {Link} from "react-router-dom";

class NavigationHeader extends React.Component{
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="">
                            <span>Mariola</span>
                        </Link>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav className="pull-right">
                    <NavItem>
                        <Issues/>
                    </NavItem>
                    <NavItem>
                        <Login/>
                    </NavItem>
                </Nav>
            </Navbar>
        )
    }
}

function Issues() {
    return (
        <NavDropdown title="Issues" id="basic-nav-dropdown">
            <MenuItem onClick={() => {
                window.open("https://github.com/vonsowic/mariola/issues")
            }}>Backend</MenuItem>
            <MenuItem onClick={() => {
                window.open("https://github.com/vonsowic/mariola-client/issues")
            }}>Frontend</MenuItem>
        </NavDropdown>
    )
}

export default connect()(NavigationHeader)