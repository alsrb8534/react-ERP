import React, { useEffect, useState } from "react";
import CurrencyTextField from "@unicef/material-ui-currency-textfield";
import {
  AppBar,
  Button,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import PostAddIcon from "@material-ui/icons/PostAdd";
import { useDispatch, useSelector } from "react-redux";
import * as types from "../../reducer/BudgetReducer";

const BudgetAppFormInput = props => {
  const data = useSelector(({ AccReducer }) => AccReducer.BudgetReducer.budgetList, []);
  const classes = useStyles();
  const dispatch = useDispatch();
  const [m1, setM1] = useState(0);
  const [m2, setM2] = useState(0);
  const [m3, setM3] = useState(0);
  const [m4, setM4] = useState(0);
  const [m5, setM5] = useState(0);
  const [m6, setM6] = useState(0);
  const [m7, setM7] = useState(0);
  const [m8, setM8] = useState(0);
  const [m9, setM9] = useState(0);
  const [m10, setM10] = useState(0);
  const [m11, setM11] = useState(0);
  const [m12, setM12] = useState(0);

  const dataSet = {
    deptCode: props.deptCode,
    workplaceCode: props.workplaceCode,
    accountInnerCode: props.accountInnerCode,
    accountPeriodNo: props.accountPeriodNo,
    budgetingCode: "1",
    m1Budget: m1,
    m2Budget: m2,
    m3Budget: m3,
    m4Budget: m4,
    m5Budget: m5,
    m6Budget: m6,
    m7Budget: m7,
    m8Budget: m8,
    m9Budget: m9,
    m10Budget: m10,
    m11Budget: m11,
    m12Budget: m12,
  };

  useEffect(() => {
    setM1(!!data ? data.m1Budget : 0);
    setM2(!!data ? data.m2Budget : 0);
    setM3(!!data ? data.m3Budget : 0);
    setM4(!!data ? data.m4Budget : 0);
    setM5(!!data ? data.m5Budget : 0);
    setM6(!!data ? data.m6Budget : 0);
    setM7(!!data ? data.m7Budget : 0);
    setM8(!!data ? data.m8Budget : 0);
    setM9(!!data ? data.m9Budget : 0);
    setM10(!!data ? data.m10Budget : 0);
    setM11(!!data ? data.m11Budget : 0);
    setM12(!!data ? data.m12Budget : 0);
  }, [data]);

  const budgetapplication = () => {
    dispatch({
      type: types.INSERT_ORG_BUDGET_START,
      payload: {
        budgetData: dataSet,
      },
    });
  };

  return (
    <>
      <AppBar color="primary" position="static">
        <Toolbar>
          <Typography variant="h5">????????????</Typography>
          <Typography variant="h5" className={classes.title}></Typography>
          <Button
            className={classes.margin}
            variant="contained"
            color="secondary"
            onClick={budgetapplication}
            startIcon={<PostAddIcon />}
          >
            ????????????
          </Button>
        </Toolbar>
      </AppBar>
      <form className={classes.root} noValidate autoComplete="off">
        <CurrencyTextField
          disabled={props.textField}
          label="1??? ??????"
          variant="outlined"
          value={m1}
          decimalPlaces="0"
          currencySymbol="???"
          minimumValue="0"
          outputFormat="number"
          digitGroupSeparator=","
          placeholder="1??? ?????? ??????"
          onChange={(event, value) => setM1(parseInt(value))}
        />
        <CurrencyTextField
          disabled={props.textField}
          label="2??? ??????"
          variant="outlined"
          value={m2}
          decimalPlaces="0"
          currencySymbol="???"
          minimumValue="0"
          outputFormat="number"
          digitGroupSeparator=","
          placeholder="2??? ?????? ??????"
          onChange={(event, value) => setM2(parseInt(value))}
        />
        <CurrencyTextField
          disabled={props.textField}
          label="3??? ??????"
          variant="outlined"
          //margin="dense"
          value={m3}
          decimalPlaces="0"
          currencySymbol="???"
          minimumValue="0"
          outputFormat="number"
          digitGroupSeparator=","
          placeholder="3??? ?????? ??????"
          onChange={(event, value) => setM3(parseInt(value))}
        />
        <CurrencyTextField
          label="1?????? ??????"
          variant="filled"
          value={m1 + m2 + m3}
          decimalPlaces="0"
          currencySymbol="???"
          minimumValue="0"
          outputFormat="number"
          digitGroupSeparator=","
          placeholder="1?????? ??????"
          disabled
          //margin="dense"
        />
      </form>
      <form className={classes.root} noValidate autoComplete="off">
        <CurrencyTextField
          disabled={props.textField}
          label="4??? ??????"
          variant="outlined"
          value={m4}
          decimalPlaces="0"
          currencySymbol="???"
          minimumValue="0"
          outputFormat="number"
          digitGroupSeparator=","
          placeholder="4??? ?????? ??????"
          onChange={(event, value) => setM4(parseInt(value))}
        />
        <CurrencyTextField
          disabled={props.textField}
          label="5??? ??????"
          variant="outlined"
          value={m5}
          decimalPlaces="0"
          currencySymbol="???"
          minimumValue="0"
          outputFormat="number"
          digitGroupSeparator=","
          placeholder="5??? ?????? ??????"
          onChange={(event, value) => setM5(parseInt(value))}
        />
        <CurrencyTextField
          disabled={props.textField}
          label="6??? ??????"
          variant="outlined"
          value={m6}
          decimalPlaces="0"
          currencySymbol="???"
          minimumValue="0"
          outputFormat="number"
          digitGroupSeparator=","
          placeholder="6??? ?????? ??????"
          onChange={(event, value) => setM6(parseInt(value))}
        />
        <CurrencyTextField
          label="2?????? ??????"
          variant="filled"
          value={m4 + m5 + m6}
          decimalPlaces="0"
          currencySymbol="???"
          minimumValue="0"
          outputFormat="number"
          digitGroupSeparator=","
          placeholder="2?????? ??????"
          disabled
        />
      </form>
      <form className={classes.root} noValidate autoComplete="off">
        <CurrencyTextField
          disabled={props.textField}
          label="7??? ??????"
          variant="outlined"
          value={m7}
          decimalPlaces="0"
          currencySymbol="???"
          minimumValue="0"
          outputFormat="number"
          digitGroupSeparator=","
          placeholder="7??? ?????? ??????"
          onChange={(event, value) => setM7(parseInt(value))}
        />
        <CurrencyTextField
          disabled={props.textField}
          label="8??? ??????"
          variant="outlined"
          value={m8}
          decimalPlaces="0"
          currencySymbol="???"
          minimumValue="0"
          outputFormat="number"
          digitGroupSeparator=","
          placeholder="8??? ?????? ??????"
          onChange={(event, value) => setM8(parseInt(value))}
        />
        <CurrencyTextField
          disabled={props.textField}
          label="9??? ??????"
          variant="outlined"
          value={m9}
          decimalPlaces="0"
          currencySymbol="???"
          minimumValue="0"
          outputFormat="number"
          digitGroupSeparator=","
          placeholder="9??? ?????? ??????"
          onChange={(event, value) => setM9(parseInt(value))}
        />
        <CurrencyTextField
          label="3?????? ??????"
          variant="filled"
          value={m7 + m8 + m9}
          decimalPlaces="0"
          currencySymbol="???"
          minimumValue="0"
          outputFormat="number"
          digitGroupSeparator=","
          placeholder="3?????? ??????"
          disabled
        />
      </form>
      <form className={classes.root} noValidate autoComplete="off">
        <CurrencyTextField
          disabled={props.textField}
          label="10??? ??????"
          variant="outlined"
          value={m10}
          decimalPlaces="0"
          currencySymbol="???"
          minimumValue="0"
          outputFormat="number"
          digitGroupSeparator=","
          placeholder="10??? ?????? ??????"
          onChange={(event, value) => setM10(parseInt(value))}
        />
        <CurrencyTextField
          disabled={props.textField}
          label="11??? ??????"
          variant="outlined"
          value={m11}
          decimalPlaces="0"
          currencySymbol="???"
          minimumValue="0"
          outputFormat="number"
          digitGroupSeparator=","
          placeholder="11??? ?????? ??????"
          onChange={(event, value) => setM11(parseInt(value))}
        />
        <CurrencyTextField
          disabled={props.textField}
          label="12??? ??????"
          variant="outlined"
          value={m12}
          decimalPlaces="0"
          currencySymbol="???"
          minimumValue="0"
          outputFormat="number"
          digitGroupSeparator=","
          placeholder="12??? ?????? ??????"
          onChange={(event, value) => setM12(parseInt(value))}
        />
        <CurrencyTextField
          label="4?????? ??????"
          variant="filled"
          value={m10 + m11 + m12}
          decimalPlaces="0"
          currencySymbol="???"
          minimumValue="0"
          outputFormat="number"
          digitGroupSeparator=","
          placeholder="4?????? ??????"
          disabled
        />
      </form>
    </>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    height: "11vh",
    margin: theme.spacing(1),
    //width: "25ch",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  title: {
    flexGrow: 1,
  },
}));

export default BudgetAppFormInput;
