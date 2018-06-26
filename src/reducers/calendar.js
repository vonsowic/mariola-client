import moment from "moment";

const defaultState = {
    selectedCourseId: null,
    start: new Date(moment().add(1 - new Date().getDay(), 'days').hour(0).minute(0).second(0)),
    // start: new Date(),
    end: new Date(moment().add(7 - new Date().getDay(), 'days').hour(0).minute(0).second(0)),
    // end: new Date(),
};

const calendar = (state=defaultState, action) => {
    switch (action.type){
        case 'DESELECT_COURSE':
            return Object.assign({}, state, {
                selectedCourseId: null
            });
        case 'SELECT_COURSE':
            return Object.assign({}, state, {
                selectedCourseId: action.selectedCourseId
            });
        case 'SET_NEXT_WEEK_DATE':
            return Object.assign({}, {
                start: new Date(moment(state.start).add(7, "days")),
                end: new Date(moment(state.end).add(7, "days"))
            });
        case 'SET_PREV_WEEK_DATE':
            return Object.assign({}, {
                start: new Date(moment(state.start).add(-7, "days")),
                end: new Date(moment(state.end).add(-7, "days"))
            });
        case 'SET_TODAY_DATE':
            return Object.assign({}, {
                start: new Date(moment().add(- new Date().getDay(), 'days')),
                end: new Date(moment().add(7 - new Date().getDay(), 'days')),
        });
        default:
            return state
    }
};

export default calendar