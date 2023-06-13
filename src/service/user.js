import { fetchData } from "./instance";

  const getPass = async (pass, userId) => {
    return fetchData('/api/getpass', { pass, userId });
  };
  const userlist = async () => {
    return fetchData('/api/userlist');
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
  
  
  
  export  {getPass,userlist,logins,useridchecks,mailing,lastjoin}
