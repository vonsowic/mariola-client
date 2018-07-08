const defaultState = {
    visible: false,
    panelType: null
};


export const adminPanel = (state=defaultState, action) => {
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

export const adminPanelMembers = (state={}, action) => {
    switch (action.type) {
        case 'UPDATE_MEMBER':
            return Object.assign({}, state, {[action.member.id]: action.member});
        case 'SET_FACULTY_MEMBERS':
            return action.members.reduce((acc, it) => Object.assign(acc, {[it.id]: it}),{});
        default:
            return state
    }
};