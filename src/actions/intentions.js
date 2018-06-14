import request from 'axios'

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
        dispatch => request.get(`/api/intentions/${facultyId}/${intentionId}`)
            .then(({data}) => intentionId
                ? dispatch(addIntentions(data))
                : dispatch(setIntentions(data)));


export const callDeleteIntention = intentionId =>
    dispatch => request.delete(`/api/intentions/${intentionId}`)
        .then(() => dispatch(removeIntention(intentionId)));


export const callPostIntention = forId =>
    () => request.post('/api/intentions', { forId });