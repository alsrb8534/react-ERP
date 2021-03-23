import { all } from "redux-saga/effects";
import AccountSaga from "ERP/ACCOUNT/account/saga/AccountSaga";
import StatementSaga from "ERP/ACCOUNT/statement/saga/StatementSaga";
import BudgetSaga from "ERP/ACCOUNT/budget/saga/BudgetSaga";
import BaseSaga from "ERP/ACCOUNT/base/saga/BaseSaga";

export default function* HrRootSaga() {
    yield all([
        AccountSaga(),
        StatementSaga(),
        BudgetSaga(),
        BaseSaga()
    ]);
}