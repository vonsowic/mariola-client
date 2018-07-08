import React, {Component} from 'react';
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { connect } from "react-redux";
import Profile from '../components/Profile'
import {callLogin, logout} from '../actions/authorization'
import {callGetMyFaculties} from "../actions/faculties";
import {Nav, NavItem} from "react-bootstrap";
import {FacebookLoginButton} from "react-social-login-buttons";
import Login from "../components/Login";

class Container extends Component {
    componentDidMount(){
        this.props.dispatch(callGetMyFaculties())
    }

    render() {
        return this.props.isLoggedIn
            ? <Profile
                name={this.props.name}
                lastName={this.props.lastName}
                profileImageUrl={this.props.profileImageUrl}
                faculties={this.props.myFaculties}
                onLogout={()=>this.props.dispatch(logout())}
            />
            : <Nav>
                <Login
                    callback={fbResponse => this.props.dispatch(callLogin(fbResponse))}
                    render={renderProps => (
                        <NavItem onClick={renderProps.onClick}>Zaloguj się</NavItem>
                    )}/>
            </Nav>
    }
}

function mapStateToProps({user, myFaculties}) {
    return {
        isLoggedIn: user.id !== null,
        name: user.name,
        lastName: user.lastName,
        profileImageUrl: user.profileImageUrl,
        myFaculties
    }
}

export default connect(mapStateToProps)(Container)