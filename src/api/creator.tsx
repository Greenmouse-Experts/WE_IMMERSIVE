import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";

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
