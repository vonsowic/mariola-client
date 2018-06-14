export const myFaculties = (state=[], action) => {
    switch (action.type){
        case 'ADD_MY_FACULTIES':
            return state.concat(action.faculties);
        default:
            return state
    }
};