import { put, takeEvery, takeLatest, all, call } from 'redux-saga/effects';
import axios from 'axios';
import * as types from '../reducer/BaseReducer';
import * as actions from '../reducer/BaseReducer';
import createRequestSaga from 'util/createRequestSaga';
import * as api from '../api';

export function* onHolidayRequest() {
    yield takeEvery(types.HOLIDAY_LIST_REQUEST, holidaySearch);
    yield takeEvery(types.UPDATE_HOLIDAY_REQUEST, holidayUpdate);
}

// *********************** 휴일관리 시작 _준혁 ***********************
const holidaySearch = createRequestSaga(types.HOLIDAY_LIST_REQUEST, api.holidaySearch);
const holidayUpdate = createRequestSaga(types.UPDATE_HOLIDAY_REQUEST, api.holidayUpdate);
// *********************** 휴일관리 종료 _준혁 ***********************

// *********************** 부서관리시작 _수녕 ***********************
const deptListManage = createRequestSaga(types.DEPT_MANAGER_REQUEST, api.deptListManage);
const deptListUpdate = createRequestSaga(types.UPDATE_DEPARTMENT_REQUEST, api.deptListUpdate);

export function* onDeptManage() {
    yield takeLatest(types.DEPT_MANAGER_REQUEST, deptListManage);
    yield takeLatest(types.UPDATE_DEPARTMENT_REQUEST, deptListUpdate);
}
// *********************** 부서관리내 부서명 인사 조회 _수녕 ***********************

const deptMember = createRequestSaga(types.DEPT_MEMBER_REQUEST, api.deptMember);

export function* onDeptMember() {
    yield takeLatest(types.DEPT_MEMBER_REQUEST, deptMember);
}

function* codeSaga(action) {
    try {
        if (action.payload.type === 'companyCode') {
            const { data } = yield axios.get('http://localhost:8282/hr/basicInfo/searchCompany.do');
            yield put(actions.searchCompanyCode(data.gridRowJson));
        } else if (action.payload.type === 'workplaceCode') {
            const { data } = yield axios.get(
                'http://localhost:8282/hr/basicInfo/searchWorkplace.do',
                {
                    params: {
                        companyCode: action.payload.companyCode
                    }
                }
            );
            yield put(actions.searchWorkPlaceCode(data.gridRowJson));
        }
    } catch (error) {
        console.log('에러', error.response);
        action.payload.history.put('/error');
    }
}

export function* onCodeSearch() {
    yield takeEvery(types.SEARCH_CODE, codeSaga);
}

export default function* BaseSaga() {
    yield all([
        call(onHolidayRequest), //준혁 시스템_휴일관리
        call(onDeptManage), //수녕_부서관리_미완성
        call(onDeptMember), //수녕_부서관리내인사검색_미
        call(onCodeSearch)
    ]);
}
