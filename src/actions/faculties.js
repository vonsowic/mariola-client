import request from 'axios'


export const callGetMyFaculties = () =>
    dispatch => request.get('/api/faculties?onlyMy=true')
        .then(({data}) => dispatch(addMyFaculties(data)));

export const addMyFaculties = faculties => ({
    type: 'ADD_MY_FACULTIES',
    faculties
});