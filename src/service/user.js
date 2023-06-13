import { fetchData } from "./instance";

  const getPass = async (pass, userId) => {
    return fetchData('/api/getpass', { pass, userId });
  };
  const userlist = async () => {
    return fetchData('/api/userlist');
  };
  
  export  {getPass,userlist}
