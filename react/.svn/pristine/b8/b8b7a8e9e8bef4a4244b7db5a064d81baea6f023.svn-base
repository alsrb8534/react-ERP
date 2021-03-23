import React from "react";
import EmpDetailed from "./EmpDetailed";
import { connect } from "react-redux";
import { PositionListRequest,EmpDetailedInfoRequest, EmpUpdateRequest } from "../../../reducer/EmpReducer";


const EmpDetailedContainer = props => {
  const { PositionListRequest,EmpDetailedInfoRequest, EmpUpdateRequest, 
    positionList, empDetailedInfo, company, workPlace } = props;


  /* console.log("company", company);
  console.log("workplace", workPlace);
  console.log("positionList", positionList);
  console.log("empDetailedInfo", empDetailedInfo);
  console.log("selectedValueRequest", selectedValueRequest); */


  return (
    <div>
      <EmpDetailed
        PositionListRequest={PositionListRequest}
        EmpDetailedInfoRequest ={EmpDetailedInfoRequest}
        EmpUpdateRequest={ EmpUpdateRequest}
        companyCode={company}
        workPlaceCode={workPlace}
        positionList={positionList}
        empDetailedInfo={empDetailedInfo}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    status: state.hr.emp.status,
    errorCode: state.hr.emp.errorCode,
    errorMsg: state.hr.emp.errorMsg,
    company: state.hr.emp.company,
    workPlace: state.hr.emp.workPlace,
    positionList: state.hr.emp.positionList,
    empDetailedInfo: state.hr.emp.empDetailedInfo,

  };
};

export default connect(mapStateToProps, { PositionListRequest ,EmpDetailedInfoRequest,  EmpUpdateRequest })(EmpDetailedContainer);
