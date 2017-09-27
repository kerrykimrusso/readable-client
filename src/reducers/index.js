import { combineReducers } from 'redux';
import Actions from '../actions';

const categoriesReducer = (state = [], action) => {
    switch(action.type) {
        case Actions.Category.types.FETCH_CATEGORY:
            return action.payload.categories;
        default:
            return state;
    }
}

const commentsReducer = (state = [], action) => {
    switch(action.type) {
        case Actions.Comment.types.CREATE_COMMENT:
            return [
                ...state,
                action.payload.comment
            ];
        case Actions.Comment.types.UPDATE_COMMENT:
            let {id, body} = action.payload;
            return state.map(
                (comment) => {
                    if(id !== comment.id) return comment;
                    return Object.assign({body}, comment);
                });
        case Actions.Comment.types.REMOVE_COMMENT:
            let {id} = action.payload;
            return state.filter(
                (comment) => {
                    return id !== comment.id;
                });
        default:
            return state;
    }
}

const postsReducer = (state = [], action) => {
    switch(action.type) {
        case Actions.Post.types.CREATE_POST:
            return [
                ...state,
                action.payload.post
            ];
        case Actions.Post.types.UPDATE_POST:
            const {id, title, body} = action.payload;
            return state.map(
                (post) => {
                    if(post.id !== id) return post;
                    return Object.assign({title, body}, post);
                });
        case Actions.Post.types.REMOVE_POST:
            return state.filter(
                (post) => {
                    return id !== post.id;
                });
        default:
            return state;
    }
}

export default combineReducers({
    categories: categoriesReducer,
    comments: commentsReducer,
    posts: postsReducer,
});