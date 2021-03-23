import React from 'react';
import Login from './Login';
import { connect } from 'react-redux';
import { logInOutRequest, authorityRequest } from 'common/reducer/commonReducer';
import { searchCode } from 'ERP/HR/base/reducer/BaseReducer';
import { withRouter } from 'react-router-dom';

const LoginContainer = props => {
    const {
        status,
        errorCode,
        errorMsg,
        logInOutRequest,
        isLogin,
        searchCode,
        company,
        workPlace,
        authorityRequest
    } = props;
    console.log('props', props);
    const handleLogin = (empCode, password, companyCodes, workplaceCodes) => {
        console.log('로그인 진행 체크', empCode);
        console.log('companyCodes', companyCodes);
        console.log('workplaceCodes', workplaceCodes);
        authorityRequest({
            companyCode: companyCodes,
            workplaceCode: workplaceCodes,
            empCode: empCode
        });
        logInOutRequest({
            empCode: empCode,
            password: password,
            companyCode: companyCodes,
            workplaceCode: workplaceCodes,
            history: props.history
        });
    };

    return (
        <div>
            <Login
                handleLogin={handleLogin}
                status={status}
                errorCode={errorCode}
                errorMsg={errorMsg}
                isLogin={isLogin}
                searchCode={searchCode}
                companyCode={company}
                workPlaceCode={workPlace}
            />
        </div>
    );
};

const mapStateToProps = state => {
    console.log('mapStateToProps', state);
    return {
        status: state.logInOutReducer.status,
        errorCode: state.logInOutReducer.errorCode,
        errorMsg: state.logInOutReducer.errorMsg,
        isLogin: state.logInOutReducer.isLogin,
        company: state.hr.base.company,
        workPlace: state.hr.base.workPlace
    };
};

export default connect(mapStateToProps, { logInOutRequest, searchCode, authorityRequest })(
    withRouter(LoginContainer)
);
