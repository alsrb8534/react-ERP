import React from 'react';
import MonthAttdManage from './MonthAttdManage';
import { connect } from 'react-redux';
import { searchMonthAttdMgtList, updateMonthAttdMgtList } from '../../reducer/AttdReducer';
import { withRouter } from "react-router-dom";

//======================================= 설재영 월근태 ===========================================//
const MonthAttdManagerContainer = (props) => {
    const { monthAttdMgtList, searchMonthAttdMgtList, errorCode, errorMsg, updateMonthAttdMgtList }=props;

    const searchMonthAttd = (searchDate) => {
        searchMonthAttdMgtList({ cday:searchDate });
    }
    return(
        <div>
        <MonthAttdManage 
            searchMonthAttd={searchMonthAttd}
            monthAttdMgtList={monthAttdMgtList}        
            errorCode={errorCode}
            errorMsg={errorMsg}
            updateMonthAttdMgtList={updateMonthAttdMgtList}
        />
        </div>
    )

}

const mapStateToProps=(state) =>{
    return{
        errorCode: state.hr.attd.errorCode,
        errorMsg: state.hr.attd.errorMsg,
        monthAttdMgtList: state.hr.attd.monthAttdMgtList,
    };
}

export default connect(mapStateToProps,{searchMonthAttdMgtList,updateMonthAttdMgtList})(withRouter(MonthAttdManagerContainer));