import axios from 'Api/hrApi'

export const empDetailedSaga =
(action) => 
axios.get(
  "/emp/empDetail.do",
  {
    params: {
      company: action.payload.company,
      workPlace: action.payload.workPlace,
      position: action.payload.position,
      empName: action.payload.empName,
    },
  },
);

export const empUpdateSaga =
(action) =>
axios.get(
    "/emp/empUpdate.do",
    {
      params: {
        empArray: action.payload.empArray,
      },
    },
  );

  export const searchEmploymentManage =
  (action) =>
  axios.get(
    "/certificate/findCertificateListByDept.do",
    {
      params: {
        deptName: action.payload.deptName,
        startDate: action.payload.startDate,
        endDate: action.payload.endDate,
      },
    },
  );

export const updateEmploymentManage =
(action) =>
axios.post(
    "/certificate/modifyCertificateList.do",
    {
      checkData: action.payload.data,
      deptName: action.payload.deptName,
      startDate: action.payload.startDate,
      endDate: action.payload.endDate,
    },
    { headers: { "Content-Type": "application/json" }
   },
  );

  export const positionListSaga =
  () =>
  axios.get(
    "/basicInfo/searchPosition.do",
  );

  export const registerEmp =
  (action) =>
  axios({
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    url: "/registEmployee.do",
    params: { data: action.data },
  });

  export const divisionSaga =
  (action) =>
        axios.get("/basicInfo/searchDepartment.do", {
          params: {
            searchCondition: "WORKPLACE",
            workplaceCode: action.workplaceCode,
            companyCode: "COM-01",
          },
        });