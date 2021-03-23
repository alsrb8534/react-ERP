import { createAction } from "redux-actions";

//*****************************재영 월근태 관리*****************************/
export const SEARCH_MONTH_ATTD_LIST_REQUEST =
  "src/ERP/HR/Saga/Saga/SEARCH_MONTH_ATTD_LIST_REQUEST";
export const SEARCH_MONTH_ATTD_LIST_SUCCESS =
  "src/ERP/HR/Saga/Saga/SEARCH_MONTH_ATTD_LIST_REQUEST_SUCCESS";
export const MONTH_ATTD_LIST_UPDATE =
  "src/ERP/HR/Saga/Saga/MONTH_ATTD_LIST_UPDATE";
export const MONTH_ATTD_LIST_UPDATE_SUCCESS =
  "src/ERP/HR/Saga/Saga/MONTH_ATTD_LIST_UPDATE_SUCCESS";
export const MONTH_ATTD_LIST_FAILURE =
  "src/ERP/HR/Saga/Saga/MONTH_ATTD_LIST_FAILURE";

//***************************** 재영 일근태관리 ***************************/
export const DAY_ATTD_LIST_UPDATE = "src/EMP/HR/Saga/Saga/DAY_ATTD_LIST_UPDATE";
export const DAY_ATTD_LIST_UPDATE_SUCCESS =
  "src/EMP/HR/Saga/Saga/DAY_ATTD_LIST_UPDATE_SUCCESS";

  //============================== 일근태 기록/조회 재영 시작 20.08.27===============================================//
export const INSERT_DAY_ATTD_START =
"src/ERP/HR/Saga/Saga/INSERT_DAY_ATTD_START";
export const INSERT_DAY_ATTD_SUCCESS =
"src/ERP/HR/Saga/Saga/INSERT_DAY_ATTD_START_SUCCESS";
export const INSERT_DAY_ATTD_FAILURE =
"src/ERP/HR/Saga/Saga/INSERT_DAY_ATTD_START_FAILURE";
export const SELECT_DAY_ATTD_START =
"src/ERP/HR/Saga/Saga/SELECT_DAY_ATTD_START";
export const SELECT_DAY_ATTD_SUCCESS =
"src/ERP/HR/Saga/Saga/SELECT_DAY_ATTD_START_SUCCESS";
export const SELECT_DAY_ATTD_FAILURE =
"src/ERP/HR/Saga/Saga/SELECT_DAY_ATTD_START_FAILURE";
export const DELETE_DAY_ATTD_START =
"src/ERP/HR/Saga/Saga/DELETE_DAY_ATTD_START";
export const DELETE_DAY_ATTD_FAILURE =
"src/ERP/HR/Saga/Saga/DELETE_DAY_ATTD_START_FAILURE";

//============================== 일근태 기록/조회 재영 종료 20.08.27===============================================//

//*************************외출 및 조퇴 신청 시작 _준서 _20.08.24 *************************
export const REST_ATTD_REQUEST = "src/ERP/HR/Saga/Saga/REST_ATTD_REQUEST";
export const REST_ATTD_SUCCESS = "src/ERP/HR/Saga/Saga/REST_ATTD_REQUEST_SUCCESS";
export const REST_ATTD_FAILURE = "src/ERP/HR/Saga/Saga/REST_ATTD_REQUEST_FAILURE";
//*************************외출 및 조퇴 신청 종료 _준서 _20.08.24 *************************

//************************* 결제승인관리 시작 _재영 *************************
export const SEARCH_ATTD_APPL_REQUEST =
  "src/ERP/HR/Saga/Saga/SEARCH_ATTD_APPL_REQUEST";
export const UPDATE_ATTD_APPL_REQUEST =
  "src/ERP/HR/Saga/Saga/UPDATE_ATTD_APPL_REQUEST";
export const SEARCH_ATTD_APPL_SUCCESS =
  "src/ERP/HR/Saga/Saga/SEARCH_ATTD_APPL_REQUEST_SUCCESS";
export const SEARCH_ATTD_APPL_FAILURE =
  "src/ERP/HR/Saga/Saga/SEARCH_ATTD_APPL_REQUEST_FAILURE";
export const UPDATE_ATTD_APPL_SUCCESS =
  "src/ERP/HR/Saga/Saga/UPDATE_ATTD_APPL_REQUEST_SUCCESS";
export const UPDATE_ATTD_APPL_FAILURE =
  "src/ERP/HR/Saga/Saga/UPDATE_ATTD_APPL_REQUEST_FAILURE";

//************************* 결제승인관리 종료 _재영 *************************

//==================일근태 관리 인봉 ==============================시작 ==============================
export const SEARCH_DAY_ATTD_LIST_REQUEST =
  "src/ERP/HR/Saga/Saga/SEARCH_DAY_ATTD_LIST_REQUEST"; //일근태관리 이름+날짜+N상태만 검색 하인봉
  export const SEARCH_DAY_ATTD_LIST_SUCCESS =
  "src/ERP/HR/Saga/Saga/SEARCH_DAY_ATTD_LIST_REQUEST_SUCCESS"; //일근태관리 이름+날짜+N상태만 검색 하인봉
export const SEARCH_DAY_ATTD_LIST_FAILURE =
  "src/ERP/HR/Saga/Saga/SEARCH_DAY_ATTD_LIST_REQUEST_FAILURE"; //일근태관리 이름+날짜+N상태만 검색 하인봉

export const SEARCH_DAY_ATTD_LIST_All =
"src/ERP/HR/Saga/Saga/SEARCH_DAY_ATTD_LIST_All"; //일근태관리 날짜~날짜 사이 모두 검색 하인봉
export const SEARCH_DAY_ATTD_LIST_All_SUCCESS =
"src/ERP/HR/Saga/Saga/SEARCH_DAY_ATTD_LIST_All_SUCCESS"; // 일근태관리 날짜~날짜 사이 모두 검색 하인봉
export const SEARCH_DAY_ATTD_LIST_All_FAILURE =
"src/ERP/HR/Saga/Saga/SEARCH_DAY_ATTD_LIST_All_FAILURE"; //일근태관리 날짜~날짜 사이 모두 검색 하인봉

export const DAY_ATTD_DEADLINE_REGISTER =
"src/ERP/HR/Saga/Saga/DAY_ATTD_DEADLINE_REGISTER"; //일근태관리 마감 날짜~날짜 사이 모두 검색 하인봉
export const DAY_ATTD_DEADLINE_REGISTER_SUCCESS =
"src/ERP/HR/Saga/Saga/DAY_ATTD_DEADLINE_REGISTER_SUCCESS"; //일근태관리  마감 날짜~날짜 사이 모두 검색 하인봉
export const DAY_ATTD_DEADLINE_REGISTER_FAILURE =
"src/ERP/HR/Saga/Saga/DAY_ATTD_DEADLINE_REGISTER_FAILURE"; //일근태관리 마감 날짜~날짜 사이 모두 검색 하인봉

export const DAY_ATTD_DEADLINE_CANCEL =
"src/ERP/HR/Saga/Saga/DAY_ATTD_DEADLINE_CANCEL"; //일근태관리 마감취소 날짜~날짜 사이 모두 검색 하인봉

export const SEARCH_RESTATTENDANCE_TYPE =
"src/ERP/HR/Saga/Saga/SEARCH_RESTATTENDANCE_TYPE"; //근태외관리 근태외구분 정보 가져오기
//==================일근태 관리  인봉==============================끝=============================

//*************************외출 및 조퇴 신청 시작 _준서 _20.08.24 *************************
export const restAttdRequest = createAction(REST_ATTD_REQUEST);
export const restAttdSuccess = createAction(REST_ATTD_SUCCESS);
export const restAttdFailure = createAction(REST_ATTD_FAILURE);
//*************************외출 및 조퇴 신청 종료 _준서 _20.08.24 *************************

//========================= 재영 일근태 조회/기록 2020-08-27 시작======================//
export const selectDayAttdSuccess = createAction(SELECT_DAY_ATTD_SUCCESS);
export const selectDayAttdFailure = createAction(SELECT_DAY_ATTD_FAILURE);
export const insertDayAttdStart = createAction(INSERT_DAY_ATTD_START);
export const insertDayAttdSuccess = createAction(INSERT_DAY_ATTD_SUCCESS);
export const deleteDayAttdStart = createAction(DELETE_DAY_ATTD_START);
export const deleteDayAttdFailure = createAction(DELETE_DAY_ATTD_FAILURE);

//========================= 재영 일근태 조회/기록 2020-08-27 종료======================//

export const insertDayAttdFailure = createAction(INSERT_DAY_ATTD_FAILURE);
export const selectDayAttdStart = createAction(SELECT_DAY_ATTD_START);


//*********************************월근태 재영************************** */

export const searchMonthAttdMgtList = createAction(
    SEARCH_MONTH_ATTD_LIST_REQUEST,
  );
  export const updateMonthAttdMgtList = createAction(
    MONTH_ATTD_LIST_UPDATE,
  );
  export const updateMonthAttdSuccess = createAction(
    MONTH_ATTD_LIST_UPDATE_SUCCESS,
  );
  export const monthAttdFailure = createAction(MONTH_ATTD_LIST_FAILURE);
  
  //*********************************일근태 재영************************** */
  export const SearchDayAttdListRequest = createAction(
    SEARCH_DAY_ATTD_LIST_REQUEST,
  );
  export const updateDayAttdList = createAction(DAY_ATTD_LIST_UPDATE);
  export const updateDayAttdListSuccess = createAction(
    DAY_ATTD_LIST_UPDATE_SUCCESS,
  );

  //************************* 결제승인관리 시작 _재영 *************************
export const searchAttdApplList = createAction(SEARCH_ATTD_APPL_REQUEST);
export const updateAttdApplList = createAction(UPDATE_ATTD_APPL_REQUEST);
export const searchAttdApplSuccess = createAction(
  SEARCH_ATTD_APPL_SUCCESS,
);
export const searchAttdApplFailure = createAction(
  SEARCH_ATTD_APPL_FAILURE,
);
export const updateAttdApplSuccess = createAction(
  UPDATE_ATTD_APPL_SUCCESS,
);
export const updateAttdApplFailure = createAction(
  UPDATE_ATTD_APPL_FAILURE,
);
//************************* 결제승인관리 종료 _재영 *************************





  //************************* 재직증명조회 시작 경윤 **************************
  export const SEARCH_EMPLOYMENT = "src/ERP/HR/Saga/Saga/SEARCH_EMPLOYMENT";
  export const SEARCH_EMPLOYMENT_SUCCESS =
    "src/ERP/HR/Saga/Saga/SEARCH_EMPLOYMENT_SUCCESS";
  export const SEARCH_EMPLOYMENT_FAILURE =
    "src/ERP/HR/Saga/Saga/SEARCH_EMPLOYMENT_FAILURE";
//************************* 재직증명조회 종료 경윤 **************************

//*************************  재직증명조회 황경윤_201123********************************** */
export const searchEmployment = createAction(SEARCH_EMPLOYMENT);
//*************************  재직증명관리 종료********************************** */


const initialState = {
    attdData: [],
    monthAttdMgtList: [],
    errorMsg: "",
    errorCode: "",
    dayAttdMgtList: [],
    attdApplList: [],
    flag: false,
  };
  
const AttdReducer = (state = initialState, action) => {
    switch (action.type) {
        
    case INSERT_DAY_ATTD_SUCCESS:
        return {
          ...state,
          attdData: [],
        };
      //=====================재영 일근태 조회/기록==================//
      case INSERT_DAY_ATTD_FAILURE:
        return {
          ...state,
        };
      case SELECT_DAY_ATTD_SUCCESS:
        return {
          ...state,
          attdData: action.payload.DayAttdTO,
        };
      case SELECT_DAY_ATTD_FAILURE:
        return {
          ...state,
        };
      case DELETE_DAY_ATTD_FAILURE:
        return {
          ...state,
          errorMsg: action.payload,
        };
      //=====================재영 일근태 조회/기록==================//

          //==========================================재영 월근태관리===================================//
    case SEARCH_MONTH_ATTD_LIST_SUCCESS:
        return {
          ...state,
          monthAttdMgtList: action.payload.monthAttdMgtList,
        };
      case MONTH_ATTD_LIST_UPDATE_SUCCESS:
        return {
          ...state,
          monthAttdMgtList: [],
        };
      case MONTH_ATTD_LIST_FAILURE:
        return {
          ...state,
          errorMsg: action.e.errorMsg,
        };
      //==========================================재영 일근태관리===================================//
      case SEARCH_DAY_ATTD_LIST_SUCCESS:
        console.log("........................");
        return {
          ...state,
          dayAttdMgtList: action.payload.dayAttdMgtList,
          errorCode: action.payload.errorCode,
        };
      case DAY_ATTD_LIST_UPDATE_SUCCESS:
        console.log("update success");
        return {
          ...state,
          dayAttdMgtList: [],
        };
      case SEARCH_DAY_ATTD_LIST_FAILURE:
        return {
          ...state,
          error: action.error,
        };

          //*************************외출 및 조퇴 신청 시작 _준서 _20.08.25 *************************
    case REST_ATTD_REQUEST:
        console.log("HR리듀서 REST_ATTD_REQUEST");
        console.log(action);
        console.log(action.payload);
        return {
          ...state,
        };
      //*************************외출 및 조퇴 신청 종료 _준서 _20.08.25 *************************

    //************************* 결제승인관리 시작 재영 20-09-04 *************************
    case SEARCH_ATTD_APPL_SUCCESS:
      console.log(
        "dddddddddddddddddddddddddddddddddddddd" +
          JSON.stringify(action.payload),
      );
      return {
        ...state,
        attdApplList: action.payload.restAttdList,
      };
    case UPDATE_ATTD_APPL_SUCCESS:
      console.log("업데이트후 서치" + JSON.stringify(action.payload));
      return {
        ...state,
        attdApplList: action.payload.restAttdList,
      };

    //************************* 결제승인관리 종료 재영 20-09-04 *************************

    
      //===================인봉=====================================일근태관리
      case SEARCH_DAY_ATTD_LIST_All:
        return {
          ...state,
          startDate: action.data.startDate,
          endDate: action.data.endDate,
        };
      case SEARCH_DAY_ATTD_LIST_All_SUCCESS:
        return {
          ...state,
          dayAttdMgtList: action.data.dayAttdMgtList,
        };
      case SEARCH_DAY_ATTD_LIST_All_FAILURE:
        return {
          ...state,
          error: action.error,
        };
  
      case DAY_ATTD_DEADLINE_REGISTER:
        return {
          ...state,
          empCodeList: action.data.empCodeList,
          applyDayList: action.data.applyDayList,
        };
      case DAY_ATTD_DEADLINE_REGISTER_SUCCESS:
        return {
          ...state,
          dayAttdMgtList: action.data.dayAttdMgtList,
        };
  
      //===================인봉=====================================일근태관리



      
    //**********재직증명신청 시작 경윤 2020-11-23*******************************************
   case SEARCH_EMPLOYMENT_SUCCESS:
     console.log("SEARCH_EMPLOYMENT_SUCCESS")
     console.log(action)
    return {
       ...state,
       certificateList: action.payload.certificateList,
    }

  
      default:
        return state;
    }
}

export default AttdReducer;
