export const exchanges = (state=[], action) => {
    switch (action.type) {
        case 'SET_EXCHANGES':
            return action.exchanges;
        case 'ADD_EXCHANGE':
            return [
                action.exchange, ...state
            ]
    }
};