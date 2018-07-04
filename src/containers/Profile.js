import React, {Component} from 'react';
import FacebookLogin from "../components/react-facebook-login";
import { connect } from "react-redux";
import Profile from '../components/Profile'
import {callLogin, logout} from '../actions/authorization'
import {callGetMyFaculties} from "../actions/faculties";
import {Button} from "react-bootstrap";


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
            : <div>
                <FacebookLogin
                    appId={process.env.FACEBOOK_ID || "2124361614460680"}
                    autoLoad={false}
                    fields="name,email,picture"
                    callback={fbResponse => this.props.dispatch(callLogin(fbResponse))}
                    render={renderProps => <Button onClick={renderProps.onClick}>Zaloguj</Button>}
                />
            </div>
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