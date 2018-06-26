export const select = course => ({
    type: 'SELECT_COURSE',
    selectedCourseId: course.id
});

export const deselect = () => ({
    type: 'DESELECT_COURSE',
    selectedCourseId: null
});

export const setTodayDate = () => ({
    type: 'SET_TODAY_DATE'
});

export const setPreviousWeekDate = () => ({
    type: 'SET_PREV_WEEK_DATE'
});

export const setNextWeekDate = () => ({
    type: 'SET_NEXT_WEEK_DATE'
});
