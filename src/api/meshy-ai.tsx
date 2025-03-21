import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { IMeshiResponse } from "../types/meshy.types";

const meshyAxios = axios.create({
  baseURL: "https://api.meshy.ai/openapi/v2",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_MESHY_KEY}`,
  },
});
const meshyAxiosImage = axios.create({
  baseURL: "https://api.meshy.ai/openapi/v1",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_MESHY_KEY}`,
  },
});

export function generateTextTo3D() {
  // const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data) => {
      const response = await meshyAxios.post(
        `https://api.meshy.ai/openapi/v2/text-to-3d`,
        data
      );
      return response.data;
    },
    onSuccess: (res) => {
      console.log(res);
      // queryClient.invalidateQueries({ queryKey: [""] });
      // toast.success("Preview generated");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
}
export function textTo3DRefine() {
  // const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await meshyAxios.post(
        `https://api.meshy.ai/openapi/v2/text-to-3d`,
        data
      );
      return response.data;
    },
    onSuccess: (res) => {
      console.log(res);
      // queryClient.invalidateQueries({ queryKey: [""] });
      // toast.success(res.message);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
}

export function useGetTextTo3DTaskById() {
  return useMutation({
    mutationFn: async (taskId: string): Promise<IMeshiResponse> => {
      const response = await meshyAxios.get(
        `https://api.meshy.ai/openapi/v2/text-to-3d/${taskId}`
      );
      return response.data;
    },
  });
}

export function generateImageTo3d() {
  return useMutation({
    mutationFn: async (data) => {
      const response = await meshyAxiosImage.post(
        `https://api.meshy.ai/openapi/v1/image-to-3d`,
        data
      );
      return response.data;
    },
    onSuccess: (res) => {
      console.log(res);
      // queryClient.invalidateQueries({ queryKey: [""] });
      // toast.success("Preview generated");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
}

export function useGetImageTo3dByTaskId() {
  return useMutation({
    mutationFn: async (taskId: string): Promise<IMeshiResponse> => {
      const response = await meshyAxiosImage.get(
        `https://api.meshy.ai/openapi/v1/image-to-3d/${taskId}`
      );
      return response.data;
    },
  });
}
