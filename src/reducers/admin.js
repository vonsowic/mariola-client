const defaultState = {
    visible: false,
    panelType: null
};


export const admin = (state=defaultState, action) => {
    switch (action.type) {
        case 'SHOW_EXCHANGES':
            return Object.assign({}, state, {
                visible: true,
                panelType: 'EXCHANGES'
            });
        case 'SHOW_COURSES':
            return Object.assign({}, state, {
                visible: true,
                panelType: 'COURSES'
            });
        case 'SHOW_MEMBERS':
            return Object.assign({}, state, {
                visible: true,
                panelType: 'MEMBERS'
            });
        case 'HIDE_ADMIN_MODAL':
            return Object.assign({}, defaultState);
        default:
            return state
    }
};