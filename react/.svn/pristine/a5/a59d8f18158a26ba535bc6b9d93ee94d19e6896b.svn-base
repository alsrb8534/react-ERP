import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import AccRoute from 'ERP/ACCOUNT/accRoot/AccRootRoute';
import HrRoute from 'ERP/HR/hrRoot/HrRootRoute';
import LogiRootRoute from '../ERP/LOGISTIC/logiRoot/LogiRootRoute';

function RootRoute() {
    return (
        <>
            <Switch>
                {/* 회 계 */}
                <AccRoute />
                {/* 회 계 */}
            </Switch>

            <Switch>
                {/* 인 사 */}
                <HrRoute />
                {/* 인 사 */}
            </Switch>

            <Switch>
                {/* 물 류 */}
                <LogiRootRoute />
                {/* 물 류 */}
            </Switch>
        </>
    );
}

export default RootRoute;
