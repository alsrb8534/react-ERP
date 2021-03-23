import createRequestSaga from '../../../../util/createRequestSaga';
import { READ_POST } from '../action/post/PostActionType';
import * as api from '../api';
import { takeLatest } from 'redux-saga/effects';
// 3.19경로 완료
const readPostSaga = createRequestSaga(READ_POST, api.readPost);
export default function* PostSaga() {
    yield takeLatest(READ_POST, readPostSaga);
}
