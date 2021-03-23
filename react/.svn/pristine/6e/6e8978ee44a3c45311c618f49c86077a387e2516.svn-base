import accountApi from "Api/accountApi";

//****************************2021-03-16 송화준 ********************************/

export const selectAccountPeriod = (action) =>
accountApi.get("/account/findAccountPeriodList", {
    
  });

export const selectBudgetList = (action) =>
accountApi.get("/account/findParentBudgetList", {
      
  });

export const selectBudgetDetailList = (action) =>
accountApi.get("/account/findDetailBudgetList", {
    params: { 
        budgetCode: action.payload.budgetCode
    },
        
});

export const selectBudget = (action) =>
accountApi.post(
    "/budget/findBudget",
    JSON.stringify(action.payload.budgetData), 
            {
            headers: { "Content-Type": "application/json" },
            },
        
);

export const insertBudget = (action) =>
accountApi.post(
    "/budget/orgBudget",
    JSON.stringify(action.payload.budgetData), 
            {
            headers: { "Content-Type": "application/json" },
            },
        
);


export const selectBudgetAppl = (action) =>
accountApi.post(
    "/budget/findBudgetAppl",
    JSON.stringify(action.payload.budgetData), 
            {
            headers: { "Content-Type": "application/json" },
            },
        
);


export const selectFindBudgetAdjustmentStart = (action) =>
accountApi.post(
    "/budget/findBudgetAppl",
    JSON.stringify(action.payload.budgetData), 
            {
            headers: { "Content-Type": "application/json" },
            },
        
);

export const selectBudgetStatus = (action) =>
accountApi.post(
    "/budget/callBudgetStatus",
    JSON.stringify(action.payload.budgetData), 
            {
            headers: { "Content-Type": "application/json" },
            },
        
);


export const selectBudgetComparison = (action) =>
accountApi.post(
    "/budget/findBudgetComparisonStatus",
    JSON.stringify(action.payload.budgetData), 
            {
            headers: { "Content-Type": "application/json" },
            },
        
);


export const selectBudgetComparisonStatus = (action) =>
accountApi.post(
    "/budget/findBudgetComparisonStatus",
    JSON.stringify(action.payload.budgetData), 
            {
            headers: { "Content-Type": "application/json" },
            },
        
);

export const selectbudgetExcessStatus = (action) =>
accountApi.post(
    "/budget/findbudgetExcessStatus",
    JSON.stringify(action.payload.budgetData), 
            {
            headers: { "Content-Type": "application/json" },
            },
        
);