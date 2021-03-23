import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AgGridReact } from "ag-grid-react";
import * as types from "../../reducer/BudgetReducer";
import "ag-grid-community/dist/styles/ag-grid.css";
import "@ag-grid-community/core/dist/styles/ag-theme-alpine-dark.css";
import { useThemeSwitcher } from "mui-theme-switcher";
import Swal from "sweetalert2";

const BudgetExcessStatusGrid = props => {
  // let data = useSelector(({ AccReducer }) => AccReducer.budgetStatusList, []);
  // let budgetComparisonStatusList = useSelector(
  //   ({ AccReducer }) => AccReducer.budgetComparisonStatusList,
  //   [],
  // );
  const data = useSelector(
    ({ AccReducer }) => AccReducer.BudgetReducer.budgetExcessStatusList,
    [],
  );
  //const dataSet = data.concat(budgetComparisonStatusList);
  const { dark } = useThemeSwitcher();
  const dispatch = useDispatch();

  const [dataGrid, setDataGrid] = useState([]);

  console.log("data", data);

  useEffect(() => {
    dispatch({
      type: types.SELECT_BUDGET_EXCESS_STATUS_START,
      payload: {
        budgetData: {
          deptCode: props.deptCode,
          workplaceCode: props.workplaceCode,
          accountPeriodNo: props.accountPeriodNo,
        },
      },
    });

    // let dataSet = [];
    // data.map((value, inedx) => {
    //   dispatch({
    //     type: types.SELECT_BUDGET_COMPARISON_STATUS_START,
    //     payload: {
    //       budgetData: {
    //         accountInnerCode: value.accountInnerCode,
    //         accountPeriodNo: props.accountPeriodNo,
    //       },
    //     },
    //   });

    //   dataSet[inedx] = value;
    //   if (
    //     budgetComparisonStatusList === undefined ||
    //     budgetComparisonStatusList[18] === undefined
    //   )
    //     return Swal.fire({
    //       icon: "error",
    //       title: "Oops...",
    //       text: "Something went wrong!",
    //     });
    //   dataSet[inedx].applicationBudget =
    //     budgetComparisonStatusList[18].applicationBudget;
    //   dataSet[inedx].compilationBudget =
    //     budgetComparisonStatusList[18].compilationBudget;
    //   dataSet[inedx].exampleCompare =
    //     budgetComparisonStatusList[18].exampleCompare;
    //   dataSet[inedx].executionBudget =
    //     budgetComparisonStatusList[18].executionBudget;
    //   dataSet[inedx].executionPerformance =
    //     budgetComparisonStatusList[18].executionPerformance;
    // });
    // setDataGrid(dataSet);
  }, [props.deptCode]);

  const BudgetStatusFormGrid = [
    {
      headerName: "코드",
      field: "accountInnerCode",
      sort: "asc",
    },
    {
      headerName: "계정과목",
      field: "accountName",
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
      headerName: "차이",
      field: "exampleCompare",
      valueFormatter:
        ' Math.floor(value).toString().replace(/(\\d)(?=(\\d{3})+(?!\\d))/g, "$1,")+" 원"',
    },
    {
      headerName: "집행율(%)",
      field: "budgetExecRatio",
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

export default BudgetExcessStatusGrid;
