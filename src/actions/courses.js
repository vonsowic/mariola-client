import request from 'axios'
import moment from "moment/moment";

export const callGetCourses = facultyId =>
    dispatch => request.get(`/api/plan/${facultyId}/general`)
        .then(({data}) => data.map(c => fromGeneralToCalendarFormat(c)))
        .then(cs => dispatch(setCourses(cs)));

const fromGeneralToCalendarFormat = course => Object.assign({}, course, {
        start: convertCourseDateToCalendarFormat(course.dayOfWeek, course.start),
        end: convertCourseDateToCalendarFormat(course.dayOfWeek, course.end),
        title: course.name
    });

const convertCourseDateToCalendarFormat = (dayOfWeek, time) => {
    let hourMinute = time.split(':');
    return new Date(
        moment()
            .add(-new Date().getDay() + dayOfWeek, 'day')
            .hour(hourMinute[0] )
            .minute(hourMinute[1] )
    )
};

export const callGetMyCourses = (start, end) =>
    dispatch => request.get("/api/plan/my", {
        params: {
            start,
            end,
        }
    })
        .then(({data}) => data.map(toCalendarFormat))
        .then(cs => dispatch(setCourses(cs)));


export const callGetDetailedCourses = (facultyId, start, end) =>
    dispatch => request.get(`/api/plan/${facultyId}`, {
        params: {
            start,
            end,
        }
    })
        .then(({data}) => data.map(toCalendarFormat))
        .then(cs => dispatch(setCourses(cs)));


const toCalendarFormat = e => ({
    title: e.name,
    start: new Date(e["courses_details.start"]),
    end: new Date(e["courses_details.end"]),
});


export const setCourses = courses => ({
    type: 'SET_COURSES',
    courses
});


export const callGetMyCoursesIds = () =>
    dispatch => request.get('/api/plan/my/ids')
        .then(({data}) => dispatch(addMyCoursesIds(data)));


export const addMyCoursesIds = ids => ({
    type: 'ADD_MY_COURSES_IDS',
    ids
});