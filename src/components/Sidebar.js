import React from 'react'
import {Nav, NavItem, Navbar} from 'react-bootstrap';
import {Link} from "react-router-dom";


export default function Sidebar({facultyId, isAdmin}) {
    return (
        <div id="sidebar-menu" >
            <Navbar fluid>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem><Link to={`/${facultyId}/home`}>Strona główna kierunku</Link></NavItem>
                        <NavItem><Link to={`/${facultyId}/plan`}>Plan zajęć</Link></NavItem>
                        <NavItem><Link to={`/${facultyId}/exchanges`}>Centrum wymian</Link></NavItem>
                        { isAdmin
                            ? <NavItem><Link to={`/${facultyId}/settings`}>Ustawienia</Link></NavItem>
                            : null
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>)
}