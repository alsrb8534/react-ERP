// --- redux-saga
import { combineReducers } from 'redux';

import {
    menuListReducer,
    logInOutReducer,
    sideBarReducer,
    dashReducer,
    Auth
} from 'common/reducer/commonReducer';
import hr from 'ERP/HR/hrRoot/HrRootReducer';
import AccReducer from 'ERP/ACCOUNT/accRoot/AccRootReducer';
import Logi from 'ERP/LOGISTIC/logiRoot/LogiRootReducer';

/*--------------------------------------------------------------------*/
const RootReducers = combineReducers({
    menuListReducer, // RouteMenuComponents
    logInOutReducer,
    sideBarReducer,
    hr,
    AccReducer,
    Logi,
    dashReducer,
    Auth
});

export default RootReducers;
