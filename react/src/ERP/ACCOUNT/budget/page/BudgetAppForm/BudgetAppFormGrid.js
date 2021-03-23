import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "@ag-grid-community/core/dist/styles/ag-theme-alpine-dark.css";
import * as types from "../../reducer/BudgetReducer";
import { useThemeSwitcher } from "mui-theme-switcher";

const BudgetAppFormGrid = props => {
  const data = useSelector(({ AccReducer }) => AccReducer.BudgetReducer.parentBudgetList, []);
  const dispatch = useDispatch();
  const { dark } = useThemeSwitcher();
  const [budgetGrid, setBudgetGrid] = useState([]); //그리드 동적 값

  const selectBudgetDetailListStart = useCallback(
    selectedRows => {
      dispatch({
        type: types.SELECT_BUDGET_DETAIL_LIST_START,
        payload: {
          budgetCode: selectedRows[0].accountInnerCode,
        },
      });
    },
    [dispatch],
  );

  const onCellClicked = () => {
    const selectedRows = budgetGrid.getSelectedRows();
    selectBudgetDetailListStart(selectedRows);
    // dispatch({
    //   type: types.SELECT_BUDGET_DETAIL_LIST_START,
    //   payload: {
    //     budgetCode: selectedRows[0].accountInnerCode,
    //   },
    // });
  };

  const onGridSizeChanged = params => {
    var gridWidth = document.getElementById("grid-wrapper").offsetWidth;
    var columnsToShow = [];
    var columnsToHide = [];
    var totalColsWidth = 0;
    var allColumns = params.columnApi.getAllColumns();
    for (var i = 0; i < allColumns.length; i++) {
      var column = allColumns[i];
      totalColsWidth += column.getMinWidth();
      if (totalColsWidth > gridWidth) {
        columnsToHide.push(column.colId);
      } else {
        columnsToShow.push(column.colId);
      }
    }
    params.columnApi.setColumnsVisible(columnsToShow, true);
    params.columnApi.setColumnsVisible(columnsToHide, false);
    params.api.sizeColumnsToFit();
  };

  const BudgetAppFormGrid = [
    {
      headerName: "계정과목 코드",
      field: "accountInnerCode",
      sort: "asc",
    },
    { headerName: "계정과목", field: "accountName" },
  ];

  return (
    <div id="grid-wrapper" style={{ width: "100%", height: "100%" }}>
      <div
        className={dark ? "ag-theme-alpine-dark" : "ag-theme-material"}
        skipHeaderOnAutoSize="true"
        enableColResize="true"
        enableSorting="true"
        enableFilter="true"
        enableRangeSelection="true"
        rowStyle={{ "text-align": "center" }}
        style={{
          height: "45vh",
          width: "100%",
          float: "center",
        }}
        cellStyle={{ textAlign: "center" }}
      >
        <AgGridReact
          //domLayout={"print"}
          columnDefs={BudgetAppFormGrid}
          rowData={data}
          rowSelection="single"
          getRowStyle={function(param) {
            //가운데
            if (param.node.rowPinned) {
              return { "font-weight": "bold", background: "#dddddd" };
            }
            return { "text-align": "center" };
          }}
          onGridReady={params => {
            setBudgetGrid(params.api);
            params.api.sizeColumnsToFit();
          }}
          onCellClicked={onCellClicked}
          onFirstDataRendered={params => params.api.sizeColumnsToFit()}
          onGridSizeChanged={onGridSizeChanged}
        />
      </div>
    </div>
  );
};

export default BudgetAppFormGrid;
