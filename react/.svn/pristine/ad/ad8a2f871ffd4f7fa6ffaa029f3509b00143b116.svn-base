import React, { useState,useEffect } from "react";
import HrAppBar from 'ERP/HR/util/HrAppBar'
import * as types from "../../reducer/SalaryReducer";
import {useDispatch,useSelector} from 'react-redux';
import Button from '@material-ui/core/Button';
import MyGrid from 'ERP/HR/util/MyGrid'
import Icon from "@material-ui/core/Icon";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import columnDefinition from './columnDefinition'
const BaseDeductionManage = () => {
  
  const [gridEvent, setGridEvent] = useState();
  const dataDispatch = useDispatch(); 
  useEffect(() => {      
      dataDispatch({ type: types.BASE_SALARY_LIST_REQUEST}); 
  }, [dataDispatch]);
  const data = useSelector(({ hr }) => hr.salary.baseSalaryList);


  const updateDispatch = useDispatch(); 



  const createNewRowData = () => {
  let newData = {
      workPlaceCode : "BRC-01",
      deptName: '부서명 입력', 
      positionCode: '입력하지 마세요',
      positionName : '직급명 입력',    
      baseSalary : '0000',
      hobongRatio : '인상율 입력',
      status : 'insert'
  };
  return newData;
  }

  const onAddRow = () =>{
      const newItem = createNewRowData();
      gridEvent.updateRowData({ add: [newItem] });
  }

  const onGridReady = event => {
      event.api.sizeColumnsToFit();
      setGridEvent(event.api);
  }

  const onRemoveSelected = () => {
      var selectedData = gridEvent.getSelectedRows();
      selectedData[0].status = 'delete';
      gridEvent.updateRowData({ remove: selectedData });
      updateDispatch({
          type: types.UPDATE_BASE_SALARY_REQUEST,
          payload: selectedData }); 
  };

  function onCellEditingStopped(row) {  
      if(row.data.status !== 'insert'){
          row.data.status = 'update';
      }else{
          if(
          row.data.deptName === '부서명 입력' ||
          row.data.positionName === '직급명 입력' ||
          row.data.hobongRatio === '인상율 입력'){
              return;
          }
      }
      updateDispatch({
          type: types.UPDATE_BASE_SALARY_REQUEST,
          payload: [row.data] });     
      
  };

  return (
    <>
    <HrAppBar title='급여기준관리'/>
    <Button variant="contained" color="primary" onClick={onAddRow} startIcon={<Icon className="fa fa-plus-circle" />} >
                추가
    </Button>                         
    <Button variant="contained" color="primary" onClick={onRemoveSelected} startIcon={<DeleteOutlinedIcon />}>
                삭제
    </Button> 
    <MyGrid rowData={data} onGridReady={onGridReady} onCellEditingStopped={onCellEditingStopped} columnDefinition={columnDefinition} style={{
            height: "400%",
            width: "100%",
        }}/>
    </> 
  );
};
export default React.memo(BaseDeductionManage);