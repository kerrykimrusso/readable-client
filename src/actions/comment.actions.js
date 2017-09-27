export const types = Object.freeze({
    REMOVE_COMMENT: 'REMOVE_COMMENT',
    CREATE_COMMENT: 'CREATE_COMMENT',
    UPDATE_COMMENT: 'UPDATE_COMMENT',
});

export const create = (id, body, author, parentId) => ({ 
    type: types.CREATE_COMMENT,
    payload: {
        id, 
        body,
        author,
    }
});

export const update = (id, body) => ({ 
    type: types.UPDATE_COMMENT,
    payload: {
        id,
        body,
    }
});

export const remove = (id) => ({ 
    type: types.REMOVE_COMMENT,
    payload: {
        id,
    }
});