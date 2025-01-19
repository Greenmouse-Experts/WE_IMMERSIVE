import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;
const token = localStorage.getItem("we-immersiveUser");


export const getAdminDigitalAssets = async (headers = {}) => {
    const response = await axios.get(`${baseURL}/admin/all/digital/assets`, {
        headers: {
            ...headers, // Merge custom headers
            Authorization: `Bearer ${token}`, // Add Authorization token
            "Content-Type": "application/json", // Set content type
        },
    });
    return response.data;
};

export const getAdminPhysicalAssets = async (headers = {}) => {
    const response = await axios.get(`${baseURL}/admin/all/physical/assets`, {
        headers: {
            ...headers, // Merge custom headers
            Authorization: `Bearer ${token}`, // Add Authorization token
            "Content-Type": "application/json", // Set content type
        },
    });
    return response.data;
};

export const getApprovedDigitalAssets = async (headers = {}) => {
    const response = await axios.get(`${baseURL}/fetch/digital/assets`, {
        headers: {
            ...headers, // Merge custom headers
            Authorization: `Bearer ${token}`, // Add Authorization token
            "Content-Type": "application/json", // Set content type
        },
    });
    return response.data; // Replace with your API endpoint
};

export const getApprovedPhysicalAssets = async (headers = {}) => {
    const response = await axios.get(`${baseURL}/fetch/physical/assets`, {
        headers: {
            ...headers, // Merge custom headers
            Authorization: `Bearer ${token}`, // Add Authorization token
            "Content-Type": "application/json", // Set content type
        },
    });
    return response.data; // Replace with your API endpoint
};

export const createJobCategory = async (payload: any, headers = {}) => {
    return axios
      .post(`${baseURL}/admin/job/category/create`, payload, {
        headers: {
          ...headers, // Merge custom headers
          Authorization: `Bearer ${token}`, // Example for adding an Authorization token
          "Content-Type": "application/json", // Example for setting content type
        },
      })
      .then((response) => response.data);
  };
  
  export const getJobCategory = async (headers = {}) => {
    const response = await axios.get(`${baseURL}/admin/job/categories`, {
        headers: {
            ...headers, // Merge custom headers
            Authorization: `Bearer ${token}`, // Add Authorization token
            "Content-Type": "application/json", // Set content type
        },
    });
    return response.data; // Replace with your API endpoint
};

export const createJob = async (payload: any, headers = {}) => {
  return axios
    .post(`${baseURL}/creator/job/add`, payload, {
      headers: {
        ...headers, // Merge custom headers
        Authorization: `Bearer ${token}`, // Example for adding an Authorization token
        "Content-Type": "application/json", // Example for setting content type
      },
    })
    .then((response) => response.data);
};

  export const updateDigitalRequests = async (payload: any, headers = {}) => {
    return axios
      .patch(`${baseURL}/admin/digital/asset/update/status`, payload, {
        headers: {
          ...headers, // Merge custom headers
          Authorization: `Bearer ${token}`, // Example for adding an Authorization token
          "Content-Type": "application/json", // Example for setting content type
        },
      })
      .then((response) => response.data);
  };

  export const updatePhysicalRequests = async (payload: any, headers = {}) => {
    return axios
      .patch(`${baseURL}/admin/physical/asset/update/status`, payload, {
        headers: {
          ...headers, // Merge custom headers
          Authorization: `Bearer ${token}`, // Example for adding an Authorization token
          "Content-Type": "application/json", // Example for setting content type
        },
      })
      .then((response) => response.data);
  };
