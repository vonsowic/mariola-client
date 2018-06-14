import { tokenToUser } from '../utils'

let user;

const auth = (state={
    user: {
        id: null,
        name: '',
        lastName: '',
        faculties: [],
        profileImageUrl: ''
    }}, {type, token, profileImageUrl}) => {

    switch (type){
        case 'REFRESH':
            user = tokenToUser(token)
            return Object.assign({}, state, {
                user
            });
        case 'LOGIN':
            user = tokenToUser(token)
            return Object.assign({}, state, {
                user
            });
        case 'LOGOUT':
            return {};
        default:
            return state;
    }
};

export default auth