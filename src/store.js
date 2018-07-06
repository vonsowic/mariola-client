import rootReducer from "./reducers";
import {applyMiddleware, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import { tokenToUser } from './utils'

export default createStore(
    rootReducer, {
        user: Object.assign(
            {},
            { profileImageUrl: localStorage.getItem('profileImageUrl') },
            tokenToUser(localStorage.getItem('token'))
        )
    },
    applyMiddleware(thunkMiddleware,)
);
