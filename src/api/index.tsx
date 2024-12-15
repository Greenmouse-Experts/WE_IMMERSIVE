import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;

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
