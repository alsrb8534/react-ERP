import axios from 'Api/logiApi';

export const inspection = (param) =>
    axios.put("/purchase/inspection.do", 
    { sendData: param },
    {  headers: {  "Content-Type": "application/json" }},
    );


    export const getBomDeploy =
    async (param) => {
    const result = await axios.get(
        '/purchase/searchBomDeploy.do', {
            params : {
                deployCondition: param.deployCondition,
                itemCode: param.itemCode,
                itemClassificationCondition: param.divisionCode,
            }
        }
    )
    return result.data;
    }


    export const getBomDeployRegist =
async (param) => {
const result = await axios.get("/purchase/searchBomInfo.do", {
    params: {
        parentItemCode: param
    },
})
return result.data;
}

export const getDetailCode =
async (param) => {
const result = await axios.get(
    '/base/codeList.do', {
        params: {
            divisionCode: param
        }
    }
)
return result.data;
}

export const batchBom =
async (param) => {
const result = await axios.post(
    "/purchase/batchBomListProcess.do",
    {
        batchList: JSON.stringify(param)
    }
)
return result.data;
}

export const optionOrderDialog =
async () => {
const result = await axios.get('/logisticsInfo/getOptionItemList.do')
return result.data;
}

export const onClickOptionOrder =
async (params) => {
const result = await axios.get('/purchase/optionOrder.do', {
    params: {
        itemCode: params.itemCode,
        itemAmount: params.itemAmount
    }
})
return result.data;
}

export const onClickGetOrderList =
async (params) => {
const result = await axios
.get('/purchase/getOrderList.do', {
    params: {
        startDate: params.startDate,
        endDate: params.endDate
    }
})
return result.data;
}

export const onClickOrderOpen =
async (param) => {
const result = await axios
.get('/purchase/showOrderDialog', {
    params: {
        mrpGatheringNoList: param.mrpGatheringNoList
    }
})
return result.data;
}



