import rootReducer from "./reducers";
import {applyMiddleware, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import { tokenToUser } from './utils'

const store = createStore(
    rootReducer, {
        user: Object.assign(
            {},
            { profileImageUrl: localStorage.getItem('profileImageUrl') },
            tokenToUser(localStorage.getItem('token'))
        )
    },
    applyMiddleware(thunkMiddleware,)
);

export default store;