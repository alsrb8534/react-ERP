import { all, fork } from 'redux-saga/effects';

import BasicInfoSaga from 'ERP/LOGISTIC/BasicInfo/saga/BasicInfoSaga';
import LogisticsInfoSaga from 'ERP/LOGISTIC/LogisticsInfo/saga/LogisticsInfoSaga';
import ProductionSaga from 'ERP/LOGISTIC/Production/saga/ProductionSaga';
import SalesSaga from 'ERP/LOGISTIC/Sales/saga/SalesSaga';

export default function* LogiRootSaga() {
    yield all([
        fork(BasicInfoSaga),
        fork(LogisticsInfoSaga),
        fork(ProductionSaga),
        fork(SalesSaga)
    ]);
}
