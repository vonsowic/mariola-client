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


export const visibleFaculty = (state={
    id: null,
    name: null,
    exchangesEnabled: null,
    transferWithoutExchangeEnabled: null
}, action) => {
    switch (action.type) {
        case 'SET_VISIBLE_FACULTY_ID':
            return Object.assign({}, state, {
                id: action.facultyId
            });
        case 'SET_FACULTY':
            return action.faculty;
        case 'SET_EXCHANGES_ENABLED':
            return Object.assign({}, state, {
                exchangesEnabled: action.exchangesEnabled
            });
        case 'SET_TRANSFER_WITHOUT_EXCHANGE_ENABLED':
            return Object.assign({}, state, {
                transferWithoutExchangeEnabled: action.transferWithoutExchangeEnabled
            });
        default:
            return state
    }
};

