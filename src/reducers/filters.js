const showGroupFilter = group => event => group.includes(event.group);

const showNoLectureFilter = () => event => event.group !== '0';

const showAllFilter = () => () => true;

export const courseFilters = (state=showAllFilter(), action) => {
    switch (action.type) {
        case 'SHOW_ALL':
            return showAllFilter();
        case 'FILTER_GROUP':
            return showGroupFilter(action.group);
        case 'FILTER_NO_LECTURES':
            return showNoLectureFilter();
        default:
            return state
    }
};