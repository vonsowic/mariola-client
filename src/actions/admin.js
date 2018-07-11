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


export const callGetFacultyMembers = ({id}) =>
    dispatch => request
        .get(`/api/faculties/${id}/members`)
        .then(({data}) => dispatch(setFacultyMembers(data)));

export const setFacultyMembers = members => ({
    type: 'SET_FACULTY_MEMBERS',
    members
});

export const setBanToStudent = (faculty, student, isBanned) =>
    dispatch => request
        .patch(`/api/faculties/${faculty.id}/${student.id}`, {
            isBanned
        })
        .then(() => {
            const updatedStudent = Object.assign({}, student);
            updatedStudent['user_faculty'].isBanned=isBanned;
            return dispatch(updateMember(updatedStudent))
        });

export const callPatchAddAdmin = (faculty, student) =>
    dispatch => request
        .patch(`/api/faculties/${faculty.id}/${student.id}`, {
            isAdmin: true
        })
        .then(() => {
            const updatedStudent = Object.assign({}, student);
            updatedStudent['user_faculty'].isAdmin=true;
            return dispatch(updateMember(updatedStudent))
        });

const updateMember = member => ({
    type: 'UPDATE_MEMBER',
    member
});