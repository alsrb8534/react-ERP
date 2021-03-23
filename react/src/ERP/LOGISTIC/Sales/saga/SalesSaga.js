//**************************************** 2020.11-23 박민호 수정 시작 ****************************************
import { put, takeEvery, takeLatest, call, all } from 'redux-saga/effects';
import axios from 'axios';
import * as types from 'ERP/LOGISTIC/Sales/action/SalesActionType';

function* deliveryComPleteData(action) {
    try {
        console.log('action', action);
        const { data } = yield axios.get(
            'http://localhost:8282/logi/logistics/sales/searchDeliveryInfoList'
        );
        yield console.log('deliveryComPleteData');
        yield put({ type: types.DELIVEARY_COMPLETE_REQUEST, payload: data.gridRowJson });
    } catch (e) {
        // yield put(actions.deliveryCompleteFailure(e.message));
    }
}

export function* deliveryComPleteDataSaga() {
    yield takeEvery(types.DELIVEARY_COMPLETE_REQUEST, deliveryComPleteData);
}

function* deliveryDivisionData(action) {
    'http://localhost:8282/logi/logistics/sales/deliverDivisionUpdate';
    console.log(action.payload.DeliveryInsert);
    try {
        yield axios.post(
            'http://localhost:8282/logi/logistics/sales/deliverDivisionUpdate',

            {
                deliverUpdate: action.payload.DeliveryInsert
            }
        );
    } catch (e) {
        // yield put(actions.deliveryDivisionFailure(e.message));
    }
}

export function* deliveryDivisionDataSaga() {
    yield takeLatest(types.DELIVERY_DIVISON_START, deliveryDivisionData);
}

//**************************************** 2020.11.23 박민호 수정 종료 ****************************************
export default function* SalesSaga() {
    yield all([call(deliveryComPleteDataSaga), call(deliveryDivisionDataSaga)]);
}
