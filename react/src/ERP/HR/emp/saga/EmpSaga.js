import { put, takeEvery, takeLatest, all, call } from "redux-saga/effects";
import axios from "axios";
import * as types from "../reducer/EmpReducer";
import * as actions from "../reducer/EmpReducer";
import createRequestSaga from "util/createRequestSaga";
import * as api from "../api";

const empDetailedSaga = createRequestSaga(types.EMPDETAILED_INFO_REQUEST, api.empDetailedSaga);
const empUpdateSaga = createRequestSaga(types.EMP_UPDATE_REQUEST, api.empUpdateSaga);

export function* onEmpDetailedInfoRequest() {
  //유주 사원상세정보검색(사원상세)
  yield takeLatest(types.EMPDETAILED_INFO_REQUEST, empDetailedSaga);
}

export function* onEmpUpdateRequest() {
  //유주 사원정보수정업데이트(사원상세)
  yield takeLatest(types.EMP_UPDATE_REQUEST, empUpdateSaga);
  
}


// *********************** 재직증명관리 시작 _종료 ***********************
const searchEmploymentManage = createRequestSaga(
  types.SEARCH_EMPLOYMENT_MANAGE_REQUEST,
  api.searchEmploymentManage
);
const updateEmploymentManage = createRequestSaga(
  types.UPDATE_EMPLOYMENT_MANAGE_REQUEST,
  api.updateEmploymentManage
);
// *********************** 재직증명관리  종료 _동욱 ***********************

export function* onEmploymentManage(){ //동욱
  yield takeLatest(types.SEARCH_EMPLOYMENT_MANAGE_REQUEST, searchEmploymentManage)
}
export function*onUpdateEmploymentManage(){ //동욱
  yield takeLatest(types.UPDATE_EMPLOYMENT_MANAGE_REQUEST, updateEmploymentManage)
}

/////////////////////// 유주 사가 시작 //////////////////////////////////////////////
const positionListSaga = createRequestSaga(types.POSITION_LIST_REQUEST, api.positionListSaga);
/////////////////////////////// 유주 사가 종료 /////////////////////////////////////////

export function* onPositionListRequest() {
  //유주 직급리스트(사원상세)
  yield takeLatest(types.POSITION_LIST_REQUEST, positionListSaga);
}

//**************************************************08-26 손유찬 시작******************************************************* */
const registerEmp = createRequestSaga(types.EMP_REGISTER_REQUEST, api.registerEmp);
//**************************************************08-26 손유찬 종료******************************************************* */

export function* onEMPRegist() {
  yield takeLatest(types.SEARCH_DIVISION_CODE_REQUEST, divisionSaga); //성훈 사원등록
  yield takeLatest(types.EMP_REGISTER_REQUEST, registerEmp);
}

//===========================================사원등록 성훈 시작=======================================//
const divisionSaga = createRequestSaga(types.SEARCH_DIVISION_CODE_REQUEST, api.divisionSaga);
//=================================일근태 관리 원구 종료 ======================================//

export default function* EmpSaga() {
    yield all([
      call(onEmploymentManage), //동욱 재직증명서 관리
      call(onUpdateEmploymentManage),//동욱 재직증명서 업데이트
    call(onEmpDetailedInfoRequest), //유주
    call(onEmpUpdateRequest), //유주
    call(onPositionListRequest), //유주
    call(onEMPRegist),
    ]);
  }