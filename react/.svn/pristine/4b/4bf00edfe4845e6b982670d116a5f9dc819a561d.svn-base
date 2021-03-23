import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AgGridReact } from "ag-grid-react";
import * as types from "../../reducer/BudgetReducer";
import { useThemeSwitcher } from "mui-theme-switcher";

const BudgetCompFormDetailGrid = props => {
  const data = useSelector(({ AccReducer }) => AccReducer.BudgetReducer.detailBudgetList, []);
  const dispatch = useDispatch();
  const [budgetDetailGrid, setBudgetDetailGrid] = useState([]);

  const BudgetCompFormDetailGrid = [
    { headerName: "계정과목 코드", field: "accountInnerCode" },
    { headerName: "계정과목", field: "accountName" },
  ];

  const onCellClicked = () => {
    const selectedRows = budgetDetailGrid.getSelectedRows();
    props.setTextField(false);
    props.setAccountInnerCode(selectedRows[0].accountInnerCode);
    props.setAccountCode(selectedRows[0]);
    // selectFindBudgetStart(selectedRows, props);
    dispatch({
      type: types.SELECT_FIND_BUDGET_START,
      payload: {
        budgetData: {
          deptCode: props.deptCode,
          workplaceCode: props.workplaceCode,
          accountInnerCode: selectedRows[0].accountInnerCode,
          accountPeriodNo: props.accountPeriodNo,
          budgetingCode: "1",
        },
      },
    });
    //예산편성
    dispatch({
      type: types.SELECT_FIND_BUDGET_APPL_START,
      payload: {
        budgetData: {
          deptCode: props.deptCode,
          workplaceCode: props.workplaceCode,
          accountInnerCode: selectedRows[0].accountInnerCode,
          accountPeriodNo: props.accountPeriodNo,
          budgetingCode: "2",
        },
      },
    });
    dispatch({
      type: types.SELECT_FIND_BUDGET_ADJUSTMENT_START,
      payload: {
        budgetData: {
          deptCode: props.deptCode,
          workplaceCode: props.workplaceCode,
          accountInnerCode: selectedRows[0].accountInnerCode,
          accountPeriodNo: props.accountPeriodNo,
          budgetingCode: "3",
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
          height: "45vh",
          width: "100%",
          float: "center",
        }}
        cellStyle={{ textAlign: "center" }}
      >
        <AgGridReact
          //domLayout={"autoHeight"}
          columnDefs={BudgetCompFormDetailGrid}
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
      </div>
    </div>
  );
};

export default BudgetCompFormDetailGrid;
