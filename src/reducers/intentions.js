const intentions = (state=[], action) => {
    switch (action.type) {
        case 'SET_INTENTIONS':
            return action.intentions;
        case 'ADD_INTENTIONS':
            return typeof action.intention[Symbol.iterator] === 'function'
                ? action.intention.concat(state)
                : [action.intention, ...state];
        case 'REMOVE_INTENTION':
            return state
                .filter(i => i.id !== action.intentionId);
        default:
            return state
    }
};

export default intentions
