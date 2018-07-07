import { combineReducers } from 'redux'
import intentions from './intentions'
import {courses, myCoursesIds} from "./courses";
import calendar from './calendar'
import user from './authorization'
import {myFaculties, faculties, joinToFacultyWindow, visibleFaculty} from './faculties'
import sidebar from './sidebar'
import {alerts} from "./alert";
import { admin } from './admin'

export default combineReducers({
    intentions,
    courses,
    myCoursesIds,
    calendar,
    user,
    myFaculties,
    faculties,
    joinToFacultyWindow,
    visibleFaculty,
    sidebar,
    admin,
    alerts
})