import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";
import { UserAdminData } from "../types/userDetails.types";
import { ICategory } from "../types/category.types";

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

export function getUserDetails(userId: string) {
  return useQuery({
    queryFn: async () => {
      const response = await axios.get(`/admin/user-details/${userId}`);
      return response.data.data as UserAdminData;
    },
    queryKey: ["users-details", userId],
  });
}
export function adminKycAction() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await axios.post(`/kyc/review`, data);
      return response.data;
    },
    onSuccess: (res) => {
      console.log(res);
      toast.success(res.message);
      queryClient.invalidateQueries({
        queryKey: ["users-details"],
      });
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
  });
}

export function getAllAdminDigitalAssets() {
  return useQuery({
    queryKey: ["admin-digital-assets"],
    queryFn: async () => {
      const response = await axios.get(`/admin/all/digital/assets`);
      return response.data.data;
    },
  });
}

export function addAdminAssetCategory() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await axios.post(`/admin/asset/category/create`, data);
      return response.data;
    },
    onSuccess: (res) => {
      console.log(res);
      toast.success(res.message);
      queryClient.invalidateQueries({
        queryKey: ["admin-asset-category"],
      });
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
  });
}

export function getAdminAssetCategory() {
  return useQuery({
    queryKey: ["admin-asset-category"],
    queryFn: async () => {
      const response = await axios.get(`/admin/asset/categories`);
      return response.data.data;
    },
  });
}

export function deleteAdminAssetCategory() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (categoryId: string) => {
      const response = await axios.delete(
        `admin/asset/category/delete?id=${categoryId}`
      );
      return response.data;
    },
    onSuccess: (res) => {
      console.log(res);
      toast.success(res.message);
      queryClient.invalidateQueries({
        queryKey: ["admin-asset-category"],
      });
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
  });
}

export function editAdminAssetCategory() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await axios.put(`/admin/asset/category/update`, data);
      return response.data;
    },
    onSuccess: (res) => {
      console.log(res);
      toast.success(res.message);
      queryClient.invalidateQueries({
        queryKey: ["admin-asset-category"],
      });
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
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

export function getAdminCourseSubCategory(courseId: string) {
  return useQuery({
    queryKey: ["admin-course-sub-category"],
    queryFn: async () => {
      const response = await axios.get(
        `/category/${courseId}?includeChildren=true`
      );
      return response.data.data as ICategory;
    },
  });
}
export function addAdminCourseSubCategory() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await axios.post(`/category`, data);
      return response.data;
    },
    onSuccess: (res) => {
      console.log(res);
      toast.success(res.message);
      queryClient.invalidateQueries({
        queryKey: ["admin-course-sub-category"],
      });
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
  });
}

export function deleteAdminSubCourseCategory() {
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
        queryKey: ["admin-course-sub-category"],
      });
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
  });
}

export function updateAdminCourseSubCategory() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await axios.put(`/category/${data.id}`, data);
      return response.data;
    },
    onSuccess: (res) => {
      console.log(res);
      toast.success(res.message);
      queryClient.invalidateQueries({
        queryKey: ["admin-course-sub-category"],
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

export function addAdminJobCategory() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await axios.post(`/admin/job/category/create`, data);
      return response.data;
    },
    onSuccess: (res) => {
      console.log(res);
      toast.success(res.message);
      queryClient.invalidateQueries({
        queryKey: ["admin-job-category"],
      });
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
  });
}

export function getAdminJobCategory() {
  return useQuery({
    queryKey: ["admin-job-category"],
    queryFn: async () => {
      const response = await axios.get(`/admin/job/categories`);
      return response.data.data;
    },
  });
}

export function deleteAdminJobCategory() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (categoryId: string) => {
      const response = await axios.delete(
        `admin/job/category/delete?id=${categoryId}`
      );
      return response.data;
    },
    onSuccess: (res) => {
      console.log(res);
      toast.success(res.message);
      queryClient.invalidateQueries({
        queryKey: ["admin-job-category"],
      });
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
  });
}

export function editAdminJobCategory() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await axios.put(`/admin/job/category/update`, data);
      return response.data;
    },
    onSuccess: (res) => {
      console.log(res);
      toast.success(res.message);
      queryClient.invalidateQueries({
        queryKey: ["admin-job-category"],
      });
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
  });
}

export function getAdminCourses() {
  return useQuery({
    queryKey: ["admin-courses"],
    queryFn: async () => {
      const response = await axios.get(`/admin/course/fetch`);
      return response.data.data;
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
        queryKey: ["admin-courses"],
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

export function getSubscriptionPlans() {
  return useQuery({
    queryKey: ["subscriptionPlan"],
    queryFn: async () => {
      const response = await axios.get(`/admin/subscription/plans`);
      return response.data.data;
    },
  });
}

export function addSubscriptionPlan() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await axios.post(
        `/admin/subscription/plan/create`,
        data
      );
      return response.data;
    },
    onSuccess: (res) => {
      console.log(res);
      toast.success(res.message);
      queryClient.invalidateQueries({
        queryKey: ["subscriptionPlan"],
      });
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
  });
}

export function deleteSubscriptionPlan() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (categoryId: string) => {
      const response = await axios.delete(
        `/admin/subscription/plan/delete?planId=${categoryId}`
      );
      return response.data;
    },
    onSuccess: (res) => {
      console.log(res);
      toast.success(res.message);
      queryClient.invalidateQueries({
        queryKey: ["subscriptionPlan"],
      });
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
  });
}

export function updateSubscriptionPlan() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await axios.put(`/admin/subscription/plan/update`, data);
      return response.data;
    },
    onSuccess: (res) => {
      console.log(res);
      toast.success(res.message);
      queryClient.invalidateQueries({
        queryKey: ["subscriptionPlan"],
      });
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
  });
}

export function getAdminAnalytics() {
  return useQuery({
    queryKey: ["admin-analytics"],
    queryFn: async () => {
      const response = await axios.get(`/analysis/admin/yearly/landing`);
      return response.data;
    },
  });
}
export function getAdminStats() {
  return useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const response = await axios.get(`/stat/admin/landing`);
      return response.data;
    },
  });
}
