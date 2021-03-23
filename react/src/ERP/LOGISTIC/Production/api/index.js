import axios from 'Api/logiApi';

export const searchMpsList = param => axios.get(
  '/production/searchMpsInfo.do',
  {
      params: {
          startDate: param.payload.startDate,
          endDate: param.payload.endDate
      }
  }
);


export const searchMrpList = param => axios.get(
  '/logistics/production/openMrp.do',
  {
      params: {
          mpsNoListStr: param.payload.mpsNoListStr
      }
  }
);


export const mrpInsert = param => axios.put(
  '/logistics/production/registerMrp.do',
  {
      mrpRegisterDate: param.payload.mrpRegisterDate,
      batchList: param.payload.batchList
  },
  { headers: { 'Content-Type': 'application/json' } }
);

export const searchGetMpsList = param => axios.get(
  '/logistics/production/getMrpList.do',
  {
      params: {
          mrpGatheringStatusCondition: param.payload.mrpGatheringStatusCondition
      }
  }
);

export const searchGatherList = param => axios.put(
  '/logistics/production/getMrpGatheringList.do',
  {
      mrpNoList: param.payload.mrpNoList
  }
);

export const gatherInsert = param => axios.put(
  '/logistics/production/registerMrpGathering.do',
  {
      mrpGatheringRegisterDate: param.payload.mrpGatheringRegisterDate,
      batchList: param.payload.batchList,
      mrpNoAndItemCodeList: param.payload.mrpNoAndItemCodeList
  },
  { headers: { 'Content-Type': 'application/json' } }
);