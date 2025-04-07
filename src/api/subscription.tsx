import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { IBankDetails, ISubscription } from "../types/subscription.types";
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
export function verifyPayment() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await axios.post(`/subscription/verify-payment`, data);
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

export function addBankDetails() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await axios.post(`/withdrawal/account/create`, data);
      return response.data;
    },
    onSuccess: (res) => {
      console.log(res);
      toast.success(res.message);
      queryClient.invalidateQueries({
        queryKey: ["bank-details"],
      });
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
  });
}


export function requestWithdrawal() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await axios.post(`/withdrawal/request`, data);
      return response.data;
    },
    onSuccess: (res) => {
      console.log(res);
      toast.success(res.message);
      queryClient.invalidateQueries({
        queryKey: ["bank-details"],
      });
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
  });
}

export function getAllAccounts() {
  return useQuery({
    queryKey: ["bank-details"],
    queryFn: async () => {
      const response = await axios.get(`/withdrawal/account`);
      return response.data.data as IBankDetails[];
    },
  });
}



