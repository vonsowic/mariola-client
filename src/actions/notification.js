import request from "axios/index";
import {callGetExchangeInfo} from "./exchanges";

export const callGetUnseenExchanges = () =>
    dispatch => request
        .get('/api/notifications')
        .then(({data}) => data
            .map(notification => dispatch(callGetExchangeInfo({id: notification.exchangeId}))));

export const callPatchMarkNotificationAsRead = exchangeId =>
    () => request
        .patch(`/api/notifications?exchangeId=${exchangeId}`);
