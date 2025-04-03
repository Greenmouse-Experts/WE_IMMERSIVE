import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";
import { IAsset } from "../types/asset.types";
import { IJob } from "../types/job.types";

export function publishLesson() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data) => {
      const response = await axios.put(
        `creator/course/module/lesson/update`,
        data
      );
      return response.data.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["lessonModules"] });
      toast.success("Lesson updated successfully");
    },
    onError: (error) => {
      toast.error(error?.message);
    },
  });
}

// creator/digital/asset/view?id

export function getAssetDetails(assetId: string | undefined) {
  return useQuery({
    queryKey: ["asset-details", assetId],
    queryFn: async () => {
      const response = await axios.get(
        `/creator/digital/asset/view?id=${assetId}`
      );
      return response.data.data as IAsset;
    },
  });
}

// export function publishCourseApi() {
//   const queryClient = useQueryClient();
//   return useMutation({
//     mutationFn: async (data: ICourse) => {
//       const response = await axios.post(
//         `/creator/course/publish?courseId=${data.id}`,
//         data
//       );
//       return response.data;
//     },
//     onSuccess: (res) => {
//       queryClient.invalidateQueries({ queryKey: ["courses"] });
//       toast.success(res.message);
//     },
//     onError: (error) => {
//       toast.error(error?.message);
//     },
//   });
// }
export function editDigitalAsset() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data) => {
      const response = await axios.put(`/creator/digital/asset/update`, data);
      return response.data;
    },
    onSuccess: (res) => {
      queryClient.invalidateQueries({ queryKey: ["asset-details", res.id] });
      toast.success(res.message);
    },
    onError: (error) => {
      toast.error(error?.message);
    },
  });
}

export function deleteDigitalAsset() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (assetId) => {
      const response = await axios.delete(
        `/creator/digital/asset/delete?id=${assetId}`
      );
      return response.data;
    },
    onSuccess: (res) => {
      console.log(res);
      queryClient.invalidateQueries({ queryKey: ["digitalAssets"] });
      console.log(res);
      toast.success(res.message);
    },
    onError: (error) => {
      toast.error(error?.message);
    },
  });
}

export function viewCreatorJobDetails(jobId: string | undefined) {
  return useQuery({
    queryKey: ["creator-job-details", jobId],
    queryFn: async () => {
      const response = await axios.get(`/creator/job/${jobId}/details`);
      return response.data.data as IJob;
    },
  });
}

export function deleteCreatorJob() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (categoryId: string) => {
      const response = await axios.delete(
        `/creator/job/delete?jobId=${categoryId}`
      );
      return response.data;
    },
    onSuccess: (res) => {
      console.log(res);
      toast.success(res.message);
      queryClient.invalidateQueries({
        queryKey: ["creatorJobs"],
      });
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
  });
}

export function postCreatorJob() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await axios.put(`/creator/job/post`, data);
      return response.data;
    },
    onSuccess: (res) => {
      console.log(res);
      toast.success(res.message);
      queryClient.invalidateQueries({
        queryKey: ["creatorJobs"],
      });
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
  });
}

export function editCreatorJob() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await axios.put(`/creator/job/post`, data);
      return response.data;
    },
    onSuccess: (res) => {
      console.log(res);
      toast.success(res.message);
      queryClient.invalidateQueries({
        queryKey: ["creatorJobs"],
      });
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
  });
}

export function getCreatorAssetCategory() {
  return useQuery({
    queryKey: ["creator-asset-category"],
    queryFn: async () => {
      const response = await axios.get(`/creator/asset/categories`);
      return response.data.data;
    },
  });
}
