import { fetchData,dData } from "./instance";

  const getPass = async (pass, userId) => {
    return fetchData('/api/getpass', { pass, userId });
  };
  const userlists = async () => {
    return fetchData('/api/userlist');
  };
  const getUser = async (userId) => {
    return fetchData('/api/getUser',{userId});
  };
  const getAddress = async (userId) => {
    return fetchData('/api/getAddress',{userId});
  };
  const addAddress = async (userId,address,addtype,addressnum,subaddress,uName,uPhone) => {
    return fetchData('/api/addAddress',{userId,address,addtype,addressnum,subaddress,uName,uPhone});
  };
  const selectAddress = async (num) => {
    return fetchData('/api/selectAddress',{num});
  };
  const logins = async (userId,uPassword) => {
    return fetchData('/api/login', { userId,uPassword});
  };
  const useridchecks = async (userId) => {
    return fetchData('/api/useridcheck', { userId});
  };
  const mailing = async (userId) => {
    return fetchData('/api/mail', { userId});
  };
  const lastjoin = async (uPassword,uPhone,userId) => {
    return fetchData('/api/join', { uPassword,uPhone,userId});
  };
  const getOrderlist = async (userId) => {
    return fetchData('/api/getOrderlist', { userId});
  };
  const getAllOrderlist = async () => {
    return fetchData('/api/getAllOrderlist');
  };
  const getAfterbuylist = async (userId) => {
    return fetchData('/api/getAfterbuylist', {userId});
  };
  const getThisAfterbuylist = async (num) => {
    return fetchData('/api/getThisAfterbuylist', {num});
  };
  const addAfeterbuylist =  async (num,userId,title,rate,content) => {
    return fetchData('/api/addAfeterbuylist', {num,userId,title,rate,content});
  };
  // 배송조회
  const deliveryApi = async (carriers,num) => {
    return dData(carriers, num);
  };
    // 운송장 등록
    const addDeliver  =  async (state,dNum,carriers,id) => {
      return fetchData('/api/addDeliver', {state,dNum,carriers,id});
    };
  
  export  {getPass,userlists,logins,useridchecks,mailing,lastjoin,getUser,getAddress,addAddress,selectAddress,getOrderlist,getAfterbuylist,addAfeterbuylist,getThisAfterbuylist,deliveryApi,getAllOrderlist,addDeliver}
