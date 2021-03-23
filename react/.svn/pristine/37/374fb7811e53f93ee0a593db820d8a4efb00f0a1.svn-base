import createRequestSaga from '../../../../util/createRequestSaga';
import { LIST_POSTS } from '../action/posts/PostsActionType';
import * as api from '../api';

import { takeLatest } from 'redux-saga/effects';
// 3.19경로 완료
const listPostsSaga = createRequestSaga(LIST_POSTS, api.listPosts);
export default function* PostsSaga() {
    yield takeLatest(LIST_POSTS, listPostsSaga);
}
