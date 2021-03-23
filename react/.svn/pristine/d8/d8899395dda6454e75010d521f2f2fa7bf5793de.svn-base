import { createAction } from "redux-actions";


//************************* 부서관리 목록 _수녕 *************************

export const DEPT_MANAGER_REQUEST = "src/ERP/HR/Saga/Saga/DEPT_MANAGER_REQUEST";
export const DEPT_MANAGER_SUCCESS = "src/ERP/HR/Saga/Saga/DEPT_MANAGER_REQUEST_SUCCESS";
export const DEPT_MANAGER_FAILURE = "src/ERP/HR/Saga/Saga/DEPT_MANAGER_REQUEST_FAILURE";

export const UPDATE_DEPARTMENT_REQUEST="src/ERP/HR/Saga/Saga/UPDATE_DEPARTMENT_REQUEST";
export const UPDATE_DEPARTMENT_SUCCESS="src/ERP/HR/Saga/Saga/UPDATE_DEPARTMENT_SUCCESS";
export const UPDATE_DEPARTMENT_FAILURE="src/ERP/HR/Saga/Saga/UPDATE_DEPARTMENT_FAILURE";


export const DEPT_MEMBER_REQUEST = "src/ERP/HR/Saga/Saga/DEPT_MEMBER_REQUEST";
export const DEPT_MEMBER_SUCCESS = "src/ERP/HR/Saga/Saga/DEPT_MEMBER_REQUEST_SUCCESS";
export const DEPT_MEMBER_FAILURE = "src/ERP/HR/Saga/Saga/DEPT_MEMBER_REQUEST_FAILURE";

//************************* 휴일 관리 시작 _준혁 *************************

export const HOLIDAY_LIST_REQUEST = "src/ERP/HR/Saga/Saga/HOLIDAY_LIST_REQUEST";
export const HOLIDAY_LIST_SUCCESS = "src/ERP/HR/Saga/Saga/HOLIDAY_LIST_REQUEST_SUCCESS";
export const HOLIDAY_LIST_FAILURE = "src/ERP/HR/Saga/Saga/HOLIDAY_LIST_REQUEST_FAILURE";

export const UPDATE_HOLIDAY_REQUEST =
  "src/ERP/HR/Saga/Saga/UPDATE_HOLIDAY_REQUEST";
export const UPDATE_HOLIDAY_SUCCESS =
  "src/ERP/HR/Saga/Saga/UPDATE_HOLIDAY_REQUEST_SUCCESS";
export const UPDATE_HOLIDAY_FAILURE =
  "src/ERP/HR/Saga/Saga/UPDATE_HOLIDAY_REQUEST_FAILURE";

  //************************* 휴일 관리 시작 _준혁 *************************

//*************************휴일 CRUD 시작 _준혁 __20.11.18 *************************
export const holidayListRequest = createAction(HOLIDAY_LIST_REQUEST);
export const holidayListSuccess = createAction(HOLIDAY_LIST_SUCCESS);
export const holidayListFailure = createAction(HOLIDAY_LIST_FAILURE);

export const updateHolidayRequest = createAction(UPDATE_HOLIDAY_REQUEST);
export const updateHolidaySuccess = createAction(UPDATE_HOLIDAY_SUCCESS);
export const updateHolidayFailure = createAction(UPDATE_HOLIDAY_FAILURE);
//*************************휴일 CRUD 종료 _준혁 __20.11.18 *************************

//*************************  부서관리 시작 수녕_201120********************************** */
export const departmentManagerRequest = createAction(DEPT_MANAGER_REQUEST);
export const departmentManageSuccess = createAction(DEPT_MANAGER_SUCCESS);
export const departmentManageFailure = createAction(DEPT_MANAGER_FAILURE);

export const updateDepartmentRequest=createAction(UPDATE_DEPARTMENT_REQUEST);
export const updateDepartmentSuccess = createAction(UPDATE_DEPARTMENT_SUCCESS);
export const updateDepartmentFailure = createAction(UPDATE_DEPARTMENT_FAILURE);

export const departmentManageMemberRequest = createAction(DEPT_MEMBER_REQUEST);
export const departmentManageMemberSuccess = createAction(DEPT_MEMBER_SUCCESS);
export const departmentManageMemberFailure = createAction(DEPT_MEMBER_FAILURE);
//*************************  부서관리 종료********************************** */



export const SEARCH_CODE = "src/ERP/HR/Saga/Saga/SEARCH_CODE_SAGA";
export const SEARCH_COMPANY_CODE =
  "src/ERP/HR/Saga/Saga/SEARCH_COMPANY_CODE_SAGA";
export const SEARCH_WORK_PLACE_CODE =
  "src/ERP/HR/Saga/Saga/SEARCH_WORK_PLACE_CODE_SAGA";


  export const searchCode = createAction(SEARCH_CODE);
  export const searchCompanyCode = createAction(SEARCH_COMPANY_CODE);
  export const searchWorkPlaceCode = createAction(SEARCH_WORK_PLACE_CODE);
  
  
  

  //********** 기본 근무 시간 관리 ***********//
  export const SELECT_BASE_WORK_TIME_LIST = "src/ERP/HR/Reducer/HR_Reducer/SELECT_BASE_WORK_TIME_LIST";
  export const SELECT_BASE_WORK_TIME_LIST_SUCCESS = "src/ERP/HR/Reducer/HR_Reducer/SELECT_BASE_WORK_TIME_LIST_SUCCESS";
  export const SELECT_BASE_WORK_TIME_LIST_FAILURE = "src/ERP/HR/Reducer/HR_Reducer/SELECT_BASE_WORK_TIME_LIST_FAILURE";

  export const INSERT_BASE_WORK_TIME_LIST = "src/ERP/HR/Reducer/HR_Reducer/INSERT_BASE_WORK_TIME_LIST";
  export const INSERT_BASE_WORK_TIME_LIST_SUCCESS = "src/ERP/HR/Reducer/HR_Reducer/INSERT_BASE_WORK_TIME_LIST_SUCCESS";
  export const INSERT_BASE_WORK_TIME_LIST_FAILURE = "src/ERP/HR/Reducer/HR_Reducer/INSERT_BASE_WORK_TIME_LIST_FAILURE";

  export const DELETE_BASE_WORK_TIME = "src/ERP/HR/Reducer/HR_Reducer/DELETE_BASE_WORK_TIME";
  export const DELETE_BASE_WORK_TIME_SUCCESS = "src/ERP/HR/Reducer/HR_Reducer/DELETE_BASE_WORK_TIME_SUCCESS";
  export const DELETE_BASE_WORK_TIME_FAILURE = "src/ERP/HR/Reducer/HR_Reducer/DELETE_BASE_WORK_TIME_FAILURE";

  export const BATCH_BASE_WORK_TIME = "src/ERP/HR/Reducer/HR_Reducer/BATCH_BASE_WORK_TIME";
  export const BATCH_BASE_WORK_TIME_SUCCESS = "src/ERP/HR/Reducer/HR_Reducer/BATCH_BASE_WORK_TIME_SUCCESS";
  export const BATCH_BASE_WORK_TIME_FAILURE = "src/ERP/HR/Reducer/HR_Reducer/BATCH_BASE_WORK_TIME_FAILURE";

  //*************** 기본 근무 시간 관리 ****************//
export const selectBaseWorkTimeList = createAction(SELECT_BASE_WORK_TIME_LIST);
export const selectBaseWorkTimeListSuccess = createAction(SELECT_BASE_WORK_TIME_LIST_SUCCESS);
export const selectBaseWorkTimeListFailure = createAction(SELECT_BASE_WORK_TIME_LIST_FAILURE);

export const insertBaseWorkTimeList = createAction(INSERT_BASE_WORK_TIME_LIST);
export const insertBaseWorkTimeListSuccess = createAction(INSERT_BASE_WORK_TIME_LIST_SUCCESS);
export const insertBaseWorkTimeListFailure = createAction(INSERT_BASE_WORK_TIME_LIST_FAILURE);

export const deleteBaseWorkTime = createAction(DELETE_BASE_WORK_TIME);
export const deleteBaseWorkTimeSuccess = createAction(DELETE_BASE_WORK_TIME_SUCCESS);
export const deleteBaseWorkTimeFailure = createAction(DELETE_BASE_WORK_TIME_FAILURE);

export const batchBaseWorkTime = createAction(BATCH_BASE_WORK_TIME);
export const batchBaseWorkTimeSuccess = createAction(BATCH_BASE_WORK_TIME_SUCCESS);
export const batchBaseWorkTimeFailure = createAction(BATCH_BASE_WORK_TIME_FAILURE);


const initialState = {
  memberList:[],
  company: [],
  workPlace:[],
  holidayList:[],
  errorCode: "",
  errorMsg:"",
  list:[],
  baseWorkTimeList:[],
};

const BaseReducer = (state = initialState, action) => {
  switch (action.type) {

    case SEARCH_COMPANY_CODE:
      return {
        ...state,
        company: action.payload,
      };

    case SEARCH_WORK_PLACE_CODE:
      return {
        ...state,
        workPlace: action.payload,
      };


    //부서관리목록
    case DEPT_MANAGER_SUCCESS:
      console.log("부서관리목록")
      console.log(action.payload)
      return {
        ...state,
        list: action.payload.list,
      };

      case DEPT_MANAGER_FAILURE:
      return {
        ...state,
        error: action.error,
      };

      case UPDATE_DEPARTMENT_SUCCESS:
      return {
        ...state,
      };
      case UPDATE_DEPARTMENT_FAILURE:
      return {
        ...state,
        error: action.error,
      };

      case DEPT_MEMBER_SUCCESS:
        console.log("DEPT_MEMBER_SUCCESS")
        console.log(action)
      return {
        ...state,
        memberList: action.payload.list,
      };

      case DEPT_MEMBER_FAILURE:
      return {
        ...state,
        error: action.error,
      };
      

    case HOLIDAY_LIST_SUCCESS:
      
      console.log("HOLIDAY_LIST_SUCCESS")
      console.log(action)
      return {
        ...state,
        holidayList: action.payload.holidayList,
      };
    case HOLIDAY_LIST_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    case UPDATE_HOLIDAY_SUCCESS:
      return {
        ...state,
      };
    case UPDATE_HOLIDAY_FAILURE:
      return {
        ...state,
        error: action.error,
      };

      case DELETE_BASE_WORK_TIME:
        console.log('DELETE_BASE_WORK_TIME');
        return {
          ...state,
        };
        case DELETE_BASE_WORK_TIME_SUCCESS:
          alert('삭제 완료');        
          console.log('DELETE_BASE_WORK_TIME_SUCCESS');
          console.log(action.payload.map(el => el.applyYear));
          return {
            ...state,
            baseWorkTimeList:state.baseWorkTimeList.filter((baseWorkTime) => {
                return !(action.payload.map(el => el.applyYear).indexOf(baseWorkTime.applyYear) > -1);
              })
          };
  
          case DELETE_BASE_WORK_TIME_FAILURE:
            console.log('DELETE_BASE_WORK_TIME_FAILURE');
            return {
              ...state,
            };
      case INSERT_BASE_WORK_TIME_LIST:
        console.log('INSERT_BASE_WORK_TIME_LIST');
        return {
          ...state,
        };
        case INSERT_BASE_WORK_TIME_LIST_SUCCESS:
          console.log('INSERT_BASE_WORK_TIME_LIST_SUCCESS');
          return {
            ...state,
            
          baseWorkTimeList:state.baseWorkTimeList.concat(
            {
            applyYear: null,
            attendTime: null,
            chk: null,
            dinnerEndTime: null,
            dinnerStartTime: null,
            errorCode: null,
            errorMsg: null,
            lunchEndTime:null,
            lunchStartTime: null,
            nightEndTime: null,
            overEndTime: null,
            quitTime: null,
            status: "insert"
          })
          };
          case INSERT_BASE_WORK_TIME_LIST_FAILURE:
            console.log('HrReducer');
            return {
              ...state,
            };
      case SELECT_BASE_WORK_TIME_LIST:
        console.log('HrReducer');
        return {
          ...state,
        };
        case SELECT_BASE_WORK_TIME_LIST_SUCCESS:
          console.log("HR리듀서 SELECT_BASE_WORK_TIME_LIST_SUCCESS  ", action);
          return {
            ...state,
            baseWorkTimeList: action.payload,
          };
          case SELECT_BASE_WORK_TIME_LIST_FAILURE:
            console.log("HR리듀서 SELECT_BASE_WORK_TIME_LIST_FAILURE  ", action);
            return {
              ...state,
            };

      default:
        return state;

    }
}

export default BaseReducer;