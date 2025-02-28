import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export function getEnrolledCourses() {
  return useQuery({
    queryKey: ["enrolled-courses"],
    queryFn: async () => {
      const response = await axios.get(`/student/enrolled-courses`);
      return response.data.data;
    },
  });
}
export function getEnrolledCourseDetails(courseId: string | undefined) {
  return useQuery({
    queryKey: ["enrolled-courses-details", courseId],
    queryFn: async () => {
      const response = await axios.get(`/student/course/${courseId}`);
      return response.data.data;
    },
  });
}

export function saveCourseProgress() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data) => {
      const response = await axios.post(`student/course-progress/save`, data);
      return response.data.data;
    },
    onSuccess: (res) => {
      queryClient.invalidateQueries({ queryKey: [""] });
      toast.success(res.message);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
}

export function enrollForACourse() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (courseId: string | undefined) => {
      const response = await axios.post(
        `/student/course/${courseId}/enroll`,
        {}
      );
      return response.data.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["courses", "general-courses"],
      });
      toast.success("Successfully enrolled in the course");
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
  });
}
