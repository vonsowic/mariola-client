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