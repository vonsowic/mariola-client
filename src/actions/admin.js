import request from 'axios'

export const callPatchSetExchangesEnabled = (facultyId, exchangesEnabled) =>
    dispatch => request
        .patch(`/api/faculties/${facultyId}`, {
            exchangesEnabled
        })
        .then(() => dispatch(setExchangesEnabled(exchangesEnabled)));

const setExchangesEnabled = exchangesEnabled => ({
    type: 'SET_EXCHANGES_ENABLED',
    exchangesEnabled
});

export const callPatchSetTransferWithoutExchangeEnabled = (facultyId, transferWithoutExchangeEnabled) =>
    dispatch => request
        .patch(`/api/faculties/${facultyId}`, {
            transferWithoutExchangeEnabled
        })
        .then(() => dispatch(setTransferWithoutExchangeEnabledEnabled(transferWithoutExchangeEnabled)));

const setTransferWithoutExchangeEnabledEnabled = transferWithoutExchangeEnabled => ({
    type: 'SET_TRANSFER_WITHOUT_EXCHANGE_ENABLED',
    transferWithoutExchangeEnabled
});