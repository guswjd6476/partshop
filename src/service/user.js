import { fetchData } from "./instance";

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
  
  
  
  export  {getPass,userlists,logins,useridchecks,mailing,lastjoin,getUser,getAddress,addAddress,selectAddress}
