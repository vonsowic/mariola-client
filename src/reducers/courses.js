export const courses = (state={}, action) => {
    switch (action.type){
        case 'SET_COURSES':
            return action.courses.reduce((cs, c) => Object.assign({}, cs, {[c.id]: c}), {});
        case 'UPDATE_COURSE':
            return Object.assign({}, state, {[action.course.id]: action.course});
        default:
            return state
    }
};

export const myCoursesIds = (state=[], action) => {
    switch (action.type){
        case 'ADD_MY_COURSES_IDS':
            return state.concat(action.ids);
        case 'REMOVE_MY_COURSE_ID':
            return state.filter(id => id !== action.id);
        default:
            return state
    }
};