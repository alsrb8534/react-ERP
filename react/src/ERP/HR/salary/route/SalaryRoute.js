import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import Auth from '../../../../util/auth';

// 급 여 조 회 =========================================================================================================================
import { default as MonthSalaryContainer } from '../page/MonthSalary/MonthSalaryContainer'; //2020-08-20 63기 손유찬 -- 월별 급여조회

// 급 여 관 리 =========================================================================================================================
import { default as BaseExtSalContainer } from '../page/BaseExtSalManage/BaseExtSalContainer'; //2020-08-22 63기 손유찬 -- 초과수당관리
import { default as BaseDeductionContainer } from '../page/BaseDeductionManage/BaseDeductionContainer'; //2020-08-26 63기 손유찬 -- 공제기준관리
import { default as BaseSalaryContainer } from '../page/BaseSalaryManage/BaseSalaryContainer'; //2020-11-20 64기 정준혁 -- 급여기준관리
import { default as CloseSalaryContainer } from '../page/SalaryManage/CloseSalaryContainer'; //2020-08-20 63기 손유찬수정 --월급여 조회마감

const SalaryRoute = () => {
    return (
        <>
            {/*---------------- 급여조회 ----------------*/}
            {/**  월급여 조회 */}
            {/*******************2020-08-20 손유찬 시작*************************/}
            <Route exact path="/app/hr/Salary/monthSalary" component={MonthSalaryContainer} />{' '}
            {/*******************2020-08-20 손유찬 종료*************************/}
            {/*----------------- 급여관리---------------- */}
            {/* 급여기준관리  */}
            {/*******************2020-11-20 정준혁 시작************************/}
            <Route
                exact
                path="/app/hr/salary/baseSalaryManage"
                component={BaseSalaryContainer}
            />{' '}
            {/*******************2020-11-20 정준혁 종료*************************/}
            {/* 공제기준관리 */}
            {/*******************2020-08-26 정준혁 시작*************************/}
            <Route
                exact
                path="/app/hr/salary/baseDeductionManage"
                component={BaseDeductionContainer}
            />{' '}
            {/*******************2020-08-26 정준혁 종료*************************/}
            {/* 초과수당관리 */}
            {/*******************2020-08-26 정준혁 시작*************************/}
            <Route
                exact
                path="/app/hr/salary/baseExtSalManage"
                component={BaseExtSalContainer}
            />{' '}
            {/*******************2020-08-26 정준혁 종료*************************/}
            {/** 월급여마감 */}
            {/*******************2020-08-22 손유찬 시작*************************/}
            <Route
                exact
                path="/app/hr/salary/closeSalary"
                component={Auth(CloseSalaryContainer, '/app/hr/salary/closeSalary')}
            />{' '}
            {/*******************2020-08-22 손유찬 종료*************************/}
            {/*----------------- 급여관리---------------- */}
            {/*******************2020-11-18 손유찬 시작*************************/}
        </>
    );
};

export default SalaryRoute;
