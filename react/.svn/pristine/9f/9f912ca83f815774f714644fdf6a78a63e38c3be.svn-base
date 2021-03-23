import React from 'react';
import { Route } from 'react-router-dom';
//************************************************영업 관리 ********************************************************
import { default as Contract } from 'ERP/LOGISTIC/Sales/page/Contract/Contract'; //*****2020-12-01 이숭규 수주
import { default as Delivery } from 'ERP/LOGISTIC/Sales/page/Delivery/Delivery'; //*****2020-12-01 이숭규 납품
import { default as EstimateInfo } from 'ERP/LOGISTIC/Sales/page/Estimate/EstimateInfo/Containers/EstimateInfo'; //*****2020-12-03 김태홍 견적
import { default as EstimateRegister } from 'ERP/LOGISTIC/Sales/page/Estimate/EstimateRegister/Containers/EstimateRegister'; //*****2020-12-04 김태홍 견적
import { default as SalesPlanInfo } from 'ERP/LOGISTIC/Sales/page/SalesPlanInfo/SalesPlanInfo'; //*************2020-12-03 박민호 판매계획******** */

function SalesRoute() {
    return (
        <>
            {/* 영업 관리 */}
            <Route exact path="/app/logi/sales/EstimateRegister" component={EstimateRegister} />
            {/*2020-12-03 김태홍 */}
            <Route exact path="/app/logi/sales/contractRegister" component={Contract} />
            {/*2020-12-01 이숭규 */}
            <Route exact path="/app/logi/sales/deliveryInfo" component={Delivery} />
            {/*2020-12-03 이숭규 */}
            <Route exact path="/app/logi/sales/EstimateInfo" component={EstimateInfo} />
            <Route exact path="/app/logi/sales/salesPlanInfo" component={SalesPlanInfo} />
            {/*2020-11-18 박민호 */}
        </>
    );
}

export default SalesRoute;
