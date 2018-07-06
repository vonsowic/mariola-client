export const select = course => ({
    type: 'SELECT_COURSE',
    selectedCourseId: course.id
});

export const deselect = () => ({
    type: 'DESELECT_COURSE',
    selectedCourseId: null
});

export const setDate = date => ({
    type: 'SET_DATE',
    date
});