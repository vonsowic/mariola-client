
const defaultState = {
    selectedCourseId: null,
    date: new Date(),
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
        case 'SET_DATE':
            return Object.assign({}, {
                date: action.date
            });
        default:
            return state
    }
};

export default calendar