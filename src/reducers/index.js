import { combineReducers } from 'redux'
import intentions from './intentions'
import {courses, myCoursesIds} from "./courses";
import calendar from './calendar'
import user from './authorization'
import {myFaculties, faculties, joinToFacultyWindow, visibleFaculty, createFacultyWindow} from './faculties'
import sidebar from './sidebar'
import {alerts} from "./alert";

export default combineReducers({
    intentions,
    courses,
    myCoursesIds,
    calendar,
    user,
    myFaculties,
    faculties,
    joinToFacultyWindow,
    createFacultyWindow,
    visibleFaculty,
    sidebar,
    alerts
})