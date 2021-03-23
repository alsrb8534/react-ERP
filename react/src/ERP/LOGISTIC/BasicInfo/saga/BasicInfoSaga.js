import { put, takeEvery, takeLatest, call, delay, all } from 'redux-saga/effects';
import axios from 'axios';
import createRequestSaga from 'util/createRequestSaga';
import * as types from 'ERP/LOGISTIC/BasicInfo/action/BasicInfoActionType';
import * as api from '../api';

const workplaceInfo = createRequestSaga(types.SEARCH_WORKPLACE_LIST, api.workplaceInfo);
const saveWorkplace = createRequestSaga(types.SAVE_WORKPLACE, api.saveWorkplace);

function* addWorkplace(action) {
    try {
        yield put({
            type: types.WORKPLACE_LIST,
            mode: 'add',
            workplaceTo: action.payload.workplaceTo
        });
    } catch (error) {
        alert(error);
    }
}

function* delWorkplace(action) {
    try {
        yield put({ type: types.WORKPLACE_LIST, mode: 'delete', newList: action.payload.newList });
    } catch (error) {
        alert(error);
    }
}

export function* WorkplaceSaga() {
    yield takeEvery(types.SAVE_WORKPLACE, saveWorkplace);
    yield takeEvery(types.SEARCH_WORKPLACE_LIST, workplaceInfo);
    yield takeEvery(types.ADD_WORKPLACE, addWorkplace);
    yield takeEvery(types.DEL_WORKPLACE, delWorkplace);
}

/****************** 거래처정보 saga *********************/

const searchClient = createRequestSaga(types.SEARCH_CLIENTINFO, api.searchClient);
const searchFinan = createRequestSaga(types.SEARCH_FINANINFO, api.searchFinan);
const saveClient = createRequestSaga(types.SAVE_CLIENTINFO, api.saveClient);
const saveFinanInfo = createRequestSaga(types.SAVE_FINANINFO, api.saveFinanInfo);

export function* clientInfoSaga() {
    yield takeEvery(types.SEARCH_CLIENTINFO, searchClient);
    yield takeEvery(types.SEARCH_FINANINFO, searchFinan);
    yield takeEvery(types.SAVE_CLIENTINFO, saveClient);
    yield takeEvery(types.SAVE_FINANINFO, saveFinanInfo);
}

/****************** 부서정보 saga *****************/
const deptInfoRequest = createRequestSaga(types.SEARCH_DEPTINFO, api.deptInfoRequest);
const saveDeptInfo = createRequestSaga(types.SAVE_DEPTINFO, api.saveDeptInfo);

export function* deptInfoSaga() {
    yield takeLatest(types.SEARCH_DEPTINFO, deptInfoRequest);
    yield takeLatest(types.SAVE_DEPTINFO, saveDeptInfo);
}

export default function* BasicInfoSaga() {
    yield all([
        call(WorkplaceSaga), // 사업장
        call(clientInfoSaga), //미노
        call(deptInfoSaga) // 부서 정보
    ]);
}
