import { Typography, AppBar, Toolbar, TextField, Button } from "@material-ui/core";
import { AgGridReact } from "ag-grid-react/lib/agGridReact";
import moment from "moment";
import Axios from 'axios';
import React, {useState, useRef, useCallback, useEffect} from 'react';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import { makeStyles } from '@material-ui/core/styles';
import ItemDialog from '../Presentational/ItemDialog';
import AmountDialog from '../Presentational/AmountDialog';
import MyDialog from 'util/LogiUtil/MyDialog';
// import XLSX from 'xlsx';
import { CSVLink } from 'react-csv';
import promiseCallback from 'util/usePromiseCallback';
import usePromise from 'util/usePromise';
import * as api from 'ERP/LOGISTIC/Sales/api';
import useAsync from 'util/useAsync';

const EstimateInfo= () => {
    const today = moment().format('YYYY-MM-DD');
    const [gridApiEstimate, setGridApiEstimate] = useState(null);
    const [gridColumnApiEstimate, setGridColumnApiEstimate] = useState(null);
    const [gridApiEstimateDetail, setGridApiEstimateDetail] = useState(null);
    const [gridColumnApiEstimateDetail, setGridColumnApiEstimateDetail] = useState(null);
    const [startDate, setStartDate] = useState(today);
    const [endDate, setEndDate] = useState(today);
    const [rowEstimate, setRowEstimate] = useState([]);
    const [rowEstimateDetail, setRowEstimateDetail] = useState([]);
    const [dateSearchCondition, setDateSearchCondition] = useState('estimateDate');
    const [openItemDialog, setOpenItemDialog] = useState(false);
    const [openAmountDialog, setOpenAmountDialog] = useState(false);
    const [estimateNo, setEstimateNo] = useState('');

    const columnDefsEstimate = [
        {
            headerName: ' ',
            checkboxSelection: true,
            width: 35,
            cellStyle: { textAlign: 'center' }
        },

        { headerName: "??????????????????", field: "estimateNo"},
        { headerName: "???????????????", field: "customerCode"},
        { headerName: "????????????", field: "estimateDate"},
        { headerName: "????????????", field: "contractStatus"},
        { headerName: "???????????????", field: "estimateRequester"},
        { headerName: "????????????", field: "effectiveDate"},
        { headerName: "?????????????????????", field: "personCodeInChange"},
        { headerName: "??????", field: "description"},
    ];

    const columnDefsEstimateDetail = [
        { headerName: "????????????????????????", field: "estimateDetailNo"},
        { headerName: "????????????", field: "itemCode"},
        { headerName: "?????????", field: "itemName"},
        { headerName: "??????", field: "unitOfEstimate"},
        { headerName: "?????????", field: "dueDateOfEstimate", cellEditor: 'datePicker'},
        { headerName: "????????????", field: "estimateAmount"},
        { headerName: "????????????", field: "unitPriceOfEstimate"},
        { headerName: "?????????", field: "sumPriceOfEstimate"},
        { headerName: "??????", field: "description"},
        { headerName: "??????????????????", field: "description"},
        {
            headerName: "??????",
            field: "remove",
            cellRenderer: 'btnRemove'
        }
    ];
    
    function onGridReadyEstimate(params) {
        setGridApiEstimate(params.api);
        setGridColumnApiEstimate(params.columnApi);
        params.api.sizeColumnsToFit();
    }

    function onGridReadyEstimateDetail(params) {
        setGridApiEstimateDetail(params.api);
        setGridColumnApiEstimateDetail(params.columnApi);
        params.api.sizeColumnsToFit();
    }

    const onChangeDate = (e) => {
        if(e.target.id === 'startDate'){
            setStartDate(e.target.value)
        }else{
            setEndDate(e.target.value)
        }
        console.log(e);
    }

    const [estimate, searchEstimateFetch] = useAsync((param) =>api.searchEstimate(param), [], true);
    const [estimateDetail, searchEstimateDetailFetch] = useAsync((param) =>api.estimateCellClicked(param), [], true);

    const searchEstimate = useCallback(() => {
        let param = {
            startDate : startDate,
            endDate : endDate,
            dateSearchCondition : dateSearchCondition
        }
        searchEstimateFetch(param);
    },[dateSearchCondition, endDate, searchEstimateFetch, startDate]);

    const onCellClicked = params => {
  
          const estimateNo = params.data.estimateNo;
          setEstimateNo(estimateNo);
          searchEstimateDetailFetch(params);
      };

    const useStyles = makeStyles((theme) => ({
        formControl: {
          margin: theme.spacing(3),
        },
        button: {
          margin: theme.spacing(1, 1, 0, 0),
        },
      }));

    const classes = useStyles();

    const handleRadioChange = (event) => {
        console.log(event.target.value);
        if(event.target.value === 'estimateDate'){
            setDateSearchCondition('estimateDate');
        }
        else if(event.target.value === 'effectiveDate'){
            setDateSearchCondition('effectiveDate');
        }
        
    }

    const frameworkComponents = {
        btnRemove : ()=>{return BtnRemove(handleRemove)}
    }

    const handleAddEstimateDetailRow = () => {
        var newData = {
            itemCode : '',
            itemName : '',
            unitOfEstimate : 'EA',
            dueDateOfEstimate : '',
            estimateAmount : 0,
            unitPriceOfEstimate : 0,
            sumPriceOfEstimate : 0,
            description : '',
            remove : '',
            status : 'INSERT',
        };
        setRowEstimateDetail([...rowEstimateDetail, newData]);
    }

    const handleBatchEstimateDetailRow = () => {
        
    }

    const handleRemove = (e) =>{
        e.defaultPrevented();
       console.log(e);

   }

    const handleOpenDialog = (params) =>{
        if(params.colDef.field === 'itemCode' || params.colDef.field === 'itemName'){
            setOpenItemDialog(true);
        }else if(params.colDef.field === 'estimateAmount' || params.colDef.field === 'unitPriceOfEstimate' || params.colDef.field === 'sumPriceOfEstimate'){
            setOpenAmountDialog(true);
        }
    }

    const handleCloseItemDialog = () =>{
        setOpenItemDialog(false);
    }

    const handleItemSelected=(params)=>{
       
        var selectedData = gridApiEstimateDetail.getSelectedRows();
        selectedData[0].itemCode = params.data.itemCode;
        selectedData[0].itemName = params.data.itemName;

        gridApiEstimateDetail.updateRowData({ update: selectedData });

        console.log(rowEstimateDetail);
        

    }


    const handleCloseAmountDialog = (params) =>{
        // console.log(params);
        setOpenAmountDialog(false);
    }
    
    const [itemCost, searchItemCostFetch] = useAsync((param) =>api.searchItemCode(param), [], true);
    const handleSearchItemCode = () => {
        var row = gridApiEstimateDetail.getSelectedRows();
        let param = {
            itemCode: row[0].itemCode
        };
        searchItemCostFetch(param);
    };



    const headers = [
        { label: "estimateDate", key: "estimateDate" },
        { label: "estimateNo", key: "estimateNo" },
        { label: "customerCode", key: "customerCode" },
        { label: "customerName", key: "customerName" },
        { label: "businessLicenseNumber", key: "businessLicenseNumber" },
        { label: "estimateAmount", key: "estimateAmount" },
        { label: "unitPriceOfEstimate", key: "unitPriceOfEstimate" },
        { label: "sumPriceOfEstimate", key: "sumPriceOfEstimate" },
        { label: "itemName", key: "itemName" },
        { label: "dueDateOfEstimate", key: "dueDateOfEstimate" },
        { label: "customerTelNumber", key: "customerTelNumber" }
      ];

      const [data, setData] = useState([]);

      const  downloadReport = useCallback(() => {
          
        const process = async () => {
        let param = {
            estimateNo : estimateNo
        }

        try{
       const result = await api.downloadReport(param);

        setData(result.data.gridRowJson);
        csvLinkEl.current.link.click();
    }catch(e){
        console.log(e.message);
    }
      }

      process();
    },[estimateNo]);

      const csvLinkEl = useRef(null);

    return (
        <>
            <div>
                <div>
                    <AppBar position="static" color="primary">
                        <Toolbar>
                            <Typography component="h2" variant="h4">
                                ????????????
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </div>
                {/* ??????????????? */}

                <div align='right'>
                    <FormControl component="fieldset" error={true} className={classes.formControl}>
                        <RadioGroup row aria-label="quiz" name="quiz" value={dateSearchCondition} onChange={handleRadioChange} >
                            <FormControlLabel value="estimateDate" control={<Radio />} label="????????????" />
                            <FormControlLabel value="effectiveDate" control={<Radio />} label="????????????" />
                        </RadioGroup>
                    </FormControl>
                    <TextField
                    id="startDate"
                    label="?????????"
                    onChange={onChangeDate}
                    type={"date"}
                    defaultValue="2020-12-03"
                    
                    />
                    <TextField
                    id="endDate"
                    label="?????????"
                    onChange={onChangeDate}
                    type={"date"}
                    defaultValue="2020-12-03"
                
                    />

                    <Button                     
                    variant="contained"
                    color="secondary"
                    onClick={downloadReport}>Export to CSV (Async)</Button>
        <CSVLink
          headers={headers}
          filename="Clue_Mediator_Report_Async.csv"
          data={data}
          ref={csvLinkEl}
        ></CSVLink>

                    <Button 
                    onClick={searchEstimate}
                    variant="contained"
                    color="secondary"
                    >
                        ????????????
                    </Button>
                </div>
                <div className="ag-theme-material"
                    align='center'
                    skipHeaderOnAutoSize="true"
                    enableColResize="true"
                    enableSorting="true"
                    enableFilter="true"
                    enableRangeSelection="true"        
                    rowStyle={{ "text-align": "center" }}
                    cellStyle={{textAlign: "center"}}
                    style={ { height: 250, width: "100%", float:"center"} }
                >
                    <AgGridReact
                        columnDefs={columnDefsEstimate}
                        defaultColDef= {{
                            resizable: true,
                            editable : true
                        }}
                        rowSelection="single"
                        onGridReady={onGridReadyEstimate}
                        rowData={estimate.data ? estimate.data.gridRowJson : null}
                        style={{
                            height: "400%",
                            width: "100%"
                        }}
                        onCellClicked={onCellClicked}
                        onGridSizeChanged={event => {
                            event.api.sizeColumnsToFit();
                          }}
                    />
                </div>

                {/* ???????????? ????????? */}
                <div align='right'>
                    <Button 
                    onClick={handleAddEstimateDetailRow}
                    variant="contained"
                    color="secondary">
                        ??????????????????
                    </Button>
                    <Button 
                    onClick={handleBatchEstimateDetailRow}
                    variant="contained"
                    color="secondary">
                        ????????????
                    </Button>
                   
                   
                </div>
                <div className="ag-theme-material"
                    align='center'
                    skipHeaderOnAutoSize="true"
                    enableColResize="true"
                    enableSorting="true"
                    enableFilter="true"
                    enableRangeSelection="true"        
                    rowStyle={{ "text-align": "center" }}
                    cellStyle={{textAlign: "center"}}
                    style={ { height: 250, width: "100%", float:"center"} }
                >
                    <AgGridReact
                        columnDefs={columnDefsEstimateDetail}
                        defaultColDef= {{
                            resizable: true,
                            editable : true
                        }}
                        rowSelection="single"
                        onGridReady={onGridReadyEstimateDetail}
                        rowData={estimateDetail.data ? estimateDetail.data.gridRowJson : null}
                        frameworkComponents = {frameworkComponents}
                        onCellClicked = {handleOpenDialog}
                        style={{
                            height: "400%",
                            width: "100%"
                        }}
                        onGridSizeChanged={event => {
                            event.api.sizeColumnsToFit();
                          }}
                       
                    />

                    <MyDialog open={openItemDialog} close={handleCloseItemDialog}>
                        <ItemDialog close={handleCloseItemDialog} onCellClicked={handleItemSelected}/>
                    </MyDialog>

                    <MyDialog open={openAmountDialog} close={handleCloseAmountDialog}>
                        <AmountDialog close={handleCloseAmountDialog}
                        handleSearchItemCode={handleSearchItemCode}
                        itemCost={itemCost.data ? itemCost.data.gridRowJson:null}
                        gridApiEstimateDetail={gridApiEstimateDetail}
                        />
                    </MyDialog>
                </div>
            </div>
        </>
    );
}

const BtnRemove = (handleRemove) => {

    
    return (
        <Button
        variant="contained"
        color="secondary">Remove</Button>
    )
}

export default EstimateInfo;