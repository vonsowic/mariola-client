import request from 'axios'
import moment from "moment/moment";

export const callGetCourses = facultyId =>
    dispatch => request
        .get('/api/plan/general', {params: {facultyId}})
        .then(({data}) => data.map(c => fromGeneralToCalendarFormat(c)))
        .then(cs => dispatch(setCourses(cs)));

const fromGeneralToCalendarFormat = course => Object.assign({}, course, {
        start: convertCourseDateToCalendarFormat(course.dayOfWeek, course.start),
        end: convertCourseDateToCalendarFormat(course.dayOfWeek, course.end),
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

export const callGetMyCourses = (weekDate) =>
    dispatch => request
        .get("/api/plan/my", {
            params: startEndOfWeek(weekDate)
        })
        .then(({data}) => data.map(toCalendarFormat))
        .then(cs => dispatch(setCourses(cs)));


export const callGetDetailedCourses = (facultyId, weekDate) =>
    dispatch => request
        .get('/api/plan', {
            params: Object.assign(startEndOfWeek(weekDate), {
                facultyId
            })
        })
        .then(({data}) => data.map(toCalendarFormat))
        .then(cs => dispatch(setCourses(cs)));

const startEndOfWeek = weekDate => ({
    start: moment(weekDate).add(1 - weekDate.getDay(), 'days').hour(0).minute(0).second(0).toDate(),
    end: moment(weekDate).add(7 - weekDate.getDay(), 'days').hour(0).minute(0).second(0).toDate(),
});

const toCalendarFormat = e => Object.assign({}, e, {
    start: new Date(e["courses_details.start"]),
    end: new Date(e["courses_details.end"]),
});


export const setCourses = courses => ({
    type: 'SET_COURSES',
    courses
});

export const updateGeneralCourse = course => ({
    type: 'UPDATE_COURSE',
    course
});

export const callGetMyCoursesIds = () =>
    dispatch => request
        .get('/api/plan/my/ids')
        .then(({data}) => dispatch(addMyCoursesIds(data)));


export const addMyCoursesIds = ids => ({
    type: 'ADD_MY_COURSES_IDS',
    ids
});

export const removeFromMyCoursesIds = id => ({
    type: 'REMOVE_MY_COURSE_ID',
    id
});