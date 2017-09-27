export const types = Object.freeze({
    REMOVE_POST: 'REMOVE_POST',
    CREATE_POST: 'CREATE_POST',
    UPDATE_POST: 'UPDATE_POST',
});

export const create = (id, title, body, author, category) => ({ 
    type: types.CREATE_POST,
    payload: {
        id,
        title, 
        body,
        author,
        category,
    }
});

export const update = (id, title, body) => ({ 
    type: types.UPDATE_POST,
    payload: {
        id,
        title,
        body,
    }
});

export const remove = (id) => ({ 
    type: types.REMOVE_POST,
    payload: {
        id,
    }
});