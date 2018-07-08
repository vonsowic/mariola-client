import request from 'axios'
import store from '../store'
import jwtDecode from 'jwt-decode'

const refreshWhenExpired = token => setTimeout(() => store.dispatch(callRefresh()), Number(jwtDecode(token).exp*1000 - Date.now()));
let refreshingTimer;

export const login = ({token, refreshToken}) => {
    clearTimeout(refreshingTimer);
    refreshingTimer=refreshWhenExpired(token);
    localStorage.setItem('token', token);
    localStorage.setItem('refreshToken', refreshToken);
    window.location.reload();
    return {
        type: 'LOGIN',
        token,
        refreshToken
    }
};

export const refresh = ({token}) => {
    clearTimeout(refreshingTimer);
    refreshingTimer=refreshWhenExpired(token);
    localStorage.setItem('token', token);
    return {
        type: 'REFRESH',
        token
    }
};

export const logout = () => {
    clearTimeout(refreshingTimer);
    delete localStorage['token'];
    delete localStorage['refreshToken'];
    window.location.replace("/");
    return {
        type: 'LOGOUT'
    }
};

export const callLogin = fbResponse =>
        dispatch => request
            .get("api/oauth/facebook/token?access_token=" + fbResponse.accessToken)
            .then(({data}) => dispatch(login(data)));


export const callRefresh = () =>
    dispatch => request
        .get('/api/oauth/token/refresh', {
            headers: {'Authorization': `Bearer ${window.localStorage['refreshToken']}`}
        })
        .then(({data}) => dispatch(refresh(data)));
