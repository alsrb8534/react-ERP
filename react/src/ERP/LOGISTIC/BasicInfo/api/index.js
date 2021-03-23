import axios from 'Api/hrApi';

/****************** 사업장 정보 *********************/
export const workplaceInfo = () =>
    axios.get('/basicInfo/searchWorkplace.do', {
        params: {
        companyCode: 'COM-01'
        }
    });

export const saveWorkplace = action =>
    axios.post('/basicInfo/batchFinancialAccountAssociatesListProcess.do', {
        batchList: action.payload
    });


/****************** 거래처 정보 *********************/

export const searchClient = action =>
    axios.get('/basicInfo/searchCustomer.do', 
    
    { params: {
            searchCondition: action.payload.searchCondition,
            workplaceCode: action.payload.workplaceCode
          }
    }
);

export const saveClient = action =>
axios.post(
    '/basicInfo/batchWorkplaceListProcess.do',
    { batchList: action.payload }
);

export const searchFinan = action =>
    axios.get('/basicInfo/searchFinancialAccountAssociatesList.do', 
    
    { params: {
        searchCondition: action.payload.searchCondition,
        workplaceCode: action.payload.workplaceCode
          }
    }
);

export const saveFinanInfo = action =>
axios.post(
    '/basicInfo/batchCustomerListProcess.do',
    { batchList: action.payload }
);


/****************** 부서 정보 *********************/

export const deptInfoRequest = action =>
axios.get('/basicInfo/searchDepartment.do', 
{
    params: {
        searchCondition: action.payload.searchCondition,
        companyCode: action.payload.companyCode,
        workplaceCode: action.payload.workplaceCode
    }
});


export const saveDeptInfo = action =>
axios.post(
    '/basicInfo/batchDepartmentListProcess.do',
    { batchList: action.payload }
);

