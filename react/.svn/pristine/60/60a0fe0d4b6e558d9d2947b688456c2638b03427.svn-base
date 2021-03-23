import { takeEvery, all, call } from 'redux-saga/effects';
import * as types from 'ERP/LOGISTIC/Production/action/ProductionActionType';
import * as api from 'ERP/LOGISTIC/Production/api';
import createRequestSaga from 'util/createRequestSaga';

const searchMpsList = createRequestSaga(types.SEARCH_MPS_LIST_REQUEST, api.searchMpsList);
const searchMrpList = createRequestSaga(types.SEARCH_MRP_LIST_REQUEST, api.searchMrpList);
const mrpInsert = createRequestSaga(types.INSERT_MRP_LIST_REQUEST, api.mrpInsert);
const searchGetMpsList = createRequestSaga(types.SEARCH_MRP_GETMRPLIST_REQUEST, api.searchGetMpsList);
const searchGatherList = createRequestSaga(types.SEARCH_GATHER_LIST_SAGA, api.searchGatherList);
const gatherInsert = createRequestSaga(types.INSERT_GATHER_LIST_REQUEST, api.gatherInsert);


export function* mpsSaga() {
    yield takeEvery(types.SEARCH_MPS_LIST_REQUEST, searchMpsList);
}

export function* mrpSaga() {
    yield takeEvery(types.SEARCH_MRP_LIST_REQUEST, searchMrpList);
    yield takeEvery(types.INSERT_MRP_LIST_REQUEST, mrpInsert);
}

export function* gatherListSaga() {
    yield takeEvery(types.SEARCH_MRP_GETMRPLIST_REQUEST, searchGetMpsList);
    yield takeEvery(types.SEARCH_GATHER_LIST_SAGA, searchGatherList);
    yield takeEvery(types.INSERT_GATHER_LIST_REQUEST, gatherInsert);
}

export default function* ProductionSaga() {
    yield all([
        call(mpsSaga), 
        call(mrpSaga), 
        call(gatherListSaga)
    ]);
}
