import {callPatchMarkNotificationAsRead} from "./notification";

export const alertError = message => ({
    type: 'ALERT_ERROR',
    id: Date.now(),
    message
});

export const alertInfo  = message => ({
    type: 'ALERT_INFO',
    id: Date.now(),
    message
});

export const alertExchanged = (exchangedCourse, exchangedId) => ({
    type: 'ALERT_EXCHANGED',
    id: Date.now(),
    message: `${exchangedCourse.name}: jesteś teraz w grupie ${exchangedCourse.group}`,
    exchangedId
});


export const dismissAlert = alert => {
    if(alert.exchangeId){
        callPatchMarkNotificationAsRead(alert.exchangeId)();
    }

    return {
        type: 'DISMISS_ALERT',
        id: alert.id,
    }
};