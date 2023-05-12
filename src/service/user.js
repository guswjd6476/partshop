import axios from "axios";
const getPass = (pass, userId) => {
    return axios.get('/api/getpass', {
      params: {
        pass,
        userId
      },
    });
  }

  export  {getPass}