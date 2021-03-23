import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import BudgetStatusFormMenu from "./BudgetStatusFormMenu";
import BudgetStatusFormGrid from "./BudgetStatusFormGrid";
import BudgetStatusFormDetailGrid from "./BudgetStatusFormDetailGrid";
import { useThemeSwitcher } from "mui-theme-switcher";

const BudgetStatusForm = () => {
  const [accountPeriodNo, setAccountPeriodNo] = useState();
  const [fiscalYear, setFiscalYear] = useState();
  const [workplaceCode, setWorkplaceCode] = useState();
  const [workplaceData, setWorkplaceData] = useState();
  const [deptCode, setDeptCode] = useState();
  return (
    <>
      <Typography variant="h3" gutterBottom>
        예산실적현황
      </Typography>
      <BudgetStatusFormMenu
        setAccountPeriodNo={setAccountPeriodNo}
        setWorkplaceCode={setWorkplaceCode}
        setDeptCode={setDeptCode}
        setFiscalYear={setFiscalYear}
        setWorkplaceData={setWorkplaceData}
      />
      <BudgetStatusFormGrid />
      <BudgetStatusFormDetailGrid />
    </>
  );
};

export default BudgetStatusForm;
