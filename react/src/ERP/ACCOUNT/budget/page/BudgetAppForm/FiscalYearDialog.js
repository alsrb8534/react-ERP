import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import { DialogTitle, DialogActions, Dialog, Button } from "@material-ui/core";
import { useThemeSwitcher } from "mui-theme-switcher";

const FiscalYearDialog = ({ close, open, value }) => {
  const [fiscalYaerGridApi, setFiscalYaerGridApi] = useState();

  //========================== 그리드내용 ==========================
  const fiscalYaerColumnDefs = [
    {
      headerName: "회계기수",
      hide: "true",
      field: "accountPeriodNo",
      //sort: "asc",
    },
    { headerName: "회계연도", field: "fiscalYear", sort: "desc" },
    { headerName: "회계시작일", field: "periodStartDate" },
    { headerName: "회계종료일", field: "periodEndDate" },
  ];

  const handleClose = () => {
    close({
      data: fiscalYaerGridApi.getSelectedRows(),
    });
  };

  const { dark } = useThemeSwitcher();

  return (
    <Dialog
      aria-labelledby="simple-dialog-title"
      open={open}
      fullWidth={true}
      maxWidth={"xs"}
      //fullScreen={fullScreen}
    >
      <DialogTitle id="simple-dialog-title">회계연도</DialogTitle>
      <div
        className={dark ? "ag-theme-alpine-dark" : "ag-theme-material"}
        style={{
          height: "300px",
          width: "100%",
          //paddingTop: "20px",
          //paddingLeft: "150px",
        }}
      >
        <AgGridReact
          columnDefs={fiscalYaerColumnDefs}
          rowData={value} // 그리드에 data 뿌림.
          rowSelection="single" // 하나만 선택 가능.
          onGridReady={params => {
            setFiscalYaerGridApi(params.api);
            params.api.sizeColumnsToFit();
          }}
          getRowStyle={function(param) {
            return { "text-align": "center" };
          }}
          onCellClicked={handleClose}
        />
      </div>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default FiscalYearDialog;
