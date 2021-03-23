import React from "react";
import { useSelector } from "react-redux";
import { AgGridReact } from "ag-grid-react";
import { useThemeSwitcher } from "mui-theme-switcher";

const BudgetComparisonStatusGrid = () => {
  const data = useSelector(
    ({ AccReducer }) => AccReducer.budgetComparisonStatusList,
    [],
  );

  const BudgetStatusFormGrid = [
    {
      headerName: "구분",
      field: "sortation",
      valueFormatter: "isNaN(value)?value:'2020/'+value",
    },
    {
      headerName: "신청예산",
      field: "applicationBudget",
      valueFormatter:
        ' Math.floor(value).toString().replace(/(\\d)(?=(\\d{3})+(?!\\d))/g, "$1,")+" 원"',
    },
    {
      headerName: "편성예산",
      field: "compilationBudget",
      valueFormatter:
        ' Math.floor(value).toString().replace(/(\\d)(?=(\\d{3})+(?!\\d))/g, "$1,")+" 원"',
    },
    {
      headerName: "실행예산",
      field: "executionBudget",
      valueFormatter:
        ' Math.floor(value).toString().replace(/(\\d)(?=(\\d{3})+(?!\\d))/g, "$1,")+" 원"',
    },
    {
      headerName: "집행실적",
      field: "executionPerformance",
      valueFormatter:
        ' Math.floor(value).toString().replace(/(\\d)(?=(\\d{3})+(?!\\d))/g, "$1,")+" 원"',
    },
    {
      headerName: "예실대비",
      field: "exampleCompare",
      valueFormatter:
        ' Math.floor(value).toString().replace(/(\\d)(?=(\\d{3})+(?!\\d))/g, "$1,")+" 원"',
    },
  ];

  const onGridSizeChanged = params => {
    var gridWidth = document.getElementById("grid-wrapperr").offsetWidth;
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
    <div id="grid-wrapperr" style={{ width: "100%", height: "100%" }}>
      <div
        className={dark ? "ag-theme-alpine-dark" : "ag-theme-material"}
        skipHeaderOnAutoSize="true"
        enableColResize="true"
        enableSorting="true"
        enableFilter="true"
        enableRangeSelection="true"
        rowStyle={{ "text-align": "center" }}
        style={{
          //height: "40vh",
          width: "100%",
          float: "center",
        }}
        cellStyle={{ textAlign: "center" }}
      >
        <AgGridReact
          domLayout={"autoHeight"}
          columnDefs={BudgetStatusFormGrid}
          rowData={data}
          rowSelection="single"
          getRowStyle={function(param) {
            //가운데
            if (param.node.rowPinned) {
              return { "font-weight": "bold", background: "#dddddd" };
            }
            return { "text-align": "center" };
          }}
          onFirstDataRendered={params => params.api.sizeColumnsToFit()}
          onGridReady={event => {
            event.api.sizeColumnsToFit();
          }}
          onGridSizeChanged={onGridSizeChanged}
          // onCellClicked={onCellClicked}
        />
      </div>
    </div>
  );
};

export default BudgetComparisonStatusGrid;
