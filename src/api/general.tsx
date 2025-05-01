import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { IJob } from "../types/job.types";
import { toast } from "react-toastify";
import { IAsset } from "../types/asset.types";
import { ICourse } from "../types/course.types";
import { ICategory } from "../types/category.types";

export function getGeneralUserDetails() {
  return useQuery({
    queryKey: ["general-user"],
    queryFn: async () => {
      const response = await axios.get(`/general/profile`);
      return response.data.data;
    },
  });
}

export function updateGeneralUserDetails() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await axios.put(`/general/profile/update`, data);
      return response.data;
    },
    onSuccess: (res) => {
      console.log(res);
      toast.success(res.message);
      queryClient.invalidateQueries({
        queryKey: ["general-user"],
      });
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
  });
}

export function updateGeneralUserPassword() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await axios.put(
        `/general/profile/update/password`,
        data
      );
      return response.data;
    },
    onSuccess: (res) => {
      console.log(res);
      toast.success(res.message);
      queryClient.invalidateQueries({
        queryKey: ["general-user"],
      });
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
  });
}

export function updateGeneralUserPhoto() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await axios.patch(`/general/profile/photo/update`, data);
      return response.data;
    },
    onSuccess: (res) => {
      console.log(res);
      toast.success(res.message);
      queryClient.invalidateQueries({
        queryKey: ["general-user"],
      });
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
  });
}

export function getGeneralCourseDetails(courseId: string | undefined) {
  return useQuery({
    queryKey: ["general-course-details", courseId],
    queryFn: async () => {
      const response = await axios.get(`/general/course/${courseId}`);
      return response.data.data as ICourse;
    },
  });
}

export function getGeneralAssetDetails(assetId: string | undefined) {
  return useQuery({
    queryKey: ["general-asset-details", assetId],
    queryFn: async () => {
      const response = await axios.get(`view/digital/asset?id=${assetId}`);
      return response.data.data as IAsset;
    },
  });
}
export function getGeneralAssetPhysicalDetails(assetId: string | undefined) {
  return useQuery({
    queryKey: ["general-asset-details", assetId],
    queryFn: async () => {
      const response = await axios.get(`view/physical/asset?id=${assetId}`);
      return response.data.data as IAsset;
    },
  });
}
export function getGeneralCourses() {
  return useQuery({
    queryKey: ["general-courses"],
    queryFn: async () => {
      const response = await axios.get(`/general/courses`);
      return response.data.data;
    },
  });
}
export function getSavedJobs() {
  return useQuery({
    queryKey: ["saved-jobs"],
    queryFn: async () => {
      const response = await axios.get(`/general/fetch/savedJob`);
      return response.data.data;
    },
  });
}

export function viewJobDetails(jobId: string | undefined) {
  return useQuery({
    queryKey: ["job-details", jobId],
    queryFn: async () => {
      const response = await axios.get(`/view/job?jobId=${jobId}`);
      return response.data.data as IJob;
    },
  });
}

export function saveJob() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (jobId: string) => {
      const response = await axios.post(`/general/save/job?jobId=${jobId}`);
      return response.data;
    },
    onSuccess: (res) => {
      queryClient.invalidateQueries({ queryKey: ["saved-jobs"], exact: false });
      queryClient.invalidateQueries({ queryKey: ["allJobs"], exact: false });
      toast.success(res.message);
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
  });
}

export function submitApplication() {
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await axios.post(`/general/apply/job`, data);
      return response.data;
    },
    onSuccess: (res) => {
      toast.success(res.message);
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
  });
}
export function submitKyc() {
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await axios.post(`/kyc/upload`, data);
      return response.data;
    },
    onSuccess: (res) => {
      toast.success(res.message);
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
  });
}

export function getSubCategories() {
  return useQuery({
    queryKey: ["general-subcategories"],
    queryFn: async () => {
      const response = await axios.get(`/category`);
      return response.data.data as ICategory[];
    },
  });
}

export function getOrderHistory() {
  return useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      const response = await axios.get(`/purchase/history`);
      return response.data.data as any;
    },
  });
}
export function getOrderDetails(paymentId: string) {
  return useQuery({
    queryKey: ["orders-details", paymentId],
    queryFn: async () => {
      const response = await axios.get(`/purchase/details/${paymentId}`);
      return response.data.data as any;
    },
  });
}
export function getBlogs() {
  return useQuery({
    queryKey: ["blog"],
    queryFn: async () => {
      const response = await axios.get(`/general/blogs`);
      return response.data.data as any;
    },
  });
}
export function getBlogCategory() {
  return useQuery({
    queryKey: ["blog-category"],
    queryFn: async () => {
      const response = await axios.get(`/general/blog-category`);
      return response.data.data as any;
    },
  });
}
