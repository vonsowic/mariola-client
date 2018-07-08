import React from 'react'
import {MenuItem, NavDropdown} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";


export default class Profile extends React.Component {
    render(){
        return (
            <NavDropdown eventKey={3} title={`Witaj, ${this.props.name}`} id="basic-nav-dropdown">
                <LinkContainer to={`/myplan`}>
                    <MenuItem>Mój plan</MenuItem>
                </LinkContainer>

                <MenuItem divider />
                { this.props.faculties.length !== 0
                    ? this.props.faculties.map(f =>
                        <LinkContainer key={f.id} to={`/${f.id}/plan`}>
                            <MenuItem>{f.name}</MenuItem>
                        </LinkContainer>)
                    : <MenuItem>0 Twoich kierunków</MenuItem>
                }

                <MenuItem divider />
                <MenuItem onClick={this.props.onLogout}>Wyloguj się</MenuItem>
            </NavDropdown>)

    }
}