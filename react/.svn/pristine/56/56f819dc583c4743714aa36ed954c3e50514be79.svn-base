import axios from 'Api/hrApi';

export const getBaseWorkTimeList = () =>
axios.get("/base/baseWorkTimeList.do");

export const deleteBaseWorkTime = (param) =>
axios.delete("/base/baseWorkTimeList.do", 
{ data: {sendData:JSON.stringify(param)} },
{  headers: {  "Content-Type": "application/json" }},
);

export const batchBaseWorkTime = (param) =>
    axios.post("/base/baseWorkTimeList.do", 
    { sendData: param },
    {  headers: {  "Content-Type": "application/json" }},
    );

export const holidaySearch = () =>
axios.get(
  "/base/holidayList",
);

export const holidayUpdate =     (action) =>
axios.post(
  "/base/holidayList.do",
  { sendData: action.payload },
  { headers: { "Content-Type": "application/json" } },
)

export const deptListManage = () => axios.get("/base/deptList")

export const deptListUpdate = (action) =>
{
  console.log("action")
  console.log(action)
axios.post(
  "/base/deptList.do",
  { sendData: action.payload },
  { headers: { "Content-Type": "application/json" } },
)}

export const deptMember = (action) =>
{
  console.log("deptMember:action")
  console.log(action)
return axios.get("/emp/memberList.do", { 
        params: {
          value: action.params.deptCode,
        },
      },
      )
    }