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
import * as AccountType from "ERP/ACCOUNT/account/reducer/AccountReducer";
import moment from "moment";
import Swal from "sweetalert2";
import "./alert.scss";

const BudgetAdjustmentExecution = props => {
  const data = useSelector(
    ({ AccReducer }) => AccReducer.BudgetReducer.budgetAdjustmentList,
    [],
  );
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
    budgetingCode: "3",
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

  const slipAndJournalSave = () => {
    if (props.accountCode === undefined || props.workplaceData === undefined)
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    const yearMonth = [m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12];
    for (var i = 0; i < yearMonth.length; ++i) {
      const month = moment(props.fiscalYear + "-" + (i + 1) + "-10").format(
        "yyyy-MM-DD",
      );
      const sData = {
        slipNo: "NEW",
        accountPeriodNo: props.accountPeriodNo, //"4", //2020년은 기수일련번호 ->  4
        slipType: "결산",
        reportingDate: month, //작성일자
        reportingEmpCode: sessionStorage.getItem("empCodeInfo_token"), //작성사코드
        expenseReport:
          props.fiscalYear +
          "년 " +
          (i + 1) +
          "월 " +
          props.accountCode.accountName,
        approvalDate: month, //승인날자
        reportingEmpName: sessionStorage.getItem("empNameInfo_token"), //로그인 이름
        slipStatus: "미결",
        deptCode: props.deptCode, //"DPT-01",
        status: "",
        journalList: [],
        journalDeadline: "",
        divsion: "",
      };

      sData.journalList[0] = {
        journalNo: "NEW",
        accountCode: props.accountInnerCode,
        accountName: props.accountCode.accountName,
        balanceDivision: "차변",
        customerCode: props.deptCode,
        customerName: "",
        leftDebtorPrice: yearMonth[i],
        rightCreditsPrice: "0",
      };

      sData.journalList[1] = {
        journalNo: "NEW",
        accountCode: "0103",
        accountName: "보통예금",
        balanceDivision: "대변",
        customerCode: props.deptCode,
        customerName: "",
        leftDebtorPrice: "0",
        rightCreditsPrice: yearMonth[i],
      };
      console.log("sData", sData);

      dispatch({
        type: AccountType.SAVE_JOURNAL_START,
        payload: {
          slipData: sData,
        },
      });
    }
    dispatch({
      type: types.INSERT_ORG_BUDGET_START,
      payload: {
        budgetData: dataSet,
      },
    });
    Swal.fire({
      icon: "success",
      title: "success...",
      text: "Something went success!",
    });
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
    if (props.accountCode === undefined || props.workplaceData === undefined)
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    dispatch({
      type: types.INSERT_ORG_BUDGET_START,
      payload: {
        budgetData: dataSet,
      },
    });
    Swal.fire({
      icon: "success",
      title: "Success...",
      text: "Something went success!",
    });
  };

  return (
    <>
      <AppBar color="primary" position="static">
        <Toolbar>
          <Typography variant="h5">예산조정</Typography>
          <Typography variant="h5" className={classes.title} />
          <Button
            className={classes.margin}
            variant="contained"
            color="secondary"
            onClick={budgetapplication}
            startIcon={<PostAddIcon />}
          >
            예산내용저장
          </Button>
          <Button
            className={classes.margin}
            variant="contained"
            color="secondary"
            onClick={slipAndJournalSave}
            startIcon={<PostAddIcon />}
          >
            예산조정집행
          </Button>
        </Toolbar>
      </AppBar>
      <form className={classes.root} noValidate autoComplete="off">
        <CurrencyTextField
          disabled={props.textField}
          label="1월 금액"
          variant="outlined"
          value={m1}
          decimalPlaces="0"
          currencySymbol="₩"
          minimumValue="0"
          outputFormat="number"
          digitGroupSeparator=","
          placeholder="1월 예산 신청"
          onChange={(event, value) => setM1(parseInt(value))}
        />
        <CurrencyTextField
          disabled={props.textField}
          label="2월 금액"
          variant="outlined"
          value={m2}
          decimalPlaces="0"
          currencySymbol="₩"
          minimumValue="0"
          outputFormat="number"
          digitGroupSeparator=","
          placeholder="2월 예산 신청"
          onChange={(event, value) => setM2(parseInt(value))}
        />
        <CurrencyTextField
          disabled={props.textField}
          label="3월 금액"
          variant="outlined"
          //margin="dense"
          value={m3}
          decimalPlaces="0"
          currencySymbol="₩"
          minimumValue="0"
          outputFormat="number"
          digitGroupSeparator=","
          placeholder="3월 예산 신청"
          onChange={(event, value) => setM3(parseInt(value))}
        />
        <CurrencyTextField
          label="1분기 금액"
          variant="filled"
          value={m1 + m2 + m3}
          decimalPlaces="0"
          currencySymbol="₩"
          minimumValue="0"
          outputFormat="number"
          digitGroupSeparator=","
          placeholder="1분기 금액"
          disabled
          //margin="dense"
        />
      </form>
      <form className={classes.root} noValidate autoComplete="off">
        <CurrencyTextField
          disabled={props.textField}
          label="4월 금액"
          variant="outlined"
          value={m4}
          decimalPlaces="0"
          currencySymbol="₩"
          minimumValue="0"
          outputFormat="number"
          digitGroupSeparator=","
          placeholder="4월 예산 신청"
          onChange={(event, value) => setM4(parseInt(value))}
        />
        <CurrencyTextField
          disabled={props.textField}
          label="5월 금액"
          variant="outlined"
          value={m5}
          decimalPlaces="0"
          currencySymbol="₩"
          minimumValue="0"
          outputFormat="number"
          digitGroupSeparator=","
          placeholder="5월 예산 신청"
          onChange={(event, value) => setM5(parseInt(value))}
        />
        <CurrencyTextField
          disabled={props.textField}
          label="6월 금액"
          variant="outlined"
          value={m6}
          decimalPlaces="0"
          currencySymbol="₩"
          minimumValue="0"
          outputFormat="number"
          digitGroupSeparator=","
          placeholder="6월 예산 신청"
          onChange={(event, value) => setM6(parseInt(value))}
        />
        <CurrencyTextField
          label="2분기 금액"
          variant="filled"
          value={m4 + m5 + m6}
          decimalPlaces="0"
          currencySymbol="₩"
          minimumValue="0"
          outputFormat="number"
          digitGroupSeparator=","
          placeholder="2분기 금액"
          disabled
        />
      </form>
      <form className={classes.root} noValidate autoComplete="off">
        <CurrencyTextField
          disabled={props.textField}
          label="7월 금액"
          variant="outlined"
          value={m7}
          decimalPlaces="0"
          currencySymbol="₩"
          minimumValue="0"
          outputFormat="number"
          digitGroupSeparator=","
          placeholder="7월 예산 신청"
          onChange={(event, value) => setM7(parseInt(value))}
        />
        <CurrencyTextField
          disabled={props.textField}
          label="8월 금액"
          variant="outlined"
          value={m8}
          decimalPlaces="0"
          currencySymbol="₩"
          minimumValue="0"
          outputFormat="number"
          digitGroupSeparator=","
          placeholder="8월 예산 신청"
          onChange={(event, value) => setM8(parseInt(value))}
        />
        <CurrencyTextField
          disabled={props.textField}
          label="9월 금액"
          variant="outlined"
          value={m9}
          decimalPlaces="0"
          currencySymbol="₩"
          minimumValue="0"
          outputFormat="number"
          digitGroupSeparator=","
          placeholder="9월 예산 신청"
          onChange={(event, value) => setM9(parseInt(value))}
        />
        <CurrencyTextField
          label="3분기 금액"
          variant="filled"
          value={m7 + m8 + m9}
          decimalPlaces="0"
          currencySymbol="₩"
          minimumValue="0"
          outputFormat="number"
          digitGroupSeparator=","
          placeholder="3분기 금액"
          disabled
        />
      </form>
      <form className={classes.root} noValidate autoComplete="off">
        <CurrencyTextField
          disabled={props.textField}
          label="10월 금액"
          variant="outlined"
          value={m10}
          decimalPlaces="0"
          currencySymbol="₩"
          minimumValue="0"
          outputFormat="number"
          digitGroupSeparator=","
          placeholder="10월 예산 신청"
          onChange={(event, value) => setM10(parseInt(value))}
        />
        <CurrencyTextField
          disabled={props.textField}
          label="11월 금액"
          variant="outlined"
          value={m11}
          decimalPlaces="0"
          currencySymbol="₩"
          minimumValue="0"
          outputFormat="number"
          digitGroupSeparator=","
          placeholder="11월 예산 신청"
          onChange={(event, value) => setM11(parseInt(value))}
        />
        <CurrencyTextField
          disabled={props.textField}
          label="12월 금액"
          variant="outlined"
          value={m12}
          decimalPlaces="0"
          currencySymbol="₩"
          minimumValue="0"
          outputFormat="number"
          digitGroupSeparator=","
          placeholder="12월 예산 신청"
          onChange={(event, value) => setM12(parseInt(value))}
        />
        <CurrencyTextField
          label="4분기 금액"
          variant="filled"
          value={m10 + m11 + m12}
          decimalPlaces="0"
          currencySymbol="₩"
          minimumValue="0"
          outputFormat="number"
          digitGroupSeparator=","
          placeholder="4분기 금액"
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
  margin: { margin: theme.spacing(1) },
}));

export default BudgetAdjustmentExecution;
