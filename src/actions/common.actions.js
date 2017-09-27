export const types = Object.freeze({
    UPVOTE: 'UPVOTE',
    DOWNVOTE: 'DOWNVOTE',
});

export const upvote = (id) => ({
    type: types.UPVOTE,
    payload: {
        id,
    }
});

export const downvote = (id) => ({
    type: types.DOWNVOTE,
    payload: {
        id,
    }
});