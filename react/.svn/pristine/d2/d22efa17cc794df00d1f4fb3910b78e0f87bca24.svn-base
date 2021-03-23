import * as types from 'ERP/LOGISTIC/Production/action/ProductionActionType';

const initialState = {
    MrpList: [],
    MrpSimulatorList: [],
    MrpGetList: [],
    GatherList: []
};

const Production = (state = initialState, action) => {
    switch (action.type) {
        case types.SEARCH_MPS_LIST_SUCCESS:
            return {
                ...state,
               MrpList: action.payload.gridRowJson
            };

        case types.SEARCH_MRP_LIST_SUCCESS:
            return {
                ...state,
                MrpSimulatorList: action.payload.gridRowJson
            };
        case types.SEARCH_MRP_GETMRPLIST_REQUEST:
            return {
                ...state,
            };
        case types.SEARCH_MRP_GETMRPLIST_SUCCESS:
            return {
                ...state,
                MrpGetList: action.payload.gridRowJson
            };
        case types.SEARCH_GATHER_LIST_SUCCESS:
            return {
                ...state,
                GatherList: action.payload.gridRowJson
            };
        default:
            return state;
    }
};

export default Production;
