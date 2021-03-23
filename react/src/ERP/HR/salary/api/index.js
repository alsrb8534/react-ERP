import axios from 'Api/hrApi';

export const baseSalarySearch =
() => axios.get(  "/salary/baseSalaryManage.do");

export const baseSalaryUpdate =
(action) => axios.post("/salary/baseSalaryManage.do", 
{ sendData: action.payload }, 
{  headers: {  "Content-Type": "application/json" }},
);

export const searchMonthSalary =
(action) =>
axios.get(
  "/salary/findCloseSalary.do",
  {
    params: {
      applyYearMonth:action.payload.applyYearMonth,
      deptCode:action.payload.deptCode
    },
  },
);

export const salaryListSaga =
(action) =>
axios({
  method: "get",
  url: "/salary/findCloseSalary.do",
  params: {
    deptCode: action.payload.dept,
    applyYearMonth: action.payload.date,
  },
});

export const closeSalary =
(action) => 
axios({
  headers: { "Content-Type": "application/json" },
  method: "post",
  url: "/salary/modifyMonthSalary.do",
  data: {
    empcode1: action.payload.empcode1,
  },
})