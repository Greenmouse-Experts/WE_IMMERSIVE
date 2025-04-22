import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";
import { IAsset } from "../types/asset.types";
import { IJob } from "../types/job.types";

export function getModuleLessons(lessonId: string | undefined) {
  return useQuery({
    queryKey: ["lessonModules", lessonId],
    queryFn: async () => {
      const response = await axios.get(
        `creator/course/module/${lessonId}/details`
      );
      return response.data.data as any;
    },
  });
}
export function getModuleAssignments(moduleId: string | undefined) {
  return useQuery({
    queryKey: ["moduleAssignment"],
    queryFn: async () => {
      const response = await axios.get(
        `creator/course/lesson/assignments?moduleId=${moduleId}`
      );
      return response.data.data as any;
    },
  });
}

export function deleteAssignment() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (assignmentId) => {
      const response = await axios.delete(
        `creator/course/lesson/assignment/delete?assignmentId=${assignmentId}`
      );
      return response.data;
    },
    onSuccess: (res) => {
      queryClient.invalidateQueries({ queryKey: ["moduleAssignment"] });
      toast.success(res.message);
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
  });
}

export function getModuleQuizzes(lessonQuizId: string | undefined) {
  return useQuery({
    queryKey: ["modulesQuiz"],
    queryFn: async () => {
      const response = await axios.get(
        // `/creator/course/module/lessons?moduleId=${lessonId}`'
        `creator/course/lesson/quiz/questions?lessonQuizId=${lessonQuizId}`
      );
      return response.data.data as any;
    },
  });
}
export function deleteQuizQuestion() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (quizId) => {
      const response = await axios.delete(
        `creator/course/lesson/quiz/question/delete?questionId=${quizId}`
      );
      return response.data;
    },
    onSuccess: (res) => {
      console.log(res);
      queryClient.invalidateQueries({ queryKey: ["modulesQuiz"] });
      toast.success(res.message);
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
  });
}

export function createQuizBasic() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await axios.post(
        `creator/course/lesson/quiz/create`,
        data
      );
      return response.data;
    },
    onSuccess: (res) => {
      queryClient.invalidateQueries({ queryKey: ["lessonModules"] });
      toast.success(res.message);
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
  });
}
export function deleteQuizBasic() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (quizId) => {
      const response = await axios.delete(
        `creator/course/lesson/quiz/delete?quizId=${quizId}`
      );
      return response.data;
    },
    onSuccess: (res) => {
      queryClient.invalidateQueries({ queryKey: ["lessonModules"] });
      toast.success(res.message);
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
  });
}

export function createQuizQuestion() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await axios.post(
        `creator/course/lesson/quiz/question/create`,
        data
      );
      return response.data;
    },
    onSuccess: (res) => {
      queryClient.invalidateQueries({
        queryKey: ["lessonModules", "modulesQuiz"],
      });
      toast.success(res.message);
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
  });
}
export function updateQuizQuestion() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await axios.put(
        `/creator/course/lesson/quiz/question/update`,
        data
      );
      return response.data;
    },
    onSuccess: (res) => {
      queryClient.invalidateQueries({ queryKey: ["modulesQuiz"] });
      toast.success(res.message);
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
  });
}
export function createAssignment() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await axios.post(
        `/creator/course/lesson/assignment/create`,
        data
      );
      return response.data;
    },
    onSuccess: (res) => {
      queryClient.invalidateQueries({ queryKey: ["moduleAssignment"] });
      toast.success(res.message);
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
  });
}
export function updateAssignment() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await axios.put(
        `/creator/course/lesson/assignment/update`,
        data
      );
      return response.data;
    },
    onSuccess: (res) => {
      queryClient.invalidateQueries({ queryKey: ["moduleAssignment"] });
      toast.success(res.message);
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
  });
}

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
export function getPhysicalAssetDetails(assetId: string | undefined) {
  return useQuery({
    queryKey: ["physical-asset-details", assetId],
    queryFn: async () => {
      const response = await axios.get(
        `/creator/physical/asset/view?id=${assetId}`
      );
      return response.data.data as IAsset;
    },
  });
}

// export function publishCourseApi() {
//   const queryClient = useQueryClient();
//   return useMutation({
//     mutationFn: async (data: ICourse) => {
//       const response = await axios.post(
//         `/creator/course/publish?courseId=${data.id}`,
//         data
//       );
//       return response.data;
//     },
//     onSuccess: (res) => {
//       queryClient.invalidateQueries({ queryKey: ["courses"] });
//       toast.success(res.message);
//     },
//     onError: (error) => {
//       toast.error(error?.message);
//     },
//   });
// }
export function editDigitalAsset() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await axios.put(`/creator/digital/asset/update`, data);
      return response.data;
    },
    onSuccess: (res) => {
      queryClient.invalidateQueries({
        queryKey: ["digitalAssets", res.id],
      });
      toast.success(res.message);
    },
    onError: (error) => {
      toast.error(error?.message);
    },
  });
}
export function editPhysicalAsset() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await axios.put(`/creator/physical/asset/update`, data);
      return response.data;
    },
    onSuccess: (res) => {
      queryClient.invalidateQueries({
        queryKey: ["asset-details", "physicalAssets", res.id],
      });
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

export function viewCreatorJobDetails(jobId: string | undefined) {
  return useQuery({
    queryKey: ["creator-job-details", jobId],
    queryFn: async () => {
      const response = await axios.get(`/creator/job/${jobId}/details`);
      return response.data.data as IJob;
    },
  });
}
export function getCreatorAnalytics() {
  return useQuery({
    queryKey: ["creator-analytics"],
    queryFn: async () => {
      const response = await axios.get(`/analysis/creator/yearly/landing`);
      return response.data;
    },
  });
}
export function getCreatorStats() {
  return useQuery({
    queryKey: ["creator-stats"],
    queryFn: async () => {
      const response = await axios.get(`/stat/creator/landing`);
      return response.data.data;
    },
  });
}

export function deleteCreatorJob() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (categoryId: string) => {
      const response = await axios.delete(
        `/creator/job/delete?jobId=${categoryId}`
      );
      return response.data;
    },
    onSuccess: (res) => {
      console.log(res);
      toast.success(res.message);
      queryClient.invalidateQueries({
        queryKey: ["creatorJobs"],
      });
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
  });
}

export function postCreatorJob() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await axios.put(`/creator/job/post`, data);
      return response.data;
    },
    onSuccess: (res) => {
      console.log(res);
      toast.success(res.message);
      queryClient.invalidateQueries({
        queryKey: ["creatorJobs"],
      });
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
  });
}

export function editCreatorJob() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await axios.put(`/creator/job/post`, data);
      return response.data;
    },
    onSuccess: (res) => {
      console.log(res);
      toast.success(res.message);
      queryClient.invalidateQueries({
        queryKey: ["creatorJobs"],
      });
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
  });
}

export function getCreatorAssetCategory() {
  return useQuery({
    queryKey: ["creator-asset-category"],
    queryFn: async () => {
      const response = await axios.get(`/creator/asset/categories`);
      return response.data.data;
    },
  });
}

export function getCourseCategory() {
  return useQuery({
    queryKey: ["course-category"],
    queryFn: async () => {
      const response = await axios.get(`/creator/course/categories`);
      return response.data.data;
    },
  });
}

export function publishCourseApi() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      const response = await axios.post(`/creator/course/publish?courseId=${id}`, {});
      return response.data;
    },
    onSuccess: (res) => {
      console.log(res);
      toast.success(res.message);
      queryClient.invalidateQueries({
        queryKey: ["courses"],
      });
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
  });
}

export function unPublishCourseApi() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      const response = await axios.post(`/creator/course/unpublish?courseId=${id}`, {});
      return response.data;
    },
    onSuccess: (res) => {
      console.log(res);
      toast.success(res.message);
      queryClient.invalidateQueries({
        queryKey: ["courses"],
      });
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
  });
}
export function deleteCourseApi() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      const response = await axios.delete(`/creator/course/delete/${id}`, {});
      return response.data;
    },
    onSuccess: (res) => {
      console.log(res);
      toast.success(res.message);
      queryClient.invalidateQueries({
        queryKey: ["courses"],
      });
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
  });
}

// export const publishCourseApi = async (
//   id: string | undefined,
//   headers = {}
// ) => {
//   return axios
//     .post(`${baseURL}/creator/course/publish?courseId=${id}`, {}, {
//       headers: {
//         ...headers, 
//         Authorization: `Bearer ${token}`,
//         "Content-Type": "application/json", 
//       },
//     })
//     .then((response) => response.data);
// };
// export const unPublishCourseApi = async (
//   id: string | undefined,
//   headers = {}
// ) => {
//   return axios
//     .post(`${baseURL}/creator/course/unpublish?courseId=${id}`, {}, {
//       headers: {
//         ...headers, // Merge custom headers
//         Authorization: `Bearer ${token}`, // Example for adding an Authorization token
//         "Content-Type": "application/json", // Example for setting content type
//       },
//     })
//     .then((response) => response.data);
// };