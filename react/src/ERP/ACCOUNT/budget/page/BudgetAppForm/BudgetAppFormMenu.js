import React, { useCallback, useEffect, useState } from "react";
import { Box, IconButton, makeStyles, TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useDispatch, useSelector } from "react-redux";
import * as types from "../../reducer/BudgetReducer";
import {
  SEARCH_CODE,
  departmentManageMemberRequest
} from "ERP/HR/base/reducer/BaseReducer";
import WorkPlaceCodeDialog from "common/page/login/WorkPlaceCodeDialog";
import FiscalYearDialog from "./FiscalYearDialog";
import DepartmentDialog from "ERP/HR/base/page/DepartmentManage/DepartmentDialog";

const BudgetAppFormMenu = props => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [workPlaceCodeDialog, setWorkPlaceCodeDialog] = useState(false);
  const [fiscalYearDialog, setFiscalYearDialog] = useState(false);
  const [departDialog, setDepartmentDialog] = useState(false);
  const [workplacecode, setWorkplacecode] = useState("");
  const [workplaceName, setworkplaceName] = useState("");
  const [fiscalYear, setFiscalYear] = useState("");
  const [deptCode, setDeptCode] = useState("");
  const workPlace = useSelector(state => state.hr.base.workPlace);
  const departmentList = useSelector(state => state.hr.emp.departmentList);
  const accountPeriodList = useSelector(
    ({ AccReducer }) => AccReducer.BudgetReducer.accountPeriodList,
  );

  const workPlaceDialogOpen = useCallback(() => {
    dispatch({
      type: SEARCH_CODE,
      payload: {
        type: "workplaceCode",
        companyCode: "COM-01",
      },
    });
    setWorkPlaceCodeDialog(true);
  }, [dispatch]);

  const fiscalYearDialogOpen = useCallback(() => {
    dispatch({
      type: types.SELECT_ACCOUNT_PERIOD_START,
    });
    setFiscalYearDialog(true);
  }, [dispatch]);

  const departmentDialogOpen = useCallback(() => {
    setDepartmentDialog(true);
  });


  const workPlaceCodeDialogClose = value => {
    setWorkPlaceCodeDialog(false);
    if (value.data === undefined) return;
    setWorkplacecode(value.data[0].workplaceCode);
    setworkplaceName(value.data[0].workplaceName);
    props.setWorkplaceCode(value.data[0].workplaceCode);
    props.setWorkplaceData(value.data[0]);
  };

  const fiscalYearDialogClose = value => {
    setFiscalYearDialog(false);
    if (value.data.length === 0) return;
    setFiscalYear(value.data[0].fiscalYear);
    props.setAccountPeriodNo(value.data[0].accountPeriodNo);
    props.setFiscalYear(value.data[0].fiscalYear);
  };

  const departmentDialogClose = () => {
    setDepartmentDialog(false);
  };

  useEffect(() => {
    dispatch({
      type: types.SEARCH_DIVISION_CODE_REQUEST,
      workplaceCode: workplacecode,
    });
  }, [workplacecode]);

  const divisionOnChange = useCallback(
    e => {
      props.setDeptCode(e.target.value);
      dispatch({
        type: types.SELECT_BUDGET_LIST_START,
      });
    },
    [dispatch],
  );

  return (
    <>
      <WorkPlaceCodeDialog
        open={workPlaceCodeDialog}
        close={workPlaceCodeDialogClose}
        value={workPlace}
      />
      <FiscalYearDialog
        open={fiscalYearDialog}
        close={fiscalYearDialogClose}
        value={accountPeriodList}
      />
      <DepartmentDialog
        open={departDialog}
        close={departmentDialogClose}
        departmentManageMemberRequest={departmentManageMemberRequest}
      />
      <div style={{ width: "100%", height: "100%" }}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          css={{ height: 100 }}
          m={1}
          p={1}
          bgcolor="background.paper"
        >
          <Box p={1}>
            <TextField
              className={classes.textField}
              required
              id="accountCode"
              margin="normal"
              label="회계연도"
              variant="outlined"
              //placeholder="계정코드"
              disabled={true}
              value={fiscalYear}
              //size="small"
              onClick={fiscalYearDialogOpen}
              InputProps={{
                endAdornment: (
                  <IconButton
                    size="small"
                    edge="end"
                    className={classes.iconButton}
                  >
                    <SearchIcon
                      variant="contained"
                      //size="small"
                      color="primary"
                      onClick={fiscalYearDialogOpen}
                      value="accountCode"
                    />
                  </IconButton>
                ),
              }}
            />
          </Box>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          m={1}
          p={1}
          alignItems="center"
          css={{ height: 100 }}
          bgcolor="background.paper"
        >
          <Box p={1}>
            <TextField
              className={classes.textField}
              required
              id="accountCode"
              label="사업장"
              variant="outlined"
              margin="normal"
              disabled={true}
              value={workplaceName}
              //size="small"
              onClick={workPlaceDialogOpen}
              InputProps={{
                endAdornment: (
                  <IconButton
                    size="small"
                    edge="end"
                    className={classes.iconButton}
                  >
                    <SearchIcon
                      Button
                      variant="contained"
                      size="small"
                      color="primary"
                      onClick={workPlaceDialogOpen}
                      value="accountCode"
                    />
                  </IconButton>
                ),
              }}
            />
          </Box>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          m={1}
          p={1}
          alignItems="center"
          css={{ height: 100 }}
          bgcolor="background.paper"
        >
          <Box p={1}>
            <TextField
              className={classes.textField}
              disabled={workPlaceCodeDialog}
              required
              id="outlined-select-currency-native"
              select
              label="부서명"
              variant="outlined"
              name="division"
              onChange={divisionOnChange}
              margin="normal"
              //size="small"
            >
              {departmentList.map((value, inedx) => {
                return (
                  <option value={value.deptCode} key={inedx}>
                    {value.deptName}
                  </option>
                );
              })}
            </TextField>
          </Box>
        </Box>
      </div>
    </>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
      display: "flex",
    },
  },
  textField: {
    margin: theme.spacing(1),
    width: "25ch",
  },
  iconButton: {
    padding: 1,
  },
}));

export default BudgetAppFormMenu;
