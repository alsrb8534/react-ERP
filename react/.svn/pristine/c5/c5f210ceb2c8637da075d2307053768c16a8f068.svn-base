import React from "react";
import { Route,withRouter } from "react-router-dom";

// 예 산 관 리 =========================================================================================================================
import { default as BudgetAppForm } from "../page/BudgetAppForm/BudgetAppForm"; // 예산신청
import { default as BudgetCompForm } from "../page/BudgetCompForm/BudgetCompForm"; // 예산편성
import { default as BudgetAdjustment } from "../page/BudgetAdjustment/BudgetAdjustment"; // 예산조정입력
import { default as BudgetComparisonStatus } from "../page/BudgetComparisonStatus/BudgetComparisonStatus"; // 예산대비현황
import { default as BudgetStatusForm } from "../page/BudgetStatusForm/BudgetStatusForm"; // 예산실적현황
import { default as BudgetExcessStatus } from "../page/BudgetExcessStatus/BudgetExcessStatus"; // 예산초과현황
// export { default as FinancialPositionStatement } from "ERP/ACCOUNT/Page/FinancialPositionStatement/FinancialPositionStatement"; // 예산신청

const BudgetRoute = () => {
    return (
        <>
            {/* 예산신청 */}
            <Route
                exact
                path="/app/acc/budget/BudgetAppForm"
                component={BudgetAppForm}
            />
            {/* 2020-11-19 예산신청 끝*/}
            {/* 예산편성 */}
            <Route
                exact
                path="/app/acc/budget/BudgetCompForm"
                component={BudgetCompForm}
            />
            {/* 2020-11-19 예산편성 끝*/}
            {/* 예산조정입력 */}
            <Route
                exact
                path="/app/acc/budget/BudgetAdjustment"
                component={BudgetAdjustment}
            />
            {/* 2020-11-26 예산조정입력 끝*/}
            {/* 예실대비현황 */}
            <Route
                exact
                path="/app/acc/budget/BudgetComparisonStatus"
                component={BudgetComparisonStatus}
            />
            {/* 2020-11-27 예실대비현황 끝*/}
            {/* 예산실적현황 */}
            <Route
                exact
                path="/app/acc/budget/BudgetStatusForm"
                component={BudgetStatusForm}
            />
            {/* 2020-11-19 예산실적현황 끝*/}
            {/* 예산실적현황 */}
            <Route
                exact
                path="/app/acc/budget/BudgetExcessStatus"
                component={BudgetExcessStatus}
            />
            {/* 2020-11-19 예산실적현황 끝*/}
        </>
    );
}

export default withRouter(BudgetRoute);
{/* ///////////////////////// 2021-02-26 이은기  /////////////////////////// */}