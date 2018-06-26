export const myFaculties = (state=[], action) => {
    switch (action.type){
        case 'ADD_MY_FACULTIES':
            return state.concat(action.faculties);
        default:
            return state
    }
};

export const faculties = (state=[], action) => {
    switch (action.type){
        case 'SET_FACULTIES':
            return action.faculties;
        default:
            return state
    }
};

export const joinToFacultyWindow = (state={isOpen: false, faculty: null, groups: []}, action) => {
    switch (action.type){
        case 'OPEN_JOIN_TO_FACULTY':
            return Object.assign({}, state, {
                isOpen: true,
                faculty: action.faculty
            });
        case 'CLOSE_JOIN_TO_FACULTY':
            return Object.assign({}, state, {
                isOpen: false,
                faculty: null,
                groups: []
            });
        case 'SET_FACULTY_GROUPS':
            return Object.assign({}, state, {
                groups: action.groups
            });
        default:
            return state
    }
};


export const visibleFaculty = (state=null, action) => {
    switch (action.type) {
        case 'SET_VISIBLE_FACULTY':
            return action.visibleFacultyId;
        default:
            return state
    }
};

