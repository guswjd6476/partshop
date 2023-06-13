import axios from "axios";

const instance = axios.create({
  baseURL: "https://port-0-partshopback-lme62alhk7lvdw.sel4.cloudtype.app/"
});

export { instance };