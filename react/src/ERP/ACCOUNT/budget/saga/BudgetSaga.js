import { takeEvery} from "redux-saga/effects";
import * as types from "../reducer/BudgetReducer";
import createRequestSaga from "util/createRequestSaga";
import * as api from '../api';

//******************************2021-03-16 송화준 ********************************* */
const selectAccountPeriodSaga = createRequestSaga(types.SELECT_ACCOUNT_PERIOD_START, api.selectAccountPeriod); //회계연도 조회
const selectBudgetListSaga = createRequestSaga(types.SELECT_BUDGET_LIST_START, api.selectBudgetList); //예산계정목록 조회
const selectBudgetDetailListSaga = createRequestSaga(types.SELECT_BUDGET_DETAIL_LIST_START, api.selectBudgetDetailList); //예산계정상세목록  조회
const selectBudgetSaga = createRequestSaga(types.SELECT_FIND_BUDGET_START, api.selectBudget); //예산신청목록  조회
const insertBudgetSaga = createRequestSaga(types.INSERT_ORG_BUDGET_START, api.insertBudget); //예산계정상세목록  조회
const selectBudgetApplSaga = createRequestSaga(types.SELECT_FIND_BUDGET_APPL_START, api.selectBudgetAppl); //예산편성목록  조회
const selectFindBudgetAdjustmentStartSaga = createRequestSaga(types.SELECT_FIND_BUDGET_ADJUSTMENT_START, api.selectFindBudgetAdjustmentStart); //예산조정입력  조회
const selectBudgetStatusSaga = createRequestSaga(types.SELECT_BUDGET_STATUS_START, api.selectBudgetStatus); //예산실적현황  조회
const selectBudgetComparisonSaga = createRequestSaga(types.SELECT_BUDGET_COMPARISON_START, api.selectBudgetComparison); //예산실적현황  조회
const selectBudgetComparisonStatusSaga = createRequestSaga(types.SELECT_BUDGET_COMPARISON_STATUS_START, api.selectBudgetComparisonStatus); //예실대비현황 조회
const selectbudgetExcessStatusSaga = createRequestSaga(types.SELECT_BUDGET_EXCESS_STATUS_START, api.selectbudgetExcessStatus); //예산초과현황 조회

export default function* BudgetSaga() {
    yield takeEvery(types.SELECT_ACCOUNT_PERIOD_START, selectAccountPeriodSaga); //회계연도 조회
    yield takeEvery(types.SELECT_BUDGET_LIST_START, selectBudgetListSaga); //예산계정목록 조회
    yield takeEvery(types.SELECT_BUDGET_DETAIL_LIST_START, selectBudgetDetailListSaga); //예산계정상세목록  조회
    yield takeEvery(types.SELECT_FIND_BUDGET_START, selectBudgetSaga); //예산신청목록  조회
    yield takeEvery(types.INSERT_ORG_BUDGET_START, insertBudgetSaga); //예산계정상세목록  조회
    yield takeEvery(types.SELECT_FIND_BUDGET_APPL_START, selectBudgetApplSaga); //예산편성목록  조회
    yield takeEvery(types.SELECT_FIND_BUDGET_ADJUSTMENT_START, selectFindBudgetAdjustmentStartSaga); //예산조정입력  조회
    yield takeEvery(types.SELECT_BUDGET_STATUS_START, selectBudgetStatusSaga); //예산실적현황  조회
    yield takeEvery(types.SELECT_BUDGET_COMPARISON_START, selectBudgetComparisonSaga, ); //예산실적현황  조회
    yield takeEvery(types.SELECT_BUDGET_COMPARISON_STATUS_START,selectBudgetComparisonStatusSaga,); //예실대비현황 조회
    yield takeEvery(types.SELECT_BUDGET_EXCESS_STATUS_START,selectbudgetExcessStatusSaga,); //예산초과현황 조회
}
