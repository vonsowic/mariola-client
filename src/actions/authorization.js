import request from 'axios'
import store from '../store'
import jwtDecode from 'jwt-decode'

const refreshWhenExpired = token => setTimeout(() => store.dispatch(callRefresh()), Number(jwtDecode(token).exp*1000 - Date.now()));

export const login = ({token, refreshToken}, profileImageUrl) => {
    refreshWhenExpired(token);
    localStorage.setItem('token', token);
    localStorage.setItem('refreshToken', refreshToken);
    localStorage.setItem('profileImageUrl', profileImageUrl);
    return {
        type: 'LOGIN',
        token,
        refreshToken,
        profileImageUrl
    }
};

export const refresh = ({token}) => {
    refreshWhenExpired(token);
    localStorage.setItem('token', token);
    return {
        type: 'REFRESH_TOKEN',
        token
    }
};

export const logout = () => {
    delete localStorage['token'];
    delete localStorage['refreshToken'];
    delete localStorage['profileImageUrl'];
    return {
        type: 'LOGOUT'
    }
};

export const callLogin = fbResponse =>
        dispatch => request.get("/api/oauth/facebook/token?access_token=" + fbResponse.accessToken)
            .then(({data}) => {
                dispatch(login(data, fbResponse.picture.data.url));
            });


export const callRefresh = () =>
    dispatch => request.get('/api/oauth/token/refresh', {
        headers: {'Authorization': `Bearer ${window.localStorage['refreshToken']}`}
    })
        .then(({data}) => {
            dispatch(refresh(data))
        });