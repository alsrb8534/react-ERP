import React from "react";
import RestAttandence from "./RestAttendance";
import { connect } from "react-redux";
import { restAttdRequest } from "../../reducer/AttdReducer";
import { withRouter } from "react-router-dom";

// *********************** 외출 조퇴 신청 시작 _준서 ***********************
const RestAttdContainer = props => {
  const { status, errorCode, errorMsg } = props;

  return (
    <div>
      <RestAttandence
      status={status}
      errorCode={errorCode}
      errorMsg={errorMsg}
      />
    </div>
  );
};

const mapStateToProps = state => {

  return {
    status: state.hr.attd.status,
    errorCode: state.hr.attd.errorCode,
    errorMsg: state.hr.attd.errorMsg,
  };
};
export default connect(mapStateToProps, { restAttdRequest })(
  withRouter(RestAttdContainer)
);

// *********************** 외출 조퇴 신청 종료 _준서 ***********************