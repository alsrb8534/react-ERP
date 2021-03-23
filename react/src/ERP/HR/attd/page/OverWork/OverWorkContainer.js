import React from "react";
import OverWork from "./OverWork";
import { connect } from "react-redux";
import { restAttdRequest } from "ERP/HR/attd/reducer/AttdReducer";
import { withRouter } from "react-router-dom";

//*************************초과근무 신청 =시작= 유찬 _20.08.31 *************************
const OverWorkContainer = props => {
  const { status, errorCode, errorMsg } = props;

  return (
    <div>
      <OverWork
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
  withRouter(OverWorkContainer)
);

//*************************초과근무 신청 =시작= 유찬 _20.08.31 *************************