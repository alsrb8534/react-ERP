//****************************************************2020-11-24 64기 정준혁 *********************************
import React,{useState,useEffect, useCallback} from 'react';
import MyGrid from 'ERP/HR/util/MyGrid';
import HrAppBar from 'ERP/HR/util/HrAppBar';
import axios from "axios";
import columnDefinition from './columnDefinition'
const BaseExtSalContainer = () => {

  const [rowData,setRowData] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:8282/hr/salary/baseExtSalManage.do",)
            .then(response => {
                setRowData(response.data.baseExtSalList);
            })
            .catch(e => {
                alert(e);
            });
    }, []);
    

  const onCellEditingStopped = useCallback((e)=>{
    e.data.status = "update"
    axios.post(
        "http://localhost:8282/hr/salary/baseExtSalManage.do",
        {
            baseExtSalList : [e.data]
        },
        {
            headers: {
                "Content-Type": "application/json"
            }
        },
    ).catch(e => {
        alert(e);
    });
  },[]);


 
    return (
        <>
            <HrAppBar title='초과수당관리'/>
            <MyGrid 
                columnDefinition={columnDefinition}
                rowData={rowData}
                onCellEditingStopped={onCellEditingStopped}
                onGridReady={event => {
                    event.api.sizeColumnsToFit();
                }}
            /> 
        </>
    )
}

export default BaseExtSalContainer;