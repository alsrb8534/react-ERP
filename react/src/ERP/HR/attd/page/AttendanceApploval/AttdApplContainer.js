import React from "react";
import AttendanceApploval from "./AttendanceApploval";
import { connect } from "react-redux";
import { searchAttdApplList, updateAttdApplList } from "../../reducer/AttdReducer";
import { withRouter } from "react-router-dom";

// *********************** 결제승인관리 시작 _재영 ***********************
const AttdApplContainer = (props) => {
  const { flag, attdApplList, searchAttdApplList, errorCode, errorMsg, updateAttdApplList } = props;

  const update = (checkData,deptCode,fromDate,toDate) => { 
    updateAttdApplList({ data: checkData, deptCode: deptCode, startDate: fromDate, endDate: toDate });;
  };

  return (
    <div>
      <AttendanceApploval
        searchAttdApplList={searchAttdApplList}
        attdApplList={attdApplList}        //
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
    errorCode: state.hr.attd.errorCode,
    errorMsg: state.hr.attd.errorMsg,
    attdApplList: state.hr.attd.attdApplList,
    flag: state.hr.attd.flag
  };
};

export default connect(mapStateToProps, { searchAttdApplList, updateAttdApplList })(
  withRouter(AttdApplContainer)
);

// *********************** 결제승인관리 종료 _재영 ***********************