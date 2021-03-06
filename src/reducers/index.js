import { combineReducers } from 'redux'
import intentions from './intentions'
import {courses, myCoursesIds} from "./courses";
import calendar from './calendar'
import { user } from './user'
import {myFaculties, faculties, joinToFacultyWindow, visibleFaculty} from './faculties'
import sidebar from './sidebar'
import {alerts} from "./alert";
import { adminPanelMembers } from './admin'
import { exchanges } from "./exchanges";
import {courseFilters} from "./filters";

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
    adminPanelMembers,
    alerts,
    exchanges,
    courseFilters
})