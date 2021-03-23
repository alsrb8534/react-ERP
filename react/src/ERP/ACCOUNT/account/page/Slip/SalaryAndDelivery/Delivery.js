import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham-dark.css';
import { useDispatch, useSelector } from 'react-redux';
import { DELIVEARY_COMPLETE_REQUEST } from 'ERP/LOGISTIC/Sales/action/SalesActionType';

import { List, DialogActions, Button } from '@material-ui/core';

/*##################################### 2020-11-20납품현황 박민호 #######################################*/

const Delivery = props => {
    const [rowData, setRowData] = useState('');
    const [positionGridApi, setPositionGridApi] = React.useState();
    const dispatch = useDispatch();
    const { deliveryComPleteData } = useSelector(state => state.Logi.Sales);
    const [deliveryList, setDeliveryList] = useState([
        {
            journalNo: 'NEW JOURNAL', // 여기서 분개 번호가 만들어짐.
            slipNo: 'NEW',
            balanceDivision: '대변',
            accountCode: '0401', //납품 상품매출.
            accountName: '상품매출',
            customerCode: '',
            leftDebtorPrice: 0, // 차변
            rightCreditsPrice: '' // 대변
        },
        {
            journalNo: 'NEW JOURNAL',
            slipNo: 'NEW',
            balanceDivision: '차변',
            accountCode: '0101', //급여에 대한 현금
            accountName: '현금',
            customerCode: '',
            leftDebtorPrice: '', // 차변
            rightCreditsPrice: 0 // 대변
        }
    ]);

    const onGridReady = params => {
        setPositionGridApi(params.api);
        params.api.sizeColumnsToFit(); // 칼럼 사이즈 자동조절
    };
    const column = {
        accountColumnDefs: [
            { width: '50', headerCheckboxSelection: true, checkboxSelection: true },
            { headerName: '납품일련번호', field: 'deliveryNo', width: 140 },
            { headerName: '견적일련번호', field: 'estimateNo', width: 140, hide: true },
            { headerName: '수주일련번호', field: 'contractNo', width: 140, hide: true },
            { headerName: '수주상세일련번호', field: 'contractDetailNo', width: 170, hide: true },
            { headerName: '거래처코드', field: 'customerCode', width: 100, hide: true },
            { headerName: '처리자코드', field: 'personCodeInCharge', width: 100 },
            { headerName: '품목코드', field: 'itemCode', width: 120 },
            { headerName: '품목명', field: 'itemName', width: 200 },
            { headerName: '단위', field: 'unitOfDelivery', width: 80 },
            { headerName: '납품수량', field: 'deliveryAmount', width: 80 },
            {
                headerName: '단가',
                field: 'unitPrice',
                width: 90,
                valueFormatter: currencyFormatter
            },
            {
                headerName: '총액',
                field: 'sumPrice',
                width: 100,
                valueFormatter: currencyFormatter
            },
            { headerName: '납품날짜', field: 'deliverydate', width: 150 },
            { headerName: '배송지', field: 'deliveryPlaceName', width: 120 },
            { headerName: '마감여부', field: 'finalizeStatus', width: 100 }
        ],
        autoGroupColumnDef: { minWidth: 100 }
    };
    const selectData = async () => {
        await dispatch({
            type: DELIVEARY_COMPLETE_REQUEST,
            payload: {}
        });
    };
    function currencyFormatter(params) {
        return formatNumber(params.value) + ' 원';
    }

    function formatNumber(number) {
        return Math.floor(number)
            .toString()
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    }

    const SumDelivery = () => {
        const deliveryRows = positionGridApi.getSelectedRows();

        var sumPrice = 0;

        if (deliveryRows.length === 0) {
            alert('선택된 값이 없습니다');
            return;
        }
        console.log(deliveryRows[0].finalizeStatus);

        for (var i = 0; i < deliveryRows.length; i++) {
            if (deliveryRows[i].finalizeStatus === 'Y') {
                alert('마감여부 확인 바랍니다');
                return;
            }
            console.log('deliveryRows[i].sumPrice', deliveryRows[i].sumPrice);
            sumPrice += parseInt(deliveryRows[i].sumPrice);
        }
        const newJournal = deliveryList.map((journalState, index) => {
            switch (index) {
                case 0:
                    return {
                        ...journalState,
                        customerCode: deliveryRows[0].customerCode,
                        rightCreditsPrice: sumPrice
                    };

                case 1:
                    return {
                        ...journalState,
                        customerCode: deliveryRows[0].customerCode,
                        leftDebtorPrice: sumPrice
                    };

                default:
                    return { ...journalState };
            }
        });

        props.close({
            newJournal,
            deliveryRows,
            division: 'Delivery'
        });
    };

    return (
        <div>
            <List>
                <div Align="center">
                    <Button
                        variant="contained"
                        size="large"
                        color="primary"
                        startIcon={<SearchIcon />} //아이콘
                        onClick={selectData}
                    >
                        납품 현황 조회
                    </Button>
                </div>
                <div
                    className={'ag-theme-material'} //그리드 모양
                    style={{
                        height: '540px',
                        width: '100%',

                        paddingTop: '8px'
                    }}
                >
                    <AgGridReact
                        columnDefs={column.accountColumnDefs} //컬럼명
                        rowSelection="multiple"
                        getRowStyle={function(param) {
                            return { 'text-align': 'center' };
                        }} //body 가운데 정렬
                        onGridReady={onGridReady}
                        autoGroupColumnDef={column.autoGroupColumnDef}
                        rowData={deliveryComPleteData}
                        suppressRowClickSelection={true}
                    />
                </div>
            </List>
            <div>
                <DialogActions>
                    <Button onClick={SumDelivery} color="primary">
                        납품마감
                    </Button>
                </DialogActions>
            </div>
        </div>
    );
};

export default Delivery;
