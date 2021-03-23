import createRequestSaga from '../../../../util/createRequestSaga';
import { WRITE_POST, UPDATE_POST } from '../action/review/ReviewActionType';
import * as api from '../api';

import { takeLatest } from 'redux-saga/effects';
// 3.19경로 완료
const reviewmanySaga = createRequestSaga(WRITE_POST, postsAPI.writePost);
export default function* reviewSaga() {
    yield takeLatest(WRITE_POST, reviewmanySaga);
    yield takeLatest(UPDATE_POST, updatePostSaga);
}

const updatePostSaga = createRequestSaga(UPDATE_POST, postsAPI.updatePost);
