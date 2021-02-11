import axios from "axios";
import { BASE_URL } from "../config/urls";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: `${BASE_URL}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    },
  });
};

export const axiosWithoutAuth = () => {
  
  return axios.create({
    baseURL: `${BASE_URL}`,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
