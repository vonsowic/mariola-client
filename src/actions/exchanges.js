import request from "axios/index";
import {addMyCoursesIds, removeFromMyCoursesIds} from "./courses";
import {alertExchanged} from "./alert";

export const addExchange = exchange => ({
    type: 'ADD_EXCHANGE',
    exchange
});

export const setExchanges = exchanges => ({
    type: 'SET_EXCHANGES',
    exchanges
});

export const callGetExchangeInfo = exchanged =>
    dispatch => request
            .get(`/api/exchanges/${exchanged.id}`)
            .then(({data}) => {
                dispatch(addMyCoursesIds(data.id));
                dispatch(removeFromMyCoursesIds(data.previousId));
                dispatch(alertExchanged(`${data.name}: jesteś teraz w grupie ${data.group}`))
            });
