import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";

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

export const getSubscriptionPlans = async (headers = {}) => {
  const response = await axios.get(`${baseURL}/admin/subscription/plans`, {
    headers: {
      ...headers, // Merge custom headers
      Authorization: `Bearer ${token}`, // Add Authorization token
      "Content-Type": "application/json", // Set content type
    },
  });
  return response.data; // Replace with your API endpoint
};

export const createSubscription = async (payload: any, headers = {}) => {
  return axios
    .post(`${baseURL}/admin/subscription/plan/create`, payload, {
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

export function getAllAdminDigitalAssets() {
  return useQuery({
    queryKey: ["admin-digital-assets"],
    queryFn: async () => {
      const response = await axios.get(`/admin/all/digital/assets`);
      return response.data.data;
    },
  });
}

export function getAdminCourseCategory() {
  return useQuery({
    queryKey: ["admin-course-category"],
    queryFn: async () => {
      const response = await axios.get(`/admin/course/categories`);
      return response.data.data;
    },
  });
}

export function addAdminCourseCategory() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await axios.post(`/admin/course/category/create`, data);
      return response.data;
    },
    onSuccess: (res) => {
      console.log(res);
      toast.success(res.message);
      queryClient.invalidateQueries({
        queryKey: ["admin-course-category"],
      });
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
  });
}

export function deleteAdminCourseCategory() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (categoryId: string) => {
      const response = await axios.delete(
        `admin/course/category/delete?id=${categoryId}`
      );
      return response.data;
    },
    onSuccess: (res) => {
      console.log(res);
      toast.success(res.message);
      queryClient.invalidateQueries({
        queryKey: ["admin-course-category"],
      });
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
  });
}

export function editAdminCourseCategory() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await axios.put(`/admin/course/category/update`, data);
      return response.data;
    },
    onSuccess: (res) => {
      console.log(res);
      toast.success(res.message);
      queryClient.invalidateQueries({
        queryKey: ["admin-course-category"],
      });
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
  });
}

export function publishCourse() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (courseId: string) => {
      const response = await axios.post(`/admin/course/${courseId}/publish`);
      return response.data;
    },
    onSuccess: (res) => {
      console.log(res);
      toast.success(res.message);
      queryClient.invalidateQueries({
        queryKey: ["general-courses"],
      });
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
  });
}

export function publishDigitalAsset() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await axios.patch(
        `/admin/digital/asset/update/status`,
        data
      );
      return response.data;
    },
    onSuccess: (res) => {
      console.log(res);
      toast.success(res.message);
      queryClient.invalidateQueries({
        queryKey: ["admin-digital-assets"],
      });
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
  });
}

export function deleteDigitalAsset() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (assetId) => {
      const response = await axios.delete(
        `/admin/digital/asset/delete?id=${assetId}`
      );
      return response.data;
    },
    onSuccess: (res) => {
      console.log(res);
      toast.success(res.message);
      queryClient.invalidateQueries({
        queryKey: ["admin-digital-assets"],
      });
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
  });
}
