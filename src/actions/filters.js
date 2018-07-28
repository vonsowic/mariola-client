export const showNoLectures = () => ({
    type: 'FILTER_NO_LECTURES'
});

export const showGroup = group => ({
    type: 'FILTER_GROUP',
    group
});

export const showAll = () => ({
    type: 'SHOW_ALL'
});