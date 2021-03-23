import * as types from 'ERP/LOGISTIC/Sales/action/SalesActionType';

const initialState = {
    deliveryComPleteData: [],
    isDeliveryOpen: false
};

const Sales = (state = initialState, action) => {
    switch (action.type) {
        case types.DELIVEARY_COMPLETE_SUCCESS:
            console.log('action.payload', action.payload);
            return {
                ...state,
                deliveryComPleteData: action.payload
            };
        case types.DELIVEARY_COMPLETE_FAILURE:
            return {
                ...state,
                deliveryComPleteData: action.error
            };
        case types.DELIVERY_DIVISON_FAILURE:
            return {
                ...state,
                deliveryComPleteData: action.error
            };
        default:
            return state;
    }
};

export default Sales;
