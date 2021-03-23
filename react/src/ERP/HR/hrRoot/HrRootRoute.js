import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import AttdRoute from '../attd/route/AttdRoute';
import BaseRoute from '../base/route/BaseRoute';
import SalaryRoute from '../salary/route/SalaryRoute';
import EmpRoute from '../emp/route/EmpRoute';
import BoardRoute from '../board/route/BoardRoute';

const HrRootRoute = () => {
    return (
        <>
            <AttdRoute />
            <BaseRoute />
            <SalaryRoute />
            <EmpRoute />
            <BoardRoute />
        </>
    );
};

export default withRouter(HrRootRoute);
