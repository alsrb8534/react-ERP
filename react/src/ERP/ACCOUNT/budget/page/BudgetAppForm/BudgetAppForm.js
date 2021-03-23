import React, { useState } from "react";
import BudgetAppFormGrid from "./BudgetAppFormGrid";
import BudgetAppFormDetailGrid from "./BudgetAppFormDetailGrid";
import BudgetAppFormMenu from "./BudgetAppFormMenu";
import BudgetAppFormInput from "./BudgetAppFormInput";
import {
  AppBar,
  Grid,
  makeStyles,
  Paper,
  Toolbar,
  Typography,
} from "@material-ui/core";

const BudgetAppForm = () => {
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
        예산 신청
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
              setAccountPeriodNo={setAccountPeriodNo}
              setWorkplaceCode={setWorkplaceCode}
              setDeptCode={setDeptCode}
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
            <BudgetAppFormDetailGrid
              setAccountInnerCode={setAccountInnerCode}
              setTextField={setTextField}
              accountPeriodNo={accountPeriodNo}
              workplaceCode={workplaceCode}
              deptCode={deptCode}
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
            <BudgetAppFormInput
              textField={textField}
              accountInnerCode={accountInnerCode}
              accountPeriodNo={accountPeriodNo}
              workplaceCode={workplaceCode}
              deptCode={deptCode}
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

export default BudgetAppForm;
