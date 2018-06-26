export const courses = (state=[], action) => {
    switch (action.type){
        case 'SET_COURSES':
            return action.courses;
        default:
            return state
    }
};

export const myCoursesIds = (state=[], action) => {
    switch (action.type){
        case 'ADD_MY_COURSES_IDS':
            return state.concat(action.ids);
        default:
            return state
    }
};