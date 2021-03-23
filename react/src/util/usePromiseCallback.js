export default function usePromiseCallback(api, gridApi){

  const process = async () => {
    try{
    const result = await api();
    gridApi.setRowData(result.data.gridRowJson);
    console.log(result);
  }catch(e){
    console.log(e.message);
  }
  }
  return process;

}