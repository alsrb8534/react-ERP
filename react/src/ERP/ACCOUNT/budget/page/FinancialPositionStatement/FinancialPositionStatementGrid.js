import React, { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { useSelector } from "react-redux";

const FinancialPositionStatementGrid = () => {
  const { data } = useSelector(state => state.AccReducer);
  const { error } = useSelector(state => state.AccReducer);
  //const { isLoading } = useSelector(state => state.AccReducer);

  useEffect(() => {
    console.log(error);
    //데이터를 그리드에 세팅하는 함수
    // setGrid(datas);
  }, [error]);

  // 칼럼정의
  const FinancialStatementscolumnDefs = [
    { headerName: "계층", field: "lev", width: 150 },
    { headerName: "분류", field: "category", width: 150 },
    { headerName: "계정과목", field: "accountName", width: 150 },
    {
      headerName: "당기",
      headerClass: "participant-group",
      marryChildren: true,
      children: [
        {
          headerName: "세부금액",
          field: "balanceDetail",
          colId: "당기",
          width: 150,
          valueFormatter:
            ' Math.floor(value).toString().replace(/(\\d)(?=(\\d{3})+(?!\\d))/g, "$1,")+" 원"',
        },
        {
          headerName: "합계금액",
          field: "balanceSummary",
          colId: "당기",
          width: 150,
          valueFormatter:
            ' Math.floor(value).toString().replace(/(\\d)(?=(\\d{3})+(?!\\d))/g, "$1,")+" 원"',
        },
      ],
    },
    {
      headerName: "전기",
      headerClass: "participant-group",
      marryChildren: true,
      children: [
        {
          headerName: "세부금액",
          field: "preBalanceDetail",
          colId: "전기",
          width: 150,
          valueFormatter:
            ' Math.floor(value).toString().replace(/(\\d)(?=(\\d{3})+(?!\\d))/g, "$1,")+" 원"',
        },
        {
          headerName: "합계금액",
          field: "preBalanceSummary",
          colId: "전기",
          width: 150,
          valueFormatter:
            ' Math.floor(value).toString().replace(/(\\d)(?=(\\d{3})+(?!\\d))/g, "$1,")+" 원"',
        },
      ],
    },
  ];

  return (
    <>
      <div
        className={"ag-theme-material"}
        rowStyle={{ "text-align": "center" }}
        cellStyle={{ textAlign: "center" }}
        style={{
          //height: "60vh",
          width: "100%",
          paddingTop: "25px",
          float: "center",
        }}
      >
        <AgGridReact
          domLayout={"autoHeight"}
          columnDefs={FinancialStatementscolumnDefs}
          rowData={data}
          rowSelection="single"
          onGridReady={e => {
            e.api.sizeColumnsToFit();
          }}
          getRowStyle={function(param) {
            return { "text-align": "center" };
          }}
          // onGridReady={onGridReady}
          // onCellClicked={onCellClicked}
        />
      </div>
    </>
  );
};

export default FinancialPositionStatementGrid;
