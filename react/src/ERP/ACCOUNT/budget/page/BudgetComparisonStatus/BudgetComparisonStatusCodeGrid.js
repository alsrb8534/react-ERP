import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AgGridReact } from "ag-grid-react";
import * as types from "../../reducer/BudgetReducer";
import { useThemeSwitcher } from "mui-theme-switcher";
import { Spinner } from "react-bootstrap";

const BudgetComparisonStatusCodeGrid = props => {
  const data = useSelector(
    ({ AccReducer }) => AccReducer.BudgetReducer.budgetComparisonList,
    [],
  );
  const { isLoading } = useSelector(state => state.AccReducer.BudgetReducer);
  const dispatch = useDispatch();
  const [budgetDetailGrid, setBudgetDetailGrid] = useState([]);

  const BudgetAppFormDetailGrid = [
    { headerName: "계정과목 코드", field: "accountInnerCode" },
    { headerName: "계정과목", field: "accountName" },
  ];

  const onCellClicked = () => {
    const selectedRows = budgetDetailGrid.getSelectedRows();
    dispatch({
      type: types.SELECT_BUDGET_COMPARISON_STATUS_START,
      payload: {
        budgetData: {
          accountInnerCode: selectedRows[0].accountInnerCode,
          accountPeriodNo: props.accountPeriodNo,
        },
      },
    });
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

  const { dark } = useThemeSwitcher();

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
          //height: "45vh",
          width: "100%",
          float: "center",
        }}
        cellStyle={{ textAlign: "center" }}
      >
        {!isLoading ? (
          <AgGridReact
            domLayout={"autoHeight"}
            columnDefs={BudgetAppFormDetailGrid}
            rowData={data}
            rowSelection="single"
            // isFullWidthCell={function(rowNode) {
            //   return rowNode.data.fullWidth;
            // }}
            getRowStyle={function(param) {
              //가운데
              if (param.node.rowPinned) {
                return { "font-weight": "bold", background: "#dddddd" };
              }
              return { "text-align": "center" };
            }}
            onGridReady={event => {
              event.api.sizeColumnsToFit();
              setBudgetDetailGrid(event.api);
            }}
            // onGridReady={onGridReady}
            onCellClicked={onCellClicked}
            // onGridSizeChanged={event => {
            //   event.api.sizeColumnsToFit();
            // }}
            onFirstDataRendered={params => {
              params.api.sizeColumnsToFit();
            }}
            onGridSizeChanged={onGridSizeChanged}
          />
        ) : (
          <div class="d-flex justify-content-center align-self-center">
            <Spinner
              style={{
                marginTop: "100px",
                // margin: "auto",
                // display: "flex",
              }}
              variant="primary"
              animation="border"
              role="status"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default BudgetComparisonStatusCodeGrid;
