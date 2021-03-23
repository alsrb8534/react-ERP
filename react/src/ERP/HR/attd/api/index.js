import axios from 'Api/hrApi';

export const DayAttdSaga = action =>
    axios.post(`/insa/attendance/dayAttendance`, {
        empCode: action.payload.empCode,
        applyDay: action.payload.applyDay,
        attdType: action.payload.attdType,
        attdTypeName: action.payload.attdTypeName,
        time: action.payload.time
    });

export const DayAttdSSaga = action =>
    axios.get('/insa/attendance/dayAttendance', {
        params: {
            empCode: action.payload.empCode,
            applyDay: action.payload.applyDay
        }
    });

export const deleteAttdSaga = action =>
    axios.post(
        '/insa/attendance/deleteDayAttendance',
        {
            dayAttdData: action.payload.data
        },
        { headers: { 'Content-Type': 'application/json' } }
    );

export const restAttdSaga = action =>
    axios({
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        url: '/attendance/registRestAttd.do',
        params: { data: action.data }
    })
        .then(function(response) {
            alert('신청완료');
        })
        .catch(function(error) {
            alert('신청실패');
        });

export const searchEmploymentSaga = action =>
    axios.get('/certificate/selectCertificateList', {
        params: {
            startDate: action.params.startDate,
            endDate: action.params.endDate,
            empCode: action.params.empCode
        }
    });

export const searchAttdAppl = action =>
    axios.get('/attendance/attendanceApploval.do', {
        params: {
            deptCode: action.payload.deptCode,
            startDate: action.payload.startDate,
            endDate: action.payload.endDate
        }
    });

export const updateAttdApplSaga = action =>
    axios.post(
        '/attendance/attendanceApploval.do',
        {
            checkData: action.payload.data,
            deptCode: action.payload.deptCode,
            startDate: action.payload.startDate,
            endDate: action.payload.endDate
        },
        { headers: { 'Content-Type': 'application/json' } }
    );

export const monthAttdSearch = action =>
    axios.get('/insa/attendance/monthAttendanceManage.do', {
        params: {
            applyYearMonth: action.payload.cday
        }
    });

export const monthAttdUpdate = action =>
    axios.post(
        '/insa/attendance/monthAttendanceClose.do',
        {
            monthAttdMgt: action.payload.monthAttdMgtList
        },
        { headers: { 'Content-Type': 'application/json' } }
    );

export const dayAttdSearch = action =>
    axios.get('/attendance/dayAttendanceManage', {
        params: {
            applyDay: action.payload.cday
        }
    });

export const dayAttdUpdate = action =>
    axios.post(
        '/attendance/dayAttendanceManageUpdate',
        {
            dayAttdMgt: action.payload.dayAttdMgtList
        },
        { headers: { 'Content-Type': 'application/json' } }
    );
