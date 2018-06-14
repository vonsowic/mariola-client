import React from 'react'
import {MenuItem, NavDropdown} from "react-bootstrap";
import {NavLink} from "react-router-dom";


export default class Profile extends React.Component {
    render(){
        return (
            <NavDropdown eventKey={3} title={`Witaj, ${this.props.name}`} id="basic-nav-dropdown">
                {this.props.faculties.map(f =>
                    <MenuItem key={f.id}>
                        <NavLink to={`/${f.id}/home`}>{f.name}</NavLink>
                    </MenuItem>
                )}
                <MenuItem divider />
                <MenuItem onClick={() => {
                    this.props.onLogout()
                }}>Wyloguj się</MenuItem>
            </NavDropdown>)

    }
}