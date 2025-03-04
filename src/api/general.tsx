import { useQuery } from "@tanstack/react-query";
import axios from "axios";

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
