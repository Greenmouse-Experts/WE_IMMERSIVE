import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";
import { ICoupon } from "../types/coupon.types";

export function getCoupons() {
  return useQuery({
    queryKey: ["coupons"],
    queryFn: async () => {
      const response = await axios.get(`/coupon`);
      return response.data.data;
    },
  });
}

export function addCoupon() {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: async (data: any) => {
        const response = await axios.post(`/coupon`, data);
        return response.data as ICoupon;
      },
      onSuccess: (res:any) => {
        toast.success(res.message);
        queryClient.invalidateQueries({
          queryKey: ["coupons"],
        });
      },
      onError: (error: any) => {
        toast.error(error.response.data.message);
      },
    });
  }

  export function updateCoupon() {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: async (data: any) => {
        const response = await axios.put(`/coupon/${data.id}`, data);
        return response.data;
      },
      onSuccess: (res) => {
        console.log(res);
        toast.success(res.message);
        queryClient.invalidateQueries({
          queryKey: ["coupons"],
        });
      },
      onError: (error: any) => {
        toast.error(error.response.data.message);
      },
    });
  }
  export function deleteCoupon() {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: async (couponId: string) => {
        const response = await axios.delete(`/coupon/${couponId}`);
        return response.data;
      },
      onSuccess: (res) => {
        console.log(res);
        toast.success(res.message);
        queryClient.invalidateQueries({
          queryKey: ["coupons"],
        });
      },
      onError: (error: any) => {
        toast.error(error.response.data.message);
      },
    });
  }