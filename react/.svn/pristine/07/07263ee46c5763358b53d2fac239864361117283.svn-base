import { put, takeEvery, takeLatest, all, call } from "redux-saga/effects";
import * as types from "../reducer/SalaryReducer";
import createRequestSaga from "util/createRequestSaga"
import * as api from "../api"

const baseSalarySearch = createRequestSaga(types.BASE_SALARY_LIST_REQUEST, api.baseSalarySearch);
const baseSalaryUpdate = createRequestSaga(types.UPDATE_BASE_SALARY_REQUEST, api.baseSalaryUpdate);

  export function* onBaseSalaryRequest() {
    yield takeEvery(types.BASE_SALARY_LIST_REQUEST, baseSalarySearch);
    yield takeEvery(types.UPDATE_BASE_SALARY_REQUEST, baseSalaryUpdate);
  }

const searchMonthSalary = createRequestSaga(types.SEARCH_MONTH_SALARY_LIST_REQUEST, api.searchMonthSalary);

export function*onSelectMonthSalary(){ //미노 
  yield takeLatest(types.SEARCH_MONTH_SALARY_LIST_REQUEST, searchMonthSalary);
}

////////////////////          지원 사가 시작 /////////////////////////////////////////////
const salaryListSaga = createRequestSaga(types.SALARY_LIST_REQUEST, api.salaryListSaga);

//**************************************************08-26 손유찬 시작******************************************************* */
const closeSalary = createRequestSaga(types.CLOSE_SALARY_WITH_SLIP_REQUEST, api.closeSalary);
//**************************************************08-26 손유찬 종료******************************************************* */

////////////////////          지원 사가 종료                 /////////////////////////////////////////////

export function* onSalaryReqeust() {
  yield takeLatest(types.SALARY_LIST_REQUEST, salaryListSaga);
}

export function* oncloseSalaryRequest() {
  yield takeLatest(types.CLOSE_SALARY_WITH_SLIP_REQUEST, closeSalary);
}


export default function* BaseSaga() {
  yield all([
    call(onSelectMonthSalary), //미노
    call(onBaseSalaryRequest), //미노
    call(onSalaryReqeust), //월급여 조회 지원
    call(oncloseSalaryRequest), //월급여 마감 지원
  ]);
}