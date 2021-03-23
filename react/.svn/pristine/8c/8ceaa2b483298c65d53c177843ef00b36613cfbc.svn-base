import { handleActions } from 'redux-actions';
import { LIST_POSTS_SUCCESS, LIST_POSTS_FAILURE } from '../action/posts/PostsActionType';

const initialState = {
    posts: null,
    error: null
};

const posts = handleActions(
    {
        [LIST_POSTS_SUCCESS]: (state, { payload: posts, meta: response }) => ({
            ...state,
            posts
        }),

        [LIST_POSTS_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error
        })
    },
    initialState
);
console.log('뽀스트', posts);
export default posts;
