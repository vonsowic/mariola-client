const calendar = (state={selectedCourseId: null}, action) => {
    switch (action.type){
        case 'DESELECT_COURSE':
            return Object.assign({}, state, {
                selectedCourseId: null
            });
        case 'SELECT_COURSE':
            return Object.assign({}, state, {
                selectedCourseId: action.selectedCourseId
            });
        default:
            return state
    }
};

export default calendar