import { createAction } from 'redux-actions';
import * as types from 'ERP/LOGISTIC/Sales/action/SalesActionType';

/***************************** 영업 관리 *********************************/
export const deliveryCompleteRequest = createAction(types.DELIVEARY_COMPLETE_REQUEST);
export const deliveryCompleteSuccess = createAction(types.DELIVEARY_COMPLETE_SUCCESS);
export const deliveryCompleteFailure = createAction(types.DELIVEARY_COMPLETE_FAILURE);
export const deliveryDivisionStart = createAction(types.DELIVERY_DIVISON_START);
export const deliveryDivisionFailure = createAction(types.DELIVERY_DIVISON_FAILURE);
