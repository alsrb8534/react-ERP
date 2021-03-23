import React from "react";
import EmploymentManageLog from "./EmploymentManageLog";
import { connect } from "react-redux";
import { searchEmploymentManageList,updateEmploymentManageList} from "ERP/HR/emp/reducer/EmpReducer";
import { withRouter } from "react-router-dom";


const EmploymentManageContainer = (props) => {
  const { flag, EmploymentManageList, searchEmploymentManageList, errorCode, errorMsg, updateEmploymentManageList } = props;

  const update = (checkData,deptName,fromDate,toDate) => { 
    updateEmploymentManageList({ data: checkData, deptName: deptName, startDate: fromDate, endDate: toDate });;
  };

  return (
    <div>
      <EmploymentManageLog
        searchEmploymentManageList={searchEmploymentManageList}
        EmploymentManageList={EmploymentManageList}        //
        errorCode={errorCode}
        errorMsg={errorMsg}
        update={update}
        flag={flag}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    errorCode: state.hr.emp.errorCode,
    errorMsg: state.hr.emp.errorMsg,
    EmploymentManageList: state.hr.emp.EmploymentManageList,
    flag: state.hr.emp.flag
  };
};

export default connect(mapStateToProps, { searchEmploymentManageList,updateEmploymentManageList})(
  withRouter(EmploymentManageContainer)
);

