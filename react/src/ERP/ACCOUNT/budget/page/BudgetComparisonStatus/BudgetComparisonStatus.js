import React, { useState } from "react";
import {
  AppBar,
  Grid,
  makeStyles,
  Paper,
  Toolbar,
  Typography,
} from "@material-ui/core";
import BudgetComparisonStatusCodeGrid from "./BudgetComparisonStatusCodeGrid";
import BudgetComparisonStatusGrid from "./BudgetComparisonStatusGrid";
import BudgetComparisonStatusMenu from "./BudgetComparisonStatusMenu";

const BudgetComparisonStatus = () => {
  const classes = useStyles();
  //BudgetAppFormMenu => BudgetAppFormInput
  const [accountPeriodNo, setAccountPeriodNo] = useState();
  const [fiscalYear, setFiscalYear] = useState();
  const [workplaceCode, setWorkplaceCode] = useState();
  const [workplaceData, setWorkplaceData] = useState();
  const [deptCode, setDeptCode] = useState();

  //BudgetAppFormDetailGrid => BudgetAppFormInput
  const [textField, setTextField] = useState(true);
  const [accountInnerCode, setAccountInnerCode] = useState();

  return (
    <>
      <Typography variant="h3" gutterBottom>
        예실대비현황
      </Typography>
      <BudgetComparisonStatusMenu
        setAccountPeriodNo={setAccountPeriodNo}
        setWorkplaceCode={setWorkplaceCode}
        setDeptCode={setDeptCode}
        setFiscalYear={setFiscalYear}
        setWorkplaceData={setWorkplaceData}
      />
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
        <Grid item xs={4}>
          <Paper elevation={3} className={classes.paper}>
            <AppBar color="primary" position="static">
              <Toolbar>
                <Typography variant="h5">예산계정상세목록</Typography>
              </Toolbar>
            </AppBar>
            <BudgetComparisonStatusCodeGrid
              accountPeriodNo={accountPeriodNo}
              workplaceCode={workplaceCode}
              deptCode={deptCode}
              fiscalYear={fiscalYear}
              workplaceData={workplaceData}
            />
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper elevation={3} className={classes.paper}>
            <AppBar color="primary" position="static">
              <Toolbar>
                <Typography variant="h5">예실대비현황</Typography>
              </Toolbar>
            </AppBar>
            <BudgetComparisonStatusGrid />
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

export default BudgetComparisonStatus;
