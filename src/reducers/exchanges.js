export const exchanges = (state=[], action) => {
    switch (action.type) {
        case 'SET_EXCHANGES':
            return action.exchanges;
        default:
            return state
    }
};