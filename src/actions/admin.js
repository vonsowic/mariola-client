import request from 'axios'
import {updateGeneralCourse} from "./courses";

export const callPatchSetExchangesEnabled = (facultyId, exchangesEnabled) =>
    dispatch => request
        .patch(`/api/faculties/${facultyId}`, {
            exchangesEnabled
        })
        .then(() => dispatch(setExchangesEnabled(exchangesEnabled)));

const setExchangesEnabled = exchangesEnabled => ({
    type: 'SET_EXCHANGES_ENABLED',
    exchangesEnabled
});

export const callPatchSetTransferWithoutExchangeEnabled = (facultyId, transferWithoutExchangeEnabled) =>
    dispatch => request
        .patch(`/api/faculties/${facultyId}`, {
            transferWithoutExchangeEnabled
        })
        .then(() => dispatch(setTransferWithoutExchangeEnabledEnabled(transferWithoutExchangeEnabled)));

const setTransferWithoutExchangeEnabledEnabled = transferWithoutExchangeEnabled => ({
    type: 'SET_TRANSFER_WITHOUT_EXCHANGE_ENABLED',
    transferWithoutExchangeEnabled
});

export const callPatchSetMaxStudentsNumber = (course, facultyId) =>
    dispatch => request
        .patch(`/api/plan/${course.id}?facultyId=${facultyId}`, {
            maxStudentsNumber: course.maxStudentsNumber
        })
        .then(() => dispatch(updateGeneralCourse(course)));

export const showExchanges = () => ({
    type: 'SHOW_EXCHANGES'
});

export const showCourses = () => ({
    type: 'SHOW_COURSES'
});

export const showMembers = () => ({
    type: 'SHOW_MEMBERS'
});

export const hide = () => ({
    type: 'HIDE_ADMIN_MODAL'
});

