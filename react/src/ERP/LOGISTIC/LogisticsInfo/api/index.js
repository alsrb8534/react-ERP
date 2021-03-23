import axios from 'Api/logiApi';

export const warehouseInfo = () =>
    axios.get('/logisticsInfo/warehouseInfo.do');


export const saveWarehouseInfo = (action) =>
    axios.post(
        '/logisticsInfo/batchListProcess.do',
        {
            warehouseInfo: action.payload
        }
    );


export const searchItemA = 
(code, detailCode) => axios.get('/logisticsInfo/searchItem.do', {
    params: {
        searchCondition: code,
        itemClassification: 'a',
        itemGroupCode: detailCode,
        minPrice: '',
        maxPrice: ''
    }
})


/* ItemInfo.js */
export const searchItemB =
(code, detailCode) => axios.get('/logisticsInfo/searchItem.do', {
    params: {
        searchCondition: code,
        itemClassification: detailCode,
        itemGroupCode: 'c',
        minPrice: '',
        maxPrice: ''
    }
})

    export const searchList = 
    divisionCode => axios.get('/base/codeList.do', {
        params: {
            divisionCode: divisionCode
        }
    })

    export const batchItemListProcess =
    map => axios.post('/logisticsInfo/batchItemListProcess.do', {
        batchList: map
    })

    export const delBatchList =
    delList => axios.post('/logisticsInfo/batchItemListProcess.do', {
        batchList: delList
    })

    export const rowsBatchList =
    rows => axios.post('/logisticsInfo/batchItemListProcess.do', {
        batchList: rows
    })

    export const saveDetailCodeInfo = action => axios.post(
        '/base/batchDetailListProcess.do',
        {
            detailCodeList: action.payload.detailCodeList
        }
    );

    export const saveCodeInfo = action =>
    axios.post('/base/batchListProcess.do', {
            codeList: action.payload
        });
/* ItemInfo.js */

    export const standardUnitPrice =
    (minPrice, maxPrice) => axios.get('/logisticsInfo/searchItem.do', {
        params: {
            searchCondition: 'STANDARD_UNIT_PRICE',
            itemClassification: 'a',
            itemGroupCode: 'n', //의미없음
            minPrice: minPrice + '',
            maxPrice: maxPrice + ''
        }
    })

    export const searchAllList = 
    () => axios.get('/logisticsInfo/searchItem.do', {
        params: {
            searchCondition: 'ALL',
            itemClassification: '',
            itemGroupCode: '',
            minPrice: '',
            maxPrice: ''
        }
    })

export const searchItem = async (divisionCode,setList,props,minPrice,maxPrice) => {
        if (divisionCode !== 'standardUnitPrice' || '') {
            await axios.get('/base/codeList.do', {
                params: {
                    divisionCode: divisionCode
                }
            }).then(function(respones) {
                setList(respones.data.detailCodeList);
            });
        }
        if (divisionCode === 'standardUnitPrice') {
            await axios.get('/logisticsInfo/searchItem.do', {
                params: {
                    searchCondition: 'STANDARD_UNIT_PRICE',
                    itemClassification: 'a',
                    itemGroupCode: 'n', //의미없음
                    minPrice: minPrice + '',
                    maxPrice: maxPrice + ''
                }
            }).then(function(respones) {
                props.list(respones.data.gridRowJson);
                props.close();
            });
        }
        if (divisionCode === '') {
            await axios.get('/logisticsInfo/searchItem.do', {
                params: {
                    searchCondition: 'ALL',
                    itemClassification: '',
                    itemGroupCode: '',
                    minPrice: '',
                    maxPrice: ''
                }
            }).then(function(respones) {
                props.list(respones.data.gridRowJson);
                props.close();
            });
        }
    }