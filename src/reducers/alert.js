export const alerts = (state=[], action) => {
    switch (action.type) {
        case 'ALERT_ERROR':
            return [{
                id: action.id,
                place: 'bl',
                message: action.message,
                type: 'danger',
                timeout: 1500
            }, ...state];
        case 'ALERT_INFO':
            return [{
                id: action.id,
                place: 'bl',
                message: action.message,
                timeout: 1500
            }, ...state];
        case 'ALERT_EXCHANGED':
            return [{
                id: action.id,
                place: 'tc',
                message: action.message,
                type: 'success',
                exchangeId: action.exchangedId
            }, ...state];
        case 'DISMISS_ALERT':
            return state.filter(({id}) => id !== action.id);
        default:
            return state
    }
};