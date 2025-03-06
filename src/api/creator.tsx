import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";
import { IAsset } from "../types/asset.types";

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
