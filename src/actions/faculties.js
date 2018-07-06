import request from 'axios'


export const callGetMyFaculties = () =>
    dispatch => request.get('/api/faculties?onlyMy=true')
        .then(({data}) => dispatch(addMyFaculties(data)));


export const addMyFaculties = faculties => ({
    type: 'ADD_MY_FACULTIES',
    faculties
});


export const callGetNotMyFaculties = () =>
    dispatch => request.get('/api/faculties?onlyMy=false')
        .then(({data}) => dispatch(setFaculties(data)));


const setFaculties = faculties =>  ({
    type: 'SET_FACULTIES',
    faculties
});


export const openJoinToFaculty = faculty => ({
    type: 'OPEN_JOIN_TO_FACULTY',
    faculty
});


export const closeJoinToFaculty = () => ({
    type: 'CLOSE_JOIN_TO_FACULTY'
});


export const callJoinToFaculty = (faculty, initialGroup) =>
    dispatch => {
        dispatch(closeJoinToFaculty());

        return request.post("/api/faculties/join", {
            facultyId: faculty.id,
            initialGroup
        })
    };


export const callGetFacultyGroups = faculty =>
    dispatch => request.get(`api/faculties/${faculty.id}/groups`)
        .then(({data}) => dispatch(setFacultyGroups(data)));


const setFacultyGroups = groups => ({
    type: 'SET_FACULTY_GROUPS',
    groups
});


export const setVisibleFacultyId = facultyId => ({
    type: 'SET_VISIBLE_FACULTY_ID',
    facultyId
});


export const callGetFaculty = facultyId =>
    dispatch => request.get('/api/faculties/' + facultyId)
        .then(({data}) => dispatch(setFaculty(data)));


const setFaculty = faculty => ({
    type: 'SET_FACULTY',
    faculty
});
