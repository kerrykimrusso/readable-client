import { combineReducers } from 'redux';
import Actions from '../actions';

const categoriesReducer = (state = [], action) => {
    switch(action.type) {
        case Actions.Category.Types.FETCH:
            return action.payload.categories;
        default:
            return state;
    }
}

const commentsReducer = (state = [], action) => {
    const {id, body} = action.payload || {};
    switch(action.type) {
        case Actions.Comment.Types.CREATE:
            return [
                ...state,
                action.payload.comment
            ];
        case Actions.Comment.Types.UPDATE:
            return state.map(
                (comment) => {
                    if(id !== comment.id) return comment;
                    return Object.assign({body}, comment);
                });
        case Actions.Comment.Types.REMOVE:
            return state.filter(
                (comment) => {
                    return id !== comment.id;
                });
        default:
            return state;
    }
}

const postsReducer = (state = [], action) => {
    const {id, title, body} = action.payload || {};
    switch(action.type) {
        case Actions.Post.Types.CREATE:
            return [
                ...state,
                action.payload.post
            ];
        case Actions.Post.Types.UPDATE:
            return state.map(
                (post) => {
                    if(post.id !== id) return post;
                    return Object.assign({title, body}, post);
                });
        case Actions.Post.Types.REMOVE:
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