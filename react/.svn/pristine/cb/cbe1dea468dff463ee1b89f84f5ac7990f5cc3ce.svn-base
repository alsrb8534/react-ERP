import React from "react";
import { useSelector } from "react-redux";
import { AgGridReact } from "ag-grid-react";
import { useThemeSwitcher } from "mui-theme-switcher";

const BudgetStatusFormGrid = () => {
  const data = useSelector(({ AccReducer }) => AccReducer.budgetStatusList, []);
  const { dark } = useThemeSwitcher();

  const BudgetStatusFormGrid = [
    {
      headerName: "계정과목 코드",
      field: "accountInnerCode",
      sort: "asc",
      width: 150,
    },
    {
      headerName: "계정과목",
      field: "accountName",
      width: 200,
      cellStyle: {
        //borderLeft: "0.1mm ridge #c2c2c2",
        borderRight: "0.1mm ridge #c2c2c2",
      },
    },
    {
      headerName: "누계예산대비실적",
      children: [
        {
          headerName: "실적",
          field: "annualBudgetRecord",
          width: 120,
          valueFormatter:
            ' Math.floor(value).toString().replace(/(\\d)(?=(\\d{3})+(?!\\d))/g, "$1,")+" 원"',
        },
        {
          headerName: "예산",
          field: "annualBudget",
          width: 120,
          valueFormatter:
            ' Math.floor(value).toString().replace(/(\\d)(?=(\\d{3})+(?!\\d))/g, "$1,")+" 원"',
        },
        {
          headerName: "잔여예산",
          field: "remainingBudget",
          width: 120,
          valueFormatter:
            ' Math.floor(value).toString().replace(/(\\d)(?=(\\d{3})+(?!\\d))/g, "$1,")+" 원"',
        },
        {
          headerName: "집행율(%)",
          field: "budgetExecRatio",
          width: 120,
          cellStyle: {
            //borderLeft: "0.1mm ridge #c2c2c2",
            borderRight: "0.1mm ridge #c2c2c2",
          },
        },
      ],
    },
    {
      headerName: "당월예산대비실적",
      children: [
        {
          headerName: "실적",
          field: "monthBudgetRecord",
          width: 120,
          valueFormatter:
            ' Math.floor(value).toString().replace(/(\\d)(?=(\\d{3})+(?!\\d))/g, "$1,")+" 원"',
        },
        {
          headerName: "예산",
          field: "monthBudget",
          width: 120,
          valueFormatter:
            ' Math.floor(value).toString().replace(/(\\d)(?=(\\d{3})+(?!\\d))/g, "$1,")+" 원"',
        },
        {
          headerName: "잔여예산",
          field: "remainingMonthBudget",
          width: 120,
          valueFormatter:
            ' Math.floor(value).toString().replace(/(\\d)(?=(\\d{3})+(?!\\d))/g, "$1,")+" 원"',
        },
        { headerName: "집행율(%)", field: "monthBudgetExecRatio", width: 120 },
      ],
    },
  ];

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

  return (
    <div id="grid-wrapper" style={{ width: "100%" }}>
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
          onGridReady={event => {
            event.api.sizeColumnsToFit();
          }}
          // onGridReady={onGridReady}
          // onCellClicked={onCellClicked}
          onGridSizeChanged={onGridSizeChanged}
        />
      </div>
    </div>
  );
};

export default BudgetStatusFormGrid;
