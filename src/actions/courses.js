import request from 'axios'

export const callGetCourses = facultyId =>
    dispatch => request.get(`/api/plan/${facultyId}/general`)
        .then(({data}) => dispatch(setCourses(data)));

export const addCourses = courses => ({
    type: 'ADD_COURSES',
    courses
});

export const setCourses = courses => ({
    type: 'SET_COURSES',
    courses
});

export const callGetDetailedCourses = facultyId =>
    dispatch => request.get(`/api/plan/${facultyId}`)
        .then(({data}) => dispatch(addCourses(data)));

export const addDetailedCourses = courses => ({
    type: 'ADD_DETAILED_COURSES',
    courses
});

export const callGetMyCoursesIds = () =>
    dispatch => request.get('/api/plan/my/ids')
        .then(({data}) => dispatch(addMyCoursesIds(data)));


export const addMyCoursesIds = ids => ({
    type: 'ADD_MY_COURSES_IDS',
    ids
});