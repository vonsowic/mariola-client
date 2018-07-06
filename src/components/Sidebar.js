import React from 'react'
import {Nav, NavItem, Navbar} from 'react-bootstrap';
import {LinkContainer} from "react-router-bootstrap";


export default function Sidebar({facultyId, isAdmin}) {
    return (
        <div id="sidebar-menu" >
            <Navbar fluid>
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer to={`/${facultyId}/plan`}><NavItem>Plan zajęć</NavItem></LinkContainer>
                        <LinkContainer to={`/${facultyId}/exchanges`}><NavItem>Centrum wymian</NavItem></LinkContainer>
                        { isAdmin
                            ? <LinkContainer to={`/${facultyId}/settings`}><NavItem>Panel starosty</NavItem></LinkContainer>
                            : null
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>)
}