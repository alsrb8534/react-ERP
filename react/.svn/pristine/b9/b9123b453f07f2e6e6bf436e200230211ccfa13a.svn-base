import React from "react";
import { useSelector } from "react-redux";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "@ag-grid-community/core/dist/styles/ag-theme-alpine-dark.css";
import { useThemeSwitcher } from "mui-theme-switcher";

const BudgetStatusFormDetailGrid = () => {
  const data = useSelector(({ AccReducer }) => AccReducer.IncomeList, []);
  const { dark } = useThemeSwitcher();

  const BudgetStatusFormDetailGrid = [
    {
      headerName: "계정과목 코드",
      field: "accountInnerCode",
      sort: "asc",
      width: 150,
    },
    { headerName: "계정과목", field: "accountName", width: 200 },
    {
      headerName: "누계예산대비실적",
      children: [
        { headerName: "실적", field: "annualBudgetRecord", width: 120 },
        { headerName: "예산", field: "annualBudget", width: 120 },
        { headerName: "잔여예산", field: "remainingBudget", width: 120 },
        { headerName: "집행율(%)", field: "budgetExecRatio", width: 120 },
      ],
    },
    {
      headerName: "당월예산대비실적",
      children: [
        { headerName: "실적", field: "monthBudgetRecord", width: 120 },
        { headerName: "예산", field: "monthBudget", width: 120 },
        { headerName: "잔여예산", field: "remainingMonthBudget", width: 120 },
        { headerName: "집행율(%)", field: "monthBudgetExecRatio", width: 120 },
      ],
    },
  ];

  return (
    <>
      <div
        className={dark ? "ag-theme-alpine-dark" : "ag-theme-material"}
        skipHeaderOnAutoSize="true"
        enableColResize="true"
        enableSorting="true"
        enableFilter="true"
        enableRangeSelection="true"
        rowStyle={{ "text-align": "center" }}
        style={{
          height: "40vh",
          width: "100%",
          float: "center",
        }}
        cellStyle={{ textAlign: "center" }}
      >
        <AgGridReact
          columnDefs={BudgetStatusFormDetailGrid}
          rowData={data}
          rowSelection="single"
          getRowStyle={function(param) {
            //가운데
            if (param.node.rowPinned) {
              return { "font-weight": "bold", background: "#dddddd" };
            }
            return { "text-align": "center" };
          }}
          onGridReady={event => {
            event.api.sizeColumnsToFit();
          }}
          // onGridReady={onGridReady}
          // onCellClicked={onCellClicked}
        />
      </div>
    </>
  );
};

export default BudgetStatusFormDetailGrid;
