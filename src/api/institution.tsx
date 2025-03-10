import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";

export function getInstitutionJobCategory(){
  return useQuery({
    queryKey: ["institution-jobs-category"],
    queryFn: async() => {
      const response = await axios.get(`/institution/job/categories`);
      return response.data.data;
    },
  });
};
export function getInstitutionJob() {
  return useQuery({
    queryKey: ["institution-jobs"],
    queryFn: async () => {
      const response = await axios.get(`/institution/jobs`);
      return response.data.data;
    },
  });
}
// institution/job/categories

export function addInstitutionJob() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await axios.post(`/institution/job/add`, data);
      return response.data;
    },
    onSuccess: (res) => {
      console.log(res);
      toast.success(res.message);
      queryClient.invalidateQueries({
        queryKey: ["institution-jobs"],
      });
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
  });
}

export function deleteInstitutionJob() {
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
        queryKey: ["institution-jobs"],
      });
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
  });
}

export function editInstitutionJob() {
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
        queryKey: ["institution-jobs"],
      });
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
  });
}
