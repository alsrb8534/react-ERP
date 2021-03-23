import { put, takeEvery, all, call } from 'redux-saga/effects';
import axios from 'axios';
import * as types from 'ERP/LOGISTIC/Production/action/ProductionActionType';

function* searchMpsList(action) {
    try {
        if (action.type === types.SEARCH_MPS_LIST_REQUEST) {
            const { data } = yield axios.get(
                'http://localhost:8282/logi/production/searchMpsInfo.do',
                {
                    params: {
                        startDate: action.payload.startDate,
                        endDate: action.payload.endDate
                    }
                }
            );

            yield put({ type: types.SEARCH_MPS_LIST_SUCCESS, payload: data.gridRowJson });
        }
    } catch (error) {
        //yield put(actions.searchEmploymentManageFailure(error.message));
    }
}

function* searchMrpList(action) {
    console.log(action);
    try {
        if (action.type === types.SEARCH_MRP_LIST_REQUEST) {
            const { data } = yield axios.get(
                'http://localhost:8282/logi/logistics/production/openMrp.do',
                {
                    params: {
                        mpsNoListStr: action.payload.mpsNoListStr
                    }
                }
            );

            yield put({ type: types.SEARCH_MRP_LIST_SUCCESS, payload: data.gridRowJson });
        }
    } catch (error) {
        //yield put(actions.searchEmploymentManageFailure(error.message));
    }
}
function* MrpInsert(action) {
    console.log('Mrp등록 ', action.payload);

    try {
        if (action.type === types.INSERT_MRP_LIST_REQUEST) {
            yield axios.put(
                'http://localhost:8282/logi/logistics/production/registerMrp.do',
                {
                    mrpRegisterDate: action.payload.mrpRegisterDate,
                    batchList: action.payload.batchList
                },
                { headers: { 'Content-Type': 'application/json' } }
            );
            //  console.log(data.gridRowJson);
            // yield put({ type: types.INSERT_MRP_LIST_REQUEST, payload: data.gridRowJson });
        }
    } catch (error) {
        //yield put(actions.searchEmploymentManageFailure(error.message));
    }
}

function* searchGetMpsList(action) {
    console.log(action);
    try {
        if (action.type === types.SEARCH_MRP_GETMRPLIST_REQUEST) {
            console.log('호출되나???');
            const { data } = yield axios.get(
                'http://localhost:8282/logi/logistics/production/getMrpList.do',
                {
                    params: {
                        mrpGatheringStatusCondition: action.payload.mrpGatheringStatusCondition
                    }
                }
            );

            yield put({ type: types.SEARCH_MRP_GETMRPLIST_SUCCESS, payload: data.gridRowJson });
        }
    } catch (error) {
        //yield put(actions.searchEmploymentManageFailure(error.message));
    }
}
function* searchGatherList(action) {
    console.log('GATHER등록', action.payload);
    try {
        if (action.type === types.SEARCH_GATHER_LIST_SAGA) {
            console.log('호출되나???');
            const { data } = yield axios.put(
                'http://localhost:8282/logi/logistics/production/getMrpGatheringList.do',
                {
                    mrpNoList: action.payload.mrpNoList
                }
            );
            yield put({ type: types.SEARCH_GATHER_LIST_SUCCESS, payload: data.gridRowJson });
        }
    } catch (error) {
        //yield put(actions.searchEmploymentManageFailure(error.message));
    }
}
function* GatherInsert(action) {
    console.log('MrpGater등록 ', action.payload);

    try {
        if (action.type === types.INSERT_GATHER_LIST_REQUEST) {
            yield axios.put(
                'http://localhost:8282/logi/logistics/production/registerMrpGathering.do',
                {
                    mrpGatheringRegisterDate: action.payload.mrpGatheringRegisterDate,
                    batchList: action.payload.batchList,
                    mrpNoAndItemCodeList: action.payload.mrpNoAndItemCodeList
                },
                { headers: { 'Content-Type': 'application/json' } }
            );
            //  console.log(data.gridRowJson);
            // yield put({ type: types.INSERT_GATHER_LIST_REQUEST, payload: data.gridRowJson });
        }
    } catch (error) {
        //yield put(actions.searchEmploymentManageFailure(error.message));
    }
}

export function* mpsSaga() {
    yield takeEvery(types.SEARCH_MPS_LIST_REQUEST, searchMpsList);
}

export function* mrpSaga() {
    yield takeEvery(types.SEARCH_MRP_LIST_REQUEST, searchMrpList);
    yield takeEvery(types.INSERT_MRP_LIST_REQUEST, MrpInsert);
}

export function* gatherListSaga() {
    yield takeEvery(types.SEARCH_MRP_GETMRPLIST_REQUEST, searchGetMpsList);
    yield takeEvery(types.SEARCH_GATHER_LIST_SAGA, searchGatherList);
    yield takeEvery(types.INSERT_GATHER_LIST_REQUEST, GatherInsert);
}

export default function* ProductionSaga() {
    yield all([call(mpsSaga), call(mrpSaga), call(gatherListSaga)]);
}
