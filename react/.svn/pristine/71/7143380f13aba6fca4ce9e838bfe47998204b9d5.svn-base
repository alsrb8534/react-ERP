import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import BudgetStatusFormMenu from "../BudgetStatusForm/BudgetStatusFormMenu";
import BudgetExcessStatusGrid from "./BudgetExcessStatusGrid";

const BudgetExcessStatus = () => {
  const [accountPeriodNo, setAccountPeriodNo] = useState();
  const [fiscalYear, setFiscalYear] = useState();
  const [workplaceCode, setWorkplaceCode] = useState();
  const [workplaceData, setWorkplaceData] = useState();
  const [deptCode, setDeptCode] = useState();
  return (
    <>
      <Typography variant="h3" gutterBottom>
        예산초과현황
      </Typography>
      <BudgetStatusFormMenu
        setAccountPeriodNo={setAccountPeriodNo}
        setWorkplaceCode={setWorkplaceCode}
        setDeptCode={setDeptCode}
        setFiscalYear={setFiscalYear}
        setWorkplaceData={setWorkplaceData}
      />
      <BudgetExcessStatusGrid
        deptCode={deptCode}
        workplaceCode={workplaceCode}
        accountPeriodNo={accountPeriodNo}
      />
    </>
  );
};

export default BudgetExcessStatus;
