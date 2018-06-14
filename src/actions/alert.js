export const alertError = message => ({
    type: 'ALERT_ERROR',
    id: Date.now(),
    message
});

export const alertExchanged = message => ({
    type: 'ALERT_EXCHANGED',
    id: Date.now(),
    message
});

export const dismissAlert = id => ({
    type: 'DISMISS_ALERT',
    id
});