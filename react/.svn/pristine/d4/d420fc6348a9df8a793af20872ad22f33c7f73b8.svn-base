import { createAction } from "redux-actions";


  //************************* 급여 기준 관리 시작 _준혁 *************************

  
  export const BASE_SALARY_LIST_REQUEST = "src/ERP/HR/Saga/Saga/BASE_SALARY_LIST_REQUEST";
  export const BASE_SALARY_LIST_SUCCESS = "src/ERP/HR/Saga/Saga/BASE_SALARY_LIST_REQUEST_SUCCESS";
  export const BASE_SALARY_LIST_FAILURE = "src/ERP/HR/Saga/Saga/BASE_SALARY_LIST_REQUEST_FAILURE";
    
  
  export const UPDATE_BASE_SALARY_REQUEST =
    "src/ERP/HR/Saga/Saga/UPDATE_BASE_SALARY_REQUEST";
  export const UPDATE_BASE_SALARY_SUCCESS =
    "src/ERP/HR/Saga/Saga/UPDATE_BASE_SALARY_SUCCESS";
  export const UPDATE_BASE_SALARY_FAILURE =
    "src/ERP/HR/Saga/Saga/UPDATE_BASE_SALARY_FAILURE";
  
    //************************* 급여 기준 관리 종료 _준혁 *************************

    
//*************************급여기준 CRUD 시작 _준혁 __20.11.18 *************************
export const baseSalaryListRequest = createAction(BASE_SALARY_LIST_REQUEST);
export const baseSalaryListSuccess = createAction(BASE_SALARY_LIST_SUCCESS);
export const baseSalaryListFailure = createAction(BASE_SALARY_LIST_FAILURE);

export const updateBaseSalaryRequest = createAction(UPDATE_BASE_SALARY_REQUEST);
export const updateBaseSalarySuccess = createAction(UPDATE_BASE_SALARY_SUCCESS);
export const updateBaseSalaryFailure = createAction(UPDATE_BASE_SALARY_FAILURE);
//*************************급여기준 CRUD 종료 _준혁 __20.11.18 *************************



//===============================월별급여조회 박미노==========================================================
export const SEARCH_MONTH_SALARY_LIST_REQUEST =
  "src/ERP/HR/Saga/Saga/SEARCH_MONTH_SALARY_LIST_REQUEST";
export const SEARCH_MONTH_SALARY_LIST_SUCCESS =
  "src/ERP/HR/Saga/Saga/SEARCH_MONTH_SALARY_LIST_REQUEST_SUCCESS";
export const SEARCH_MONTH_SALARY_LIST_FAILURE =
  "src/ERP/HR/Saga/Saga/SEARCH_MONTH_SALARY_LIST_REQUEST_FAILURE"; //
//===============================월별급여조회 박미노==========================================================||||||| .r23


//============================미노 월별 급여조회================================================
export const monthSalaryRequest =createAction(SEARCH_MONTH_SALARY_LIST_REQUEST); //월별 급여조회
export const monthSalarySuccess=createAction(SEARCH_MONTH_SALARY_LIST_SUCCESS);
export const monthSalaryFailure=createAction(SEARCH_MONTH_SALARY_LIST_FAILURE); 
//============================미노 월별 급여조회 종료================================================



//*************************  지원 담당  시작********************************** */

export const SALARY_LIST_REQUEST = "src/ERP/HR/Saga/SAGA/SALARY_LIST_REQUEST";
export const SALARY_LIST_SUCCESS = "src/ERP/HR/Saga/SAGA/SALARY_LIST_REQUEST_SUCCESS";
export const SALARY_LIST_FAILURE = "src/ERP/HR/Saga/SAGA/SALARY_LIST_REQUEST_FAILURE";

export const CLOSE_SALARY_WITH_SLIP_REQUEST =
  "src/ERP/HR/Saga/SAGA/CLOSE_SALARY_WITH_SLIP_REQUEST";
export const CLOSE_SALARY_WITH_SLIP_SUCCESS =
  "src/ERP/HR/Saga/SAGA/CLOSE_SALARY_WITH_SLIP_REQUEST_SUCCESS";
export const CLOSE_SALARY_WITH_SLIP_FAILURE =
  "src/ERP/HR/Saga/SAGA/CLOSE_SALARY_WITH_SLIP_REQUEST_FAILURE";
//*************************  지원 담당  종료********************************** */

//*************************  지원 담당  시작********************************** */
//월급여 마감 페이지에서 사용하는 마감가능 급여리스트 조회 함수
export const salaryListRequest = createAction(SALARY_LIST_REQUEST);
export const salaryListSuccess = createAction(SALARY_LIST_SUCCESS);
export const salaryListFailure = createAction(SALARY_LIST_FAILURE);

//월급여 마감 페이지에서 사용하는 마감 및 전표 발행함수
export const closeSalaryWithSlipRequest = createAction(CLOSE_SALARY_WITH_SLIP_REQUEST);
export const closeSalaryWithSlipSuccess = createAction(CLOSE_SALARY_WITH_SLIP_SUCCESS);
export const closeSalaryWithSlipFailure = createAction(CLOSE_SALARY_WITH_SLIP_FAILURE);

//*************************  지원 담당   종료********************************** */
    
const initialState = {
    salaryList: [],
    monthSalary: [],
  };
  
  const SalaryReducer = (state = initialState, action) => {
    switch (action.type) {
      
    //미노
    case SEARCH_MONTH_SALARY_LIST_REQUEST:
      return {
        ...state,
        monthSalary: action.data,
      };
    case SEARCH_MONTH_SALARY_LIST_SUCCESS:
      return {
        ...state,
        monthSalary: action.payload.monthSalary.result,
      };
    case SEARCH_MONTH_SALARY_LIST_FAILURE:
      return {
        ...state,
        errorMsg: action.payload,
      };
    case BASE_SALARY_LIST_SUCCESS:
      return {
        ...state,
        baseSalaryList : action.payload.baseSalaryList,
      };
    case BASE_SALARY_LIST_FAILURE:
      return {
        ...state,
        errorMsg: action.payload,
      };
    case UPDATE_BASE_SALARY_SUCCESS:
      return {
        ...state,
      };
    case UPDATE_BASE_SALARY_FAILURE:
      return {
        ...state,
        errorMsg: action.payload,
      };
  
      case SALARY_LIST_SUCCESS:
        return {
          ...state,
          salaryList: action.payload.monthSalary.result,
        };
  
      case SALARY_LIST_FAILURE:
        return {
          ...state,
          errorMsg: action.payload,
        };
  
      case CLOSE_SALARY_WITH_SLIP_SUCCESS:
        return {
          ...state,
          salaryList: [], //받을게 없지만 일단 넣었다.
          flag: true,
        };
  
      case CLOSE_SALARY_WITH_SLIP_FAILURE:
        return {
          ...state,
          errorMsg: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default SalaryReducer;
  