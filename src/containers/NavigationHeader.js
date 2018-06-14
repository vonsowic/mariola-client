import React from 'react'
import Login from './Login'
import {Navbar, Nav, NavDropdown, MenuItem, Button} from 'react-bootstrap'
import {connect} from "react-redux";

class NavigationHeader extends React.Component{
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">Mariola</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav className="pull-right">
                    <Issues/>
                    <Login style="vertical-align: middle"/>
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