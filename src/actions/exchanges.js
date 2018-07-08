import request from "axios/index";
import {addMyCoursesIds, removeFromMyCoursesIds} from "./courses";
import {alertExchanged} from "./alert";

export const setExchanges = exchanges => ({
    type: 'SET_EXCHANGES',
    exchanges
});

export const callGetExchangeInfo = exchanged =>
    dispatch => request
            .get(`/api/exchanges/${exchanged.id}`)
            .then(({data}) => {
                dispatch(removeFromMyCoursesIds(data.previousId));
                dispatch(addMyCoursesIds(data.id));
                dispatch(alertExchanged(data, exchanged.id))
            });

export const callGetExchanges = ({id}) =>
    dispatch => request
        .get(`/api/exchanges?facultyId=${id}`)
        .then(({data}) => dispatch(setExchanges(data)));


