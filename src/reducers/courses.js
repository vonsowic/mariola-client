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
        case 'REMOVE_MY_COURSE_ID':
            console.log(action.id)
            return state.filter(id => id !== action.id);
        default:
            return state
    }
};