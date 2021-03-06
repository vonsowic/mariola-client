import request from 'axios'
import {alertInfo} from "./alert";

export const addIntentions = intention => ({
    type: 'ADD_INTENTIONS',
    intention
});

export const setIntentions = intentions => ({
    type: 'SET_INTENTIONS',
    intentions
});

export const removeIntention = intentionId => ({
    type: 'REMOVE_INTENTION',
    intentionId
});

export const callGetIntentions = (facultyId, intentionId='') =>
    dispatch => request
        .get(`/api/intentions/${intentionId}`, {
            params: {facultyId}
        })
        .then(({data}) => intentionId
            ? dispatch(addIntentions(data))
            : dispatch(setIntentions(data)));


export const callDeleteIntention = intentionId =>
    dispatch => request
        .delete(`/api/intentions/${intentionId}`)
        .then(() => dispatch(removeIntention(intentionId)));


export const callPostIntention = forId =>
    dispatch => request
        .post('/api/intentions', { forId })
        .then(() => dispatch(alertInfo('Utworzono')));