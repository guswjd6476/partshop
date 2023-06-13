import axios from "axios";

const instance = axios.create({
  baseURL: "https://port-0-partshopback-lme62alhk7lvdw.sel4.cloudtype.app/"
});
const fetchData = async (url, params) => {
    try {
      const response = await instance.get(url, {
        params,
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response;
    } catch (err) {
      console.log(`오류: ${err}`);
      return err;
    }
  };
export { fetchData };