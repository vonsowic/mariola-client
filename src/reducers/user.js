import { tokenToUser } from '../utils'

export const user = (state=null, action) => {
    switch (action.type){
        case 'REFRESH':
            return Object.assign({}, state, tokenToUser(action.token));
        case 'LOGIN':
            return Object.assign({}, state, tokenToUser(action.token));
        case 'LOGOUT':
            return null;
        default:
            return state;
    }
};