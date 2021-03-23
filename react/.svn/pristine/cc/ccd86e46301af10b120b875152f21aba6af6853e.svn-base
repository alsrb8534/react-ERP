import axios from 'Api/logiApi';
import hr from 'Api/hrApi';

export const downloadReport = (param) =>
{
return axios.get("/sales/logisticExel",
{
params : param
});
}

export const searchEstimate = 
async param => {
const result = await axios.get("/sales/searchEstimates",
{params : param});
return result.data;
}


export const estimateCellClicked =
async params =>{
const result = await axios.get("/searchEstimateDetail.do",{
params: {
estimateNo: params.data.estimateNo
}
});
return result.data;
}

export const searchItemCode =
async param =>{
const result = await axios.get('/logisticsInfo/getStandardUnitPrice.do', {
params: param
});
return result.data;
}


export const saveEstimateRow =
async param =>{
const result = await axios.post(
'/sales/addNewEstimates.do',
{
estimateDate: param.estimateDate,
newEstimateInfo: param
},
{ headers: { 'Content-Type': 'application/json' } }
)
return result.data;
}

export const searchCustomer =
async () =>{
const result = await hr.get('/basicInfo/searchCustomer.do', {
params: {
searchCondition: 'ALL',
workplaceCode: ''
}
})
return result.data;
}

export const searchItem =
async () =>{
  const result = await axios.get('/base/codeList.do', {
   params: {
 divisionCode: 'IT-_I'
   }
 })
 return result.data;
}

export const searchDetailList =
async (params) =>{
const result = await axios.get('/sales/searchContractDetail', {
    params: {
        contractNo: params.data.contractNo
    }
})
return result.data;
}

export const searchContractList =
async (param) =>{
const result = await axios.get('/sales/searchContract', {
    params: param
})
return result.data;
}

export const estimateSearch =
async (param) =>{
const result = await axios.get('/sales/searchEstimateInContractAvailable', {
    params: param
})
return result.data;
}

export const addContract =
async (param) =>{
const result = await axios.post('/sales/addNewContract', {
    batchList: param.batchList,
    contractDate: param.contractDate,
    personCodeInCharge: param.personCodeInCharge
})
return result.data;
}

export const searchContractType =
async () =>{
const result = await axios.get('/base/codeList.do', {
    params: {
        divisionCode: 'CT'
    }
})
return result.data;
}

export const searchDialogCustomer =
async () =>{
const result = await axios.get('/base/codeList.do', {
    params: {
        divisionCode: 'CL-01'
    }
})
return result.data;
}