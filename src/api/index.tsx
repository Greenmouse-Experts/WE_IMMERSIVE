import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;


const token = localStorage.getItem("we-immersiveUser");

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
    .post(`${baseURL}/creator/digital/asset/create`, payload, {
      headers: {
        ...headers, // Merge custom headers
        Authorization: `Bearer ${token}`, // Example for adding an Authorization token
        "Content-Type": "application/json", // Example for setting content type
      },
    })
    .then((response) => response.data);
};

export const createPhysicalAsset = async (payload: any, headers = {}) => {
  return axios
    .post(`${baseURL}/creator/physical/asset/create`, payload, {
      headers: {
        ...headers, // Merge custom headers
        Authorization: `Bearer ${token}`, // Example for adding an Authorization token
        "Content-Type": "application/json", // Example for setting content type
      },
    })
    .then((response) => response.data);
};

export const createAssetCategory = async (payload: any, headers = {}) => {
  return axios
    .post(`${baseURL}/admin/asset/category/create`, payload, {
      headers: {
        ...headers, // Merge custom headers
        Authorization: `Bearer ${token}`, // Example for adding an Authorization token
        "Content-Type": "application/json", // Example for setting content type
      },
    })
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
  const response = await axios.get(`${baseURL}/admin/users`, {
    headers: {
      ...headers, // Merge custom headers
      Authorization: `Bearer ${token}`, // Add Authorization token
      "Content-Type": "application/json", // Set content type
    },
  });
  return response.data;
};

export const getStudents = async (headers = {}) => {
  const response = await axios.get(`${baseURL}/admin/students`, {
    headers: {
      ...headers, // Merge custom headers
      Authorization: `Bearer ${token}`, // Add Authorization token
      "Content-Type": "application/json", // Set content type
    },
  });
  return response.data;
};

export const getCreators = async (headers = {}) => {
  const response = await axios.get(`${baseURL}/admin/creators`, {
    headers: {
      ...headers, // Merge custom headers
      Authorization: `Bearer ${token}`, // Add Authorization token
      "Content-Type": "application/json", // Set content type
    },
  });
  return response.data;
};

export const getInstitutions = async (headers = {}) => {
  const response = await axios.get(`${baseURL}/admin/institutions`, {
    headers: {
      ...headers, // Merge custom headers
      Authorization: `Bearer ${token}`, // Add Authorization token
      "Content-Type": "application/json", // Set content type
    },
  });
  return response.data;
};

export const createAdminDigitalAsset = async (payload: any, headers = {}) => {
  return axios
    .post(`${baseURL}/admin/digital/asset/create`, payload, {
      headers: {
        ...headers, // Merge custom headers
        Authorization: `Bearer ${token}`, // Example for adding an Authorization token
        "Content-Type": "application/json", // Example for setting content type
      },
    })
    .then((response) => response.data);
};

export const createAdminPhysicalAsset = async (payload: any, headers = {}) => {
  return axios
    .post(`${baseURL}/admin/physical/asset/create`, payload, {
      headers: {
        ...headers, // Merge custom headers
        Authorization: `Bearer ${token}`, // Example for adding an Authorization token
        "Content-Type": "application/json", // Example for setting content type
      },
    })
    .then((response) => response.data);
};

export const getAssetCategory = async (headers = {}) => {
  const response = await axios.get(`${baseURL}/admin/asset/categories`, {
    headers: {
      ...headers, // Merge custom headers
      Authorization: `Bearer ${token}`, // Add Authorization token
      "Content-Type": "application/json", // Set content type
    },
  });
  return response.data;
};

export const getCreatorDigitalAssets = async (headers = {}) => {
  const response = await axios.get(`${baseURL}/creator/digital/assets`, {
    headers: {
      ...headers, // Merge custom headers
      Authorization: `Bearer ${token}`, // Add Authorization token
      "Content-Type": "application/json", // Set content type
    },
  });
  return response.data; // Replace with your API endpoint
};

export const getCreatorPhysicalAssets = async (headers = {}) => {
  const response = await axios.get(`${baseURL}/creator/physical/assets`, {
    headers: {
      ...headers, // Merge custom headers
      Authorization: `Bearer ${token}`, // Add Authorization token
      "Content-Type": "application/json", // Set content type
    },
  });
  return response.data; // Replace with your API endpoint
};

export const getJobCategory = async (headers = {}) => {
  const response = await axios.get(`${baseURL}/creator/job/categories`, {
    headers: {
      ...headers, // Merge custom headers
      Authorization: `Bearer ${token}`, // Add Authorization token
      "Content-Type": "application/json", // Set content type
    },
  });
  return response.data; // Replace with your API endpoint
};

export const createJob = async (payload: any, headers = {}) => {
  return axios
    .post(`${baseURL}/creator/job/add`, payload, {
      headers: {
        ...headers, // Merge custom headers
        Authorization: `Bearer ${token}`, // Example for adding an Authorization token
        "Content-Type": "application/json", // Example for setting content type
      },
    })
    .then((response) => response.data);
};

export const getCreatorJobs = async (headers = {}) => {
  const response = await axios.get(`${baseURL}/creator/jobs`, {
    headers: {
      ...headers, // Merge custom headers
      Authorization: `Bearer ${token}`, // Add Authorization token
      "Content-Type": "application/json", // Set content type
    },
  });
  return response.data; // Replace with your API endpoint
};

export const editJob = async (payload: any, headers = {}) => {
  return axios
    .put(`${baseURL}/creator/job/post`, payload, {
      headers: {
        ...headers, // Merge custom headers
        Authorization: `Bearer ${token}`, // Example for adding an Authorization token
        "Content-Type": "application/json", // Example for setting content type
      },
    })
    .then((response) => response.data);
};

export const getAllJobs = async (headers = {}) => {
  const response = await axios.get(`${baseURL}/fetch/jobs`, {
    headers: {
      ...headers, // Merge custom headers
      Authorization: `Bearer ${token}`, // Add Authorization token
      "Content-Type": "application/json", // Set content type
    },
  });
  return response.data; // Replace with your API endpoint
};

export const getSingleJob = async (id: string | undefined) => {
  const response = await axios.get(`${baseURL}/view/job?jobId=${id}`, {
    headers: {
      Authorization: `Bearer ${token}`, // Add Authorization token
      "Content-Type": "application/json", // Set content type
    },
  });
  return response.data; // Return the API response data
};

export const getCourseCategory = async (headers = {}) => {
  const response = await axios.get(`${baseURL}/creator/course/categories`, {
    headers: {
      ...headers, // Merge custom headers
      Authorization: `Bearer ${token}`, // Add Authorization token
      "Content-Type": "application/json", // Set content type
    },
  });
  return response.data; // Replace with your API endpoint
};

export const createCourse = async (payload: any, headers = {}) => {
  return axios
    .post(`${baseURL}/creator/course/create`, payload, {
      headers: {
        ...headers, // Merge custom headers
        Authorization: `Bearer ${token}`, // Example for adding an Authorization token
        "Content-Type": "application/json", // Example for setting content type
      },
    })
    .then((response) => response.data);
};

export const createCourseBasic = async (payload: any, headers = {}) => {
  return axios
    .post(`${baseURL}/creator/course/basic`, payload, {
      headers: {
        ...headers, // Merge custom headers
        Authorization: `Bearer ${token}`, // Example for adding an Authorization token
        "Content-Type": "application/json", // Example for setting content type
      },
    })
    .then((response) => response.data);
};

export const createCourseModule = async (payload: any, headers = {}) => {
  return axios
    .post(`${baseURL}/creator/course/module/create`, payload, {
      headers: {
        ...headers, // Merge custom headers
        Authorization: `Bearer ${token}`, // Example for adding an Authorization token
        "Content-Type": "application/json", // Example for setting content type
      },
    })
    .then((response) => response.data);
};

export const getSingleCourse = async (id: string | undefined) => {
  const response = await axios.get(`${baseURL}/creator/course?courseId=${id}`, {
    headers: {
      Authorization: `Bearer ${token}`, // Add Authorization token
      "Content-Type": "application/json", // Set content type
    },
  });
  return response.data; // Replace with your API endpoint
};

export const getCourseModules = async (id: string | undefined) => {
  const response = await axios.get(
    `${baseURL}/creator/course/modules?courseId=${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`, // Add Authorization token
        "Content-Type": "application/json", // Set content type
      },
    }
  );
  return response.data; // Replace with your API endpoint
};

export const deleteCourseModule = async (id: string | undefined) => {
  return axios
    .delete(`${baseURL}/creator/course/module/delete?moduleId=${id}`, {
      headers: {
        Authorization: `Bearer ${token}`, // Example for adding an Authorization token
        "Content-Type": "application/json", // Example for setting content type
      },
    })
    .then((response) => response.data);
};

export const deleteLessonApi = async (id: string | undefined) => {
  return axios
    .delete(`${baseURL}/creator/course/module/lesson/delete?lessonId=${id}`, {
      headers: {
        Authorization: `Bearer ${token}`, // Example for adding an Authorization token
        "Content-Type": "application/json", // Example for setting content type
      },
    })
    .then((response) => response.data);
};

export const createLessons = async (payload: any, headers = {}) => {
  return axios
    .post(`${baseURL}/creator/course/module/lesson/create`, payload, {
      headers: {
        ...headers, // Merge custom headers
        Authorization: `Bearer ${token}`, // Example for adding an Authorization token
        "Content-Type": "application/json", // Example for setting content type
      },
    })
    .then((response) => response.data);
};

export const getModulesLesson = async (id: string | undefined) => {
  const response = await axios.get(
    `${baseURL}/creator/course/module/lessons?moduleId=${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`, // Add Authorization token
        "Content-Type": "application/json", // Set content type
      },
    }
  );
  return response.data; // Replace with your API endpoint
};

export const getAllCreatorCourses = async (headers = {}) => {
  const response = await axios.get(`${baseURL}/creator/courses`, {
    headers: {
      ...headers, // Merge custom headers
      Authorization: `Bearer ${token}`, // Add Authorization token
      "Content-Type": "application/json", // Set content type
    },
  });
  return response.data; // Replace with your API endpoint
};
export const getAllCoursesGeneral = async (headers = {}) => {
  const response = await axios.get(`${baseURL}/general/courses`, {
    headers: {
      ...headers, // Merge custom headers
      Authorization: `Bearer ${token}`, // Add Authorization token
      "Content-Type": "application/json", // Set content type
    },
  });
  return response.data; // Replace with your API endpoint
};

export const publishCourseApi = async (
  id: string | undefined,
  headers = {}
) => {
  return axios
    .post(`${baseURL}/creator/course/publish?courseId=${id}`, {}, {
      headers: {
        ...headers, // Merge custom headers
        Authorization: `Bearer ${token}`, // Example for adding an Authorization token
        "Content-Type": "application/json", // Example for setting content type
      },
    })
    .then((response) => response.data);
};

export const courseThumbnail = async (payload: any, headers = {}) => {
  return axios
    .post(`${baseURL}/creator/course/thumbnail`, payload, {
      headers: {
        ...headers, // Merge custom headers
        Authorization: `Bearer ${token}`, // Example for adding an Authorization token
        "Content-Type": "application/json", // Example for setting content type
      },
    })
    .then((response) => response.data);
};


const getBearerToken = () => {
  const token = localStorage.getItem("we-immersiveUser");
  return `Bearer ${token}`;
};

axios.defaults.baseURL = baseURL;
axios.defaults.headers.common["Authorization"] = getBearerToken();
axios.interceptors.request.use(
  function (config) {
    const token = getBearerToken();
   
    if (token) {
      config.headers["Authorization"] = token;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error?.response?.status === 401) {
      // localStorage.clear();
      // return (window.location.href = "/login");
    }
    return Promise.reject(error);
  }
);