export const courses = (state=[], action) => {
    switch (action.type){
        case 'ADD_COURSES':
            return state.concat(action.courses);
        case 'SET_COURSES':
            return action.courses;
        default:
            return state
    }
};

export const detailedCourses = (state=[], action) => {
    switch (action.type){
        case 'ADD_DETAILED_COURSES':
            return state.concat(action.courses);
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