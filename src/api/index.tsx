import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;

const getToken = () => localStorage.getItem("we-immersiveUser");

export const registerUser = async (payload: any) => {
  return axios
    .post(`${baseURL}/auth/register/user`, payload)
    .then((response) => response.data);
};

export const registerCreator = async (payload: any) => {
  return axios
    .post(`${baseURL}/auth/register/creator`, payload)
    .then((response) => response.data);
};

export const registerStudent = async (payload: any) => {
  return axios
    .post(`${baseURL}/auth/register/student`, payload)
    .then((response) => response.data);
};

export const registerInstitution = async (payload: any) => {
  return axios
    .post(`${baseURL}/auth/register/institution`, payload)
    .then((response) => response.data);
};

export const verifyEmail = async (payload: any) => {
  return axios
    .post(`${baseURL}/auth/verify/email`, payload)
    .then((response) => response.data);
};

export const resendOTP = async (payload: any) => {
  return axios
    .post(`${baseURL}/auth/resend/verification/email`, payload)
    .then((response) => response.data);
};

export const login = async (payload: any) => {
  return axios
    .post(`${baseURL}/auth/login`, payload)
    .then((response) => response.data);
};

export const createDigitalAsset = async (payload: any, headers = {}) => {
  return axios
    .post(`/creator/digital/asset/create`, payload)
    .then((response) => response.data);
};

export const createPhysicalAsset = async (payload: any, headers = {}) => {
  return axios
    .post(`/creator/physical/asset/create`, payload)
    .then((response) => response.data);
};

export const createAssetCategory = async (payload: any, headers = {}) => {
  return axios
    .post(`/admin/asset/category/create`, payload)
    .then((response) => response.data);
};

export const getDigitalAssets = async () => {
  const response = await axios.get(`${baseURL}/fetch/digital/assets`); // Replace with your API endpoint
  return response.data;
};

export const getPhysicalAssets = async () => {
  const response = await axios.get(`${baseURL}/fetch/physical/assets`); // Replace with your API endpoint
  return response.data;
};

export const loginAdmin = async (payload: any) => {
  return axios
    .post(`https://api.test.weimmersive.io/v1/api/auth/admin/login`, payload)
    .then((response) => response.data);
};

export const getGeneralUsers = async (headers = {}) => {
  const response = await axios.get(`/admin/users`);
  return response.data;
};

export const getStudents = async (headers = {}) => {
  const response = await axios.get(`/admin/students`);
  return response.data;
};

export const getCreators = async (headers = {}) => {
  const response = await axios.get(`/admin/creators`);
  return response.data;
};

export const getInstitutions = async (headers = {}) => {
  const response = await axios.get(`/admin/institutions`);
  return response.data;
};

export const createAdminDigitalAsset = async (payload: any, headers = {}) => {
  return axios
    .post(`/admin/digital/asset/create`, payload)
    .then((response) => response.data);
};

export const createAdminPhysicalAsset = async (payload: any, headers = {}) => {
  return axios
    .post(`/admin/physical/asset/create`, payload)
    .then((response) => response.data);
};

export const getAssetCategory = async (headers = {}) => {
  const response = await axios.get(`/admin/asset/categories`);
  return response.data;
};

export const getCreatorDigitalAssets = async (headers = {}) => {
  const response = await axios.get(`/creator/digital/assets`);
  return response.data;
};

export const getCreatorPhysicalAssets = async (headers = {}) => {
  const response = await axios.get(`/creator/physical/assets`);
  return response.data;
};

export const getJobCategory = async (headers = {}) => {
  const response = await axios.get(`/creator/job/categories`);
  return response.data;
};

export const createJob = async (payload: any, headers = {}) => {
  return axios
    .post(`/creator/job/add`, payload)
    .then((response) => response.data);
};

export const getCreatorJobs = async (headers = {}) => {
  const response = await axios.get(`/creator/jobs`);
  return response.data;
};

export const editJob = async (payload: any, headers = {}) => {
  return axios
    .put(`/creator/job/post`, payload)
    .then((response) => response.data);
};

export const getAllJobs = async (headers = {}) => {
  const response = await axios.get(`/fetch/jobs`);
  return response.data;
};

export const getSingleJob = async (id: string | undefined) => {
  const response = await axios.get(`/view/job?jobId=${id}`);
  return response.data;
};

export const getCourseCategory = async (headers = {}) => {
  const response = await axios.get(`/creator/course/categories`);
  return response.data;
};

export const createCourse = async (payload: any, headers = {}) => {
  return axios
    .post(`/creator/course/create`, payload)
    .then((response) => response.data);
};

export const createBasicCourse = async (payload: any, headers = {}) => {
  return axios
    .post(`/creator/course/basic`, payload)
    .then((response) => response.data);
};

export const createCourseModule = async (payload: any, headers = {}) => {
  return axios
    .post(`/creator/course/module/create`, payload)
    .then((response) => response.data);
};

export const getSingleCourse = async (id: string | undefined) => {
  const response = await axios.get(`/creator/course?courseId=${id}`);
  return response.data;
};

export const getCourseModules = async (id: string | undefined) => {
  const response = await axios.get(`/creator/course/modules?courseId=${id}`);
  return response.data;
};

export const deleteCourseModule = async (id: string | undefined) => {
  return axios
    .delete(`/creator/course/module/delete?moduleId=${id}`)
    .then((response) => response.data);
};

export const deleteLessonApi = async (id: string | undefined) => {
  return axios
    .delete(`/creator/course/module/lesson/delete?lessonId=${id}`)
    .then((response) => response.data);
};

export const createLesson = async (payload: any, headers = {}) => {
  return axios
    .post(`/creator/course/module/lesson/create`, payload)
    .then((response) => response.data);
};

export const getModulesLesson = async (id: string | undefined) => {
  const response = await axios.get(
    `/creator/course/module/lessons?moduleId=${id}`,
  );
  return response.data;
};

export const getCreatorCourses = async (headers = {}) => {
  const response = await axios.get(`/creator/courses`);
  return response.data;
};
export const getAllCoursesGeneral = async (headers = {}) => {
  const response = await axios.get(`/general/courses`);
  return response.data;
};

export const publishCourseApi = async (
  id: string | undefined,
  headers = {},
) => {
  return axios
    .post(
      `${baseURL}/creator/course/publish?courseId=${id}`,
      {},
      {
        headers: {
          ...headers,
          Authorization: `Bearer ${getToken()}`,
          "Content-Type": "application/json",
        },
      },
    )
    .then((response) => response.data);
};
export const unPublishCourseApi = async (
  id: string | undefined,
  headers = {},
) => {
  return axios
    .post(
      `${baseURL}/creator/course/unpublish?courseId=${id}`,
      {},
      {
        headers: {
          ...headers, // Merge custom headers
          Authorization: `Bearer ${getToken()}`, // Example for adding an Authorization token
          "Content-Type": "application/json", // Example for setting content type
        },
      },
    )
    .then((response) => response.data);
};

export const courseThumbnail = async (payload: any, headers = {}) => {
  return axios
    .post(`/creator/course/thumbnail`, payload)
    .then((response) => response.data);
};

const getBearerToken = () => {
  const token = localStorage.getItem("we-immersiveUser");
  return token;
};

axios.defaults.baseURL = baseURL;
// Don't set default authorization header statically - use interceptor instead
axios.interceptors.request.use(
  function (config) {
    const token = getBearerToken();

    console.log("🔍 API Request:", {
      url: config.url,
      method: config.method,
      hasToken: !!token,
      token: token ? `${token.substring(0, 20)}...` : null,
      headers: config.headers,
    });

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    console.error("❌ Request Error:", error);
    return Promise.reject(error);
  },
);
axios.interceptors.response.use(
  (response) => {
    console.log("✅ API Response:", {
      url: response.config.url,
      status: response.status,
      data: response.data,
    });
    return response;
  },
  (error) => {
    console.error("❌ API Error:", {
      url: error.config?.url,
      status: error.response?.status,
      message: error.response?.data?.message || error.message,
      response: error.response?.data,
    });

    if (error?.response?.status === 401) {
      console.warn("🚪 401 Unauthorized - Logging out user");
      // Only clear auth-related data, not all localStorage
      localStorage.removeItem("we-immersiveUser");
      localStorage.removeItem("persist:root");
      return (window.location.href = "/auth/login");
    }
    return Promise.reject(error);
  },
);
