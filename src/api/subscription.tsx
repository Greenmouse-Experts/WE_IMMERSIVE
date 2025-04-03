import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { ISubscription } from "../types/subscription.types";
import { toast } from "react-toastify";

export function getSubscriptions() {
  return useQuery({
    queryKey: ["subscriptions-general"],
    queryFn: async () => {
      const response = await axios.get(`/subscription-plans/fetch`);
      return response.data.data as ISubscription[];
    },
  });
}

export function subscribe() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await axios.post(`/subscription/subscribe`, data);
      return response.data;
    },
    onSuccess: (res) => {
      console.log(res);
      toast.success(res.message);
      queryClient.invalidateQueries({
        queryKey: ["subscriptions-general"],
      });
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
  });
}
