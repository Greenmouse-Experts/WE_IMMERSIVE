import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";
import { UserAdminData } from "../types/userDetails.types";
import { ICategory } from "../types/category.types";
import { IAdminNewUser } from "../types/dashboard.types";
import { IBlog } from "../types/blog.types";
import { IFaq } from "../types/faq.types";

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
  const response = await axios.get(`${baseURL}/admin/all/physical/assets`, {
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
export function getAllAdminPhysicalAssets() {
  return useQuery({
    queryKey: ["admin-physical-assets"],
    queryFn: async () => {
      const response = await axios.get(`/admin/all/physical/assets`);
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
export function getAdminBlogCategory() {
  return useQuery({
    queryKey: ["admin-blog-category"],
    queryFn: async () => {
      const response = await axios.get(`/general/blog-category`);
      return response.data.data;
    },
  });
}
export function getAdminFaqCategory() {
  return useQuery({
    queryKey: ["admin-faq-category"],
    queryFn: async () => {
      const response = await axios.get(`/admin/faq-category`);
      return response.data.data;
    },
  });
}
export function getAdminBlog() {
  return useQuery({
    queryKey: ["admin-blog"],
    queryFn: async () => {
      const response = await axios.get(`/admin/blog/fetch-all/view`);
      return response.data.data as IBlog[];
    },
  });
}
export function getAdminFaq() {
  return useQuery({
    queryKey: ["admin-faq"],
    queryFn: async () => {
      const response = await axios.get(`/admin/faq`);
      return response.data.data as IFaq[];
    },
  });
}

export function addAdminBlogCategory() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await axios.post(`/admin/blog-category`, data);
      return response.data;
    },
    onSuccess: (res) => {
      console.log(res);
      toast.success(res.message);
      queryClient.invalidateQueries({
        queryKey: ["admin-blog-category"],
      });
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
  });
}
export function addAdminFaqCategory() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await axios.post(`/admin/faq-category`, data);
      return response.data;
    },
    onSuccess: (res) => {
      console.log(res);
      toast.success(res.message);
      queryClient.invalidateQueries({
        queryKey: ["admin-faq-category"],
      });
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
  });
}

export function editAdminBlogCategory() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await axios.put(`/admin/blog-category/${data.id}`, data);
      return response.data;
    },
    onSuccess: (res) => {
      console.log(res);
      toast.success("Blog updated successfully");
      queryClient.invalidateQueries({
        queryKey: ["admin-blog-category"],
      });
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
  });
}
export function editAdminFaqCategory() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await axios.put(`/admin/faq-category/${data.id}`, data);
      return response.data;
    },
    onSuccess: (res) => {
      console.log(res);
      toast.success("Blog updated successfully");
      queryClient.invalidateQueries({
        queryKey: ["admin-faq-category"],
      });
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
  });
}
export function addAdminBlog() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await axios.post(`/admin/blog`, data);
      return response.data;
    },
    onSuccess: (res) => {
      console.log(res);
      toast.success(res.message);
      queryClient.invalidateQueries({
        queryKey: ["admin-blog"],
      });
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
  });
}
export function addAdminFaq() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await axios.post(`/admin/faq`, data);
      return response.data;
    },
    onSuccess: (res) => {
      console.log(res);
      toast.success(res.message);
      queryClient.invalidateQueries({
        queryKey: ["admin-faq"],
      });
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
  });
}

export function deleteAdminBlog() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (blogId: string) => {
      const response = await axios.delete(
        `/admin/blog/${blogId}`
      );
      return response.data;
    },
    onSuccess: (res) => {
      console.log(res);
      toast.success(res.message);
      queryClient.invalidateQueries({
        queryKey: ["admin-blog"],
      });
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
  });
}
export function deleteAdminFaq() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (blogId: string) => {
      const response = await axios.delete(
        `/admin/faq/${blogId}`
      );
      return response.data;
    },
    onSuccess: (res) => {
      console.log(res);
      toast.success(res.message);
      queryClient.invalidateQueries({
        queryKey: ["admin-faq"],
      });
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
  });
}
export function publishAdminBlog() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await axios.put(`/admin/blog/${data.id}`, data);
      return response.data;
    },
    onSuccess: (res) => {
      console.log(res);
      toast.success(res.message);
      queryClient.invalidateQueries({
        queryKey: ["admin-blog"],
      });
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
  });
}
export function publishAdminFaq() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await axios.put(`/admin/faq/${data.id}`, data);
      return response.data;
    },
    onSuccess: (res) => {
      console.log(res);
      toast.success("Faq updated successfully");
      queryClient.invalidateQueries({
        queryKey: ["admin-faq"],
      });
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
  });
}

export function deleteAdminBlogCategory() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (blodId: string) => {
      const response = await axios.delete(
        `/admin/blog-category/${blodId}`
      );
      return response.data;
    },
    onSuccess: (res) => {
      console.log(res);
      toast.success(res.message);
      queryClient.invalidateQueries({
        queryKey: ["admin-blog-category"],
      });
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
  });
}
export function deleteAdminFaqCategory() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (blodId: string) => {
      const response = await axios.delete(
        `/admin/faq-category/${blodId}`
      );
      return response.data;
    },
    onSuccess: (res) => {
      console.log(res);
      toast.success(res.message);
      queryClient.invalidateQueries({
        queryKey: ["admin-faq-category"],
      });
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
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
export function unPublishCourse() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (courseId: string) => {
      const response = await axios.post(`/admin/course/${courseId}/unpublish`);
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
export function publishPhysicalAsset() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await axios.patch(
        `/admin/physical/asset/update/status`,
        data
      );
      return response.data;
    },
    onSuccess: (res) => {
      console.log(res);
      toast.success(res.message);
      queryClient.invalidateQueries({
        queryKey: ["admin-physical-assets"],
      });
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
  });
}

export function deletePhysicalAsset() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (assetId) => {
      const response = await axios.delete(
        `/admin/physical/asset/delete?id=${assetId}`
      );
      return response.data;
    },
    onSuccess: (res) => {
      console.log(res);
      toast.success(res.message);
      queryClient.invalidateQueries({
        queryKey: ["admin-physical-assets"],
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
export function getAdminNewUsers(accountType: string) {
  return useQuery({
    queryKey: ["admin-new-users", accountType],
    queryFn: async () => {
      const response = await axios.get(
        `/analysis/admin/recent-signups?userType=${accountType || ""}`
      );
      return response.data as IAdminNewUser[];
    },
  });
}
export function getUserByCountry() {
  return useQuery({
    queryKey: ["admin-user-country"],
    queryFn: async () => {
      const response = await axios.get(
        `/analysis/admin/users-by-country`
      );
      return response.data 
    },
  });
}
export function getUserStats() {
  return useQuery({
    queryKey: ["admin-user-stats"],
    queryFn: async () => {
      const response = await axios.get(
        `/analysis/admin/user-stats`
      );
      return response.data 
    },
  });
}
