import { useQuery } from "@tanstack/react-query";
import axios from "axios";
// import { toast } from "react-toastify";

export function getUserStats() {
    return useQuery({
      queryKey: ["user-stats"],
      queryFn: async () => {
        const response = await axios.get(
          `/stat/user/landing`
        );
        return response.data 
      },
    });
  }
export function getUserAnalytics() {
    return useQuery({
      queryKey: ["user-analytics"],
      queryFn: async () => {
        const response = await axios.get(
          `/analysis/user/landing`
        );
        return response.data 
      },
    });
  }