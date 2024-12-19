import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;
const token = localStorage.getItem("we-immersiveUser");

export const registerUser = async (payload: any) => {
  return axios
    .post(`${baseURL}/auth/register/user`, payload)
    .then((response) => response.data);
};

export const registerCreator = async (payload: any) => {
  return axios
    .post(`${baseURL}/auth/register/creator`, payload)
    .then((response) => response.data);
};

export const registerStudent = async (payload: any) => {
  return axios
    .post(`${baseURL}/auth/register/student`, payload)
    .then((response) => response.data);
};

export const registerInstitution = async (payload: any) => {
  return axios
    .post(`${baseURL}/auth/register/institution`, payload)
    .then((response) => response.data);
};

export const verifyEmail = async (payload: any) => {
  return axios
    .post(`${baseURL}/auth/verify/email`, payload)
    .then((response) => response.data);
};

export const resendOTP = async (payload: any) => {
  return axios
    .post(`${baseURL}/auth/resend/verification/email`, payload)
    .then((response) => response.data);
};

export const login = async (payload: any) => {
  return axios
    .post(`${baseURL}/auth/login`, payload)
    .then((response) => response.data);
};

export const createDigitalAsset = async (payload: any, headers = {}) => {
  return axios
    .post(`${baseURL}/creator/digital/asset/create`, payload, {
      headers: {
        ...headers, // Merge custom headers
        Authorization: `Bearer ${token}`, // Example for adding an Authorization token
        "Content-Type": "application/json", // Example for setting content type
      },
    })
    .then((response) => response.data);
};
