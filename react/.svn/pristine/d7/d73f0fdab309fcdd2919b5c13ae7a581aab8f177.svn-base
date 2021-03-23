import React, { useState } from "react";
import BudgetAppFormMenu from "ERP/ACCOUNT/budget/page/BudgetAppForm/BudgetAppFormMenu";
import BudgetAppFormGrid from "ERP/ACCOUNT/budget/page/BudgetAppForm/BudgetAppFormGrid";
import {
  AppBar,
  Grid,
  makeStyles,
  Paper,
  Toolbar,
  Typography,
} from "@material-ui/core";
import BudgetCompFormDetailGrid from "../BudgetCompForm/BudgetCompFormDetailGrid";
import BudgetAdjustmentExecution from "./BudgetAdjustmentExecution";
import BudgetAdjustmentComp from "./BudgetAdjustmentComp";

const BudgetAdjustment = () => {
  const classes = useStyles();
  //BudgetAppFormMenu => BudgetAppFormInput
  const [accountPeriodNo, setAccountPeriodNo] = useState();
  const [fiscalYear, setFiscalYear] = useState();
  const [workplaceCode, setWorkplaceCode] = useState();
  const [deptCode, setDeptCode] = useState();
  const [workplaceData, setWorkplaceData] = useState();

  //BudgetAppFormDetailGrid => BudgetAppFormInput
  const [textField, setTextField] = useState(false);
  const [accountInnerCode, setAccountInnerCode] = useState();
  const [accountCode, setAccountCode] = useState();

  console.log("accountPeriodNo", accountPeriodNo);
  console.log("workplaceCode", workplaceCode);
  console.log("deptCode", deptCode);
  console.log("accountInnerCode", accountInnerCode);

  return (
    <>
      <Typography variant="h3" gutterBottom>
        예산조정입력
      </Typography>
      <Grid
        container
        display="flex"
        alignItems="flex-start"
        p={1}
        m={1}
        bgcolor="background.paper"
        css={{ height: "100%" }}
        spacing={1}
      >
        <Grid item xs={3} css={{ height: "100%" }}>
          <Paper elevation={3} className={classes.paper}>
            <AppBar color="primary" position="static">
              <Toolbar>
                <Typography variant="h5">검색조건</Typography>
              </Toolbar>
            </AppBar>
            <BudgetAppFormMenu
              setAccountPeriodNo={setAccountPeriodNo} //회계기수
              setWorkplaceCode={setWorkplaceCode} // 사업장코드
              setDeptCode={setDeptCode} //부서코드
              setFiscalYear={setFiscalYear}
              setWorkplaceData={setWorkplaceData}
            />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper elevation={3} className={classes.paper}>
            <AppBar color="primary" position="static">
              <Toolbar>
                <Typography variant="h5">예산계정목록</Typography>
              </Toolbar>
            </AppBar>
            <BudgetAppFormGrid />
          </Paper>
        </Grid>
        <Grid item xs={5}>
          <Paper elevation={3} className={classes.paper}>
            <AppBar color="primary" position="static">
              <Toolbar>
                <Typography variant="h5">예산계정상세목록</Typography>
              </Toolbar>
            </AppBar>
            <BudgetCompFormDetailGrid
              setAccountInnerCode={setAccountInnerCode}
              setTextField={setTextField}
              setAccountCode={setAccountCode}
              accountPeriodNo={accountPeriodNo}
              workplaceCode={workplaceCode}
              deptCode={deptCode}
            />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper
            elevation={3}
            //className={classes.paper}
            display="flex"
            alignItems="flex-start"
            p={1}
            m={1}
            bgcolor="background.paper"
            css={{ height: 100 }}
          >
            <BudgetAdjustmentComp
              textField={textField}
              accountInnerCode={accountInnerCode}
              accountPeriodNo={accountPeriodNo}
              workplaceCode={workplaceCode}
              deptCode={deptCode}
              fiscalYear={fiscalYear}
            />
          </Paper>
        </Grid>
        <Grid item sm>
          <Paper
            elevation={3}
            //className={classes.paper}
            display="flex"
            alignItems="flex-start"
            p={1}
            m={1}
            bgcolor="background.paper"
            css={{ height: 100 }}
          >
            <BudgetAdjustmentExecution
              accountInnerCode={accountInnerCode}
              accountPeriodNo={accountPeriodNo}
              workplaceCode={workplaceCode}
              deptCode={deptCode}
              accountCode={accountCode}
              workplaceData={workplaceData}
              fiscalYear={fiscalYear}
            />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

const useStyles = makeStyles({
  paper: {
    width: "100%",
    minHeight: "55vh",
  },
});

export default BudgetAdjustment;
