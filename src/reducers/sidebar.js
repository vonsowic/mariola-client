export default (state={isOpen: false}, action) => {
    switch (action.type) {
        case 'SHOW_SIDEBAR':
            return {
                isOpen: true
            };
        case 'HIDE_SIDEBAR':
            return {
                isOpen: false
            };
        case 'TOGGLE_SIDEBAR':
            return {
                isOpen: !state.isOpen
            };
        default:
            return state
    }
}