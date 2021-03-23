import { combineReducers } from 'redux';
import BasicInfo from 'ERP/LOGISTIC/BasicInfo/reducer/BasicInfoReducer';
import LogisticsInfo from 'ERP/LOGISTIC/LogisticsInfo/reducer/LogisticsInfoReducer';
import Production from 'ERP/LOGISTIC/Production/reducer/ProductionReducer';
import Sales from 'ERP/LOGISTIC/Sales/reducer/SalesReducer';

const Logi = combineReducers({
    BasicInfo,
    LogisticsInfo,
    Production,
    Sales
});
export default Logi;
