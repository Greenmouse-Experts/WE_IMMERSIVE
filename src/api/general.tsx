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