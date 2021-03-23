import { takeEvery, takeLatest, all, call } from "redux-saga/effects";
import * as types from "../reducer/AttdReducer";
import createRequestSaga from "util/createRequestSaga";
import * as api from "../api";

//====================일근태관리 재영=============================//
const dayAttdSearch = createRequestSaga(types.SEARCH_DAY_ATTD_LIST_REQUEST, api.dayAttdSearch);
const dayAttdUpdate = createRequestSaga(types.DAY_ATTD_LIST_UPDATE, api.dayAttdUpdate);

//===========================재영 월근태관리=======================//
const monthAttdSearch = createRequestSaga(types.SEARCH_MONTH_ATTD_LIST_REQUEST, api.monthAttdSearch);
const monthAttdUpdate = createRequestSaga(types.MONTH_ATTD_LIST_UPDATE, api.monthAttdUpdate);

export function* onManageATTD() {
    yield takeEvery(types.SEARCH_DAY_ATTD_LIST_REQUEST, dayAttdSearch); //재영 일근태관리
    yield takeLatest(types.DAY_ATTD_LIST_UPDATE, dayAttdUpdate); //재영 일근태관리
    yield takeLatest(types.SEARCH_MONTH_ATTD_LIST_REQUEST, monthAttdSearch); //재영 월근태관리
    yield takeLatest(types.MONTH_ATTD_LIST_UPDATE, monthAttdUpdate); //재영 월근태관리
  }

//*********************** 외출 조퇴 신청 시작 _준서 ***********************
const restAttdSaga = createRequestSaga(types.REST_ATTD_REQUEST,api.restAttdSaga);
 // *********************** 외출 조퇴 신청 종료 _준서 ***********************

  // *********************** 외출 조퇴 신청 시작 _준서 ***********************
export function* onRestAttdSaga() {
    yield takeLatest(types.REST_ATTD_REQUEST, restAttdSaga);
  }
  // *********************** 외출 조퇴 신청 종료 _준서 ***********************
  
// *********************** 결재승인관리 확정 시작 _재영 2020-09-04 ***********************
const updateAttdApplSaga = createRequestSaga(types.UPDATE_ATTD_APPL_REQUEST, api.updateAttdApplSaga);
 // *********************** 결재승인관리 확정 종료 _재영 2020-09-04***********************

// *********************** 결재승인관리 확정 시작 _재영 ***********************
export function* onAttdApplSaga() {
    yield takeLatest(types.UPDATE_ATTD_APPL_REQUEST, updateAttdApplSaga);
  }
// *********************** 결재승인관리 확정 종료 _재영***********************
  
//=========================================재영 2020-08-27 일근태 기록 시작====================================//
const DayAttdSaga = createRequestSaga(types.INSERT_DAY_ATTD_START,api.DayAttdSaga);
//=========================================재영 2020-08-27 일근태 기록 종료====================================//
export function* onInsertDayAttd() {
  yield takeLatest(types.INSERT_DAY_ATTD_START, DayAttdSaga);
}

//**************************************2020-08-27 재영 일근태조회 사가**************************************************
const DayAttdSSaga = createRequestSaga(types.SELECT_DAY_ATTD_START,api.DayAttdSSaga);
//**************************************2020-08-27 재영 일근태조회 사가**************************************************
export function* onSelectDayAttd() {
  yield takeLatest(types.SELECT_DAY_ATTD_START, DayAttdSSaga);
}

//**********************************2020-09-03 재영 일근태 삭제 시작 *******************************************/
  const deleteAttdSaga = createRequestSaga(types.DELETE_DAY_ATTD_START,api.deleteAttdSaga);
  //=================================일근태 관리 원구 종료 ======================================//
  export function* onDeleteDayAttd() {
    yield takeLatest(types.DELETE_DAY_ATTD_START, deleteAttdSaga);
  }

  
//************************ 결제 승인 관리 조회 _ 재영 2020-09-04 ******************//
const searchAttdAppl = createRequestSaga(types.SEARCH_ATTD_APPL_REQUEST,api.searchAttdAppl);

  export function* onAttdAppl() {
    yield takeLatest(types.SEARCH_ATTD_APPL_REQUEST, searchAttdAppl);
  }

//**********************재직증명신청조회 시작 경윤 20201123 ******************/
const searchEmploymentSaga = createRequestSaga(types.SEARCH_EMPLOYMENT, api.searchEmploymentSaga);

export function* onSearchEmployment() { //경윤 재직증명조회
  yield takeLatest(types.SEARCH_EMPLOYMENT, searchEmploymentSaga);
}

export default function* AttdSaga() {
    yield all([
      call(onManageATTD),
      call(onInsertDayAttd), // 원구
      call(onSelectDayAttd), // 원구
      call(onRestAttdSaga), // 준서
      call(onAttdApplSaga), // 준서
      call(onDeleteDayAttd), // 재영
      call(onAttdAppl), //재영
    call(onSearchEmployment), //경윤 재직증명서 조회관리
    ]);
  }