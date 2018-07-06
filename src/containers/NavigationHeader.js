import React from 'react'
import Profile from './Profile'
import {Navbar, Nav, NavDropdown, MenuItem} from 'react-bootstrap'
import {LinkContainer} from "react-router-bootstrap";

class NavigationHeader extends React.Component{
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <LinkContainer to="">
                            <span>Mariola</span>
                        </LinkContainer>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav className="pull-right">
                    <Issues/>
                    <Profile/>
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

export default NavigationHeader