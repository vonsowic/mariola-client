import React from 'react'
import Sidebar from './Sidebar'
import ExchangePanel from './ExchangesPanel'
import {Route} from "react-router-dom";
import FacultyPlan from "../containers/FacultyPlan";
import AdminPanel from "../containers/admin";
import {Nav, Navbar, NavItem, OverlayTrigger, Popover} from "react-bootstrap";


export default ({url, faculty, isAdmin}) => (
    <div>
        <div className="col-sm-2">
            <Sidebar
                facultyId={faculty.id}
                isAdmin={isAdmin}/>

            <Route
                exact path={`${url}/exchanges`}
                render={() => <ExchangeCenterDescription faculty={faculty}/>}/>

        </div>
        <div className="col-sm-10">
            <Route
                exact path={`${url}/exchanges`}
                component={ExchangePanel}/>
            <Route
                exact path={`${url}/plan`}
                component={FacultyPlan}/>
            { isAdmin
                ? <Route
                    exact path={`${url}/settings`}
                    component={AdminPanel}/>
                : null }
        </div>
    </div>
)

function ExchangeCenterDescription({faculty}) {
    return (
        <div>
            <div id="sidebar-menu" >
                <Navbar fluid>
                    <Navbar.Collapse>
                        <Nav>
                            <OverlayTrigger trigger={['hover','focus']} placement='right' overlay={FacultyInfo(faculty)}>
                                <NavItem>Wymiany</NavItem>
                            </OverlayTrigger>
                            <OverlayTrigger trigger={['hover','focus']} placement='right' overlay={Legend}>
                                <NavItem>Legenda</NavItem>
                            </OverlayTrigger>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>)
}

function FacultyInfo(faculty) {
    return (
        <Popover id="info-popover" >
            <span>{
            !faculty.exchangesEnabled
                ? 'zablokowane'
                : faculty.transferWithoutExchangeEnabled
                    ? 'możliwe w miarę istniejących miejsc'
                    : 'możliwe tylko w przypadku znalezienia zastępstwa'}</span>
        </Popover>
    )
}

const Legend = (
        <Popover id="info-popover">
            <ul>
                <li style={{color: '#ad4ca4'}}>Twoje przedmioty</li>
                <li style={{color: '#3174ad'}}>Inne</li>
            </ul>
        </Popover>
    )
