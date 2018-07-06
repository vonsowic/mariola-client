import React, {Component} from 'react';
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { connect } from "react-redux";
import Profile from '../components/Profile'
import {callLogin, logout} from '../actions/authorization'
import {callGetMyFaculties} from "../actions/faculties";
import {Nav} from "react-bootstrap";
import {FacebookLoginButton} from "react-social-login-buttons";

class Container extends Component {
    componentDidMount(){
        // TODO: move to another component, so it wont be called every time profile is rendered
        this.props.dispatch(callGetMyFaculties())
    }

    render() {
        return this.isLoggedIn()
            ? <Profile
                name={this.props.name}
                lastName={this.props.lastName}
                profileImageUrl={this.props.profileImageUrl}
                faculties={this.props.myFaculties}
                onLogout={()=>this.props.dispatch(logout())}
            />
            : <Nav>
                <FacebookLogin
                    appId={process.env.FACEBOOK_ID || "2124361614460680"}
                    autoLoad={false}
                    fields="name,email,picture"
                    callback={fbResponse => this.props.dispatch(callLogin(fbResponse))}
                    render={renderProps => (
                        <FacebookLoginButton onClick={renderProps.onClick} >Facebook</FacebookLoginButton>
                    )}
                />
            </Nav>
    }

    isLoggedIn(){
        return this.props.name
    }
}

function mapStateToProps({user, myFaculties}) {
    return {
        name: user.name,
        lastName: user.lastName,
        profileImageUrl: user.profileImageUrl,
        myFaculties
    }
}

export default connect(mapStateToProps)(Container)