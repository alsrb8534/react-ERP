import React from 'react';
import { Route } from 'react-router-dom';
//************************************************물류정보 관리 ********************************************************
import { default as CodeInfo } from 'ERP/LOGISTIC/LogisticsInfo/page/CodeInfo/CodeInfo'; //*****2020-11-28 이숭규 코드관리
import { default as ItemInfo } from 'ERP/LOGISTIC/LogisticsInfo/page/ItemInfo/ItemInfo'; //*****2020-11-28 황경윤 품목관리
import { default as WarehouseInfo } from 'ERP/LOGISTIC/LogisticsInfo/page/WareHouseInfo/WareHouseInfo'; //*****2020-11-28 노원찬 창고관리

function LogisticsInfoRoute() {
    return (
        <>
            {/* 물류 정보 관리 */}
            <Route exact path="/app/logi/logisticsInfo/codeInfo" component={CodeInfo} />
            {/*2020-11-18 이숭규 */}
            <Route exact path="/app/logi/logisticsInfo/itemInfo" component={ItemInfo} />
            {/*2020-11-28 황경윤 */}
            <Route exact path="/app/logi/logisticsInfo/wareHouseInfo" component={WarehouseInfo} />
        </>
    );
}

export default LogisticsInfoRoute;
