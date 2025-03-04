import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { IJob } from "../types/job.types";
import { toast } from "react-toastify";

export function getGeneralCourseDetails(courseId: string | undefined) {
  return useQuery({
    queryKey: ["general-course-details", courseId],
    queryFn: async () => {
      const response = await axios.get(`/general/course/${courseId}`);
      return response.data.data;
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
    mutationFn: async (jobId:string) => {
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
