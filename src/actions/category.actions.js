export const types = Object.freeze({
    FETCH_CATEGORIES: 'FETCH_CATEGORIES',
});

export const fetchCategory = (categories) => ({
    type: types.FETCH_CATEGORIES,
    payload: {
        categories
    }
});