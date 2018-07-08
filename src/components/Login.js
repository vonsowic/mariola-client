import React from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

export default function (props) {
    return (
        <FacebookLogin
            appId={process.env.REACT_APP_FACEBOOK_ID || "2124361614460680"}
            autoLoad={false}
            fields="name,email,picture"
            callback={props.callback}
            render={props.render}
        />
    )
}