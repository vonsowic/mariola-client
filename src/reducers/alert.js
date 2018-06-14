export const alerts = (state=[], action) => {
    switch (action.type) {
        case 'ALERT_ERROR':
            return [{
                id: action.id,
                place: 'bl',
                message: action.message,
                type: 'danger',
                timeout: 1000
            }, ...state];
        case 'ALERT_EXCHANGED':
            return [{
                id: action.id,
                place: 'tc',
                message: action.message,
                type: 'success',
            }, ...state];
        case 'DISMISS_ALERT':
            return state.filter(({id}) => id !== action.id);
        default:
            return state
    }
};