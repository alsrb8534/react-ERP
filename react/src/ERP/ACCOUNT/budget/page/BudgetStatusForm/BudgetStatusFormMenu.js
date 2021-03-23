import React, { useCallback, useEffect, useState } from "react";
import {
  Box,
  IconButton,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useDispatch, useSelector } from "react-redux";
import * as types from "../../reducer/BudgetReducer";
import {
  SEARCH_CODE,
} from "ERP/HR/base/reducer/BaseReducer";
import WorkPlaceCodeDialog from "common/page/login/WorkPlaceCodeDialog";
import FiscalYearDialog from "ERP/ACCOUNT/budget/page/BudgetAppForm/FiscalYearDialog";

const BudgetStatusFormMenu = props => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [workPlaceCodeDialog, setWorkPlaceCodeDialog] = useState(false);
  const [fiscalYearDialog, setFiscalYearDialog] = useState(false);
  const [workplacecode, setWorkplacecode] = useState("");
  const [workplaceName, setWorkplaceName] = useState("");
  const [fiscalYear, setFiscalYear] = useState("");
  const [accountPeriodNo, setAccountPeriodNo] = useState("");
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

  const workPlaceCodeDialogClose = value => {
    setWorkPlaceCodeDialog(false);
    if (value.data === undefined) return;
    setWorkplacecode(value.data[0].workplaceCode);
    setWorkplaceName(value.data[0].workplaceName);
    props.setWorkplaceCode(value.data[0].workplaceCode);
    props.setWorkplaceData(value.data[0]);
  };

  const fiscalYearDialogClose = value => {
    console.log("value", value);
    setFiscalYearDialog(false);
    if (value.data.length === 0) return;
    setFiscalYear(value.data[0].fiscalYear);
    setAccountPeriodNo(value.data[0].accountPeriodNo);
    props.setFiscalYear(value.data[0].fiscalYear);
    props.setAccountPeriodNo(value.data[0].accountPeriodNo);
  };

  useEffect(() => {
    dispatch({
      type: types.SEARCH_DIVISION_CODE_REQUEST,
      workplaceCode: workplacecode,
    });
  }, [workplacecode]);

  const divisionOnChange = e => {
    setDeptCode(e.target.value);
    props.setDeptCode(e.target.value);
    dispatch({
      type: types.SELECT_BUDGET_STATUS_START,
      payload: {
        budgetData: {
          deptCode: deptCode,
          workplaceCode: workplacecode,
          accountPeriodNo: accountPeriodNo,
        },
      },
    });
  };

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
      <div Align="center">
        <fieldset>
          <Typography variant="h5">[ 검색조건 ]</Typography>
          <div className={classes.margin}>
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
          </div>
        </fieldset>
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

export default BudgetStatusFormMenu;
