import { toast } from "react-toastify";

const MAX_VIDEO_SIZE_MB = 100; // Maximum allowed video size in MB
const MAX_IMAGE_SIZE_MB = 5; // Maximum allowed image size in MB

export const uploadFile = async (event:any, type:any ) => {
  console.log(type)
  try {
    const file = event.target.files[0];
    if (!file) {
      throw new Error("No file selected.");
    }

    const { size, name, type: mimeType } = file;
    console.log(name)
    const isVideo = mimeType.startsWith("video");
    const isImage = mimeType.startsWith("image");

    if (isVideo && size / (1024 * 1024) > MAX_VIDEO_SIZE_MB) {
      alert(`The video size exceeds the maximum limit of ${MAX_VIDEO_SIZE_MB} MB.`);
      return { isLoading: false, isError: true, isSuccess: false, fileUrl: null };
    }

    if (isImage && size / (1024 * 1024) > MAX_IMAGE_SIZE_MB) {
      alert(`The image size exceeds the maximum limit of ${MAX_IMAGE_SIZE_MB} MB.`);
      return { isLoading: false, isError: true, isSuccess: false, fileUrl: null };
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "mobil_holder");
    
    const cloudinaryUrl = `https://api.cloudinary.com/v1_1/do2kojulq/upload`;
    const response = await fetch(cloudinaryUrl, {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.secure_url) {
        toast.success(`upload successful`)
      return { isLoading: false, isSuccess: true, isError: false, fileUrl: data.secure_url };
    } else {
      console.error("Cloudinary upload failed:", data);
      return { isLoading: false, isError: true, isSuccess: false, fileUrl: null };
    }
  } catch (error) {
    console.error("Error uploading file:", error);
    return { isLoading: false, isError: true, isSuccess: false, fileUrl: null };
  }
};
export const uploadImage = async (file: File ) => {
  try {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "mobil_holder");

    const response = await fetch("https://api.cloudinary.com/v1_1/do2kojulq/upload", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    return response.ok ? { isSuccess: true, fileUrl: data.secure_url } : { isSuccess: false };
  } catch (error) {
    console.error("Image upload failed:", error);
    return { isSuccess: false };
  }
};

export const uploadAudio = async (audioBlob: Blob) => {
  let isLoading = true;
  try {
    const formData = new FormData();
    formData.append("file", audioBlob);
    formData.append("upload_preset", "mobil_holder");
    formData.append("resource_type", "video"); // Cloudinary treats audio as "video"

    const response = await fetch("https://api.cloudinary.com/v1_1/do2kojulq/upload", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    isLoading = false;

    return response.ok
      ? { isSuccess: true, fileUrl: data.secure_url, isLoading }
      : { isSuccess: false, isLoading };
  } catch (error) {
    console.error("Audio upload failed:", error);
    isLoading = false;
    return { isSuccess: false, isLoading };
  }
};


export const upload3DModel = async (event: React.ChangeEvent<HTMLInputElement>) => {
  try {
    const fileInput = event.target.files;
    if (!fileInput || fileInput.length === 0) {
      throw new Error("No file selected.");
    }

    const file = fileInput[0];
    if (!file) {
      throw new Error("Invalid file selection.");
    }

    console.log("file: ", file);

    // Upload file to Cloudinary
    const cloudUrl = await handleModelUpload(file);

    if (!cloudUrl) {
      throw new Error("Failed to upload file to Cloudinary.");
    }

    return {
      isLoading: false,
      isSuccess: true,
      isError: false,
      fileUrl: cloudUrl,
    };
  } catch (error:any) {
    console.error("Error uploading file:", error);
    alert(error.message || "An unexpected error occurred.");
    return { isLoading: false, isError: true, isSuccess: false, fileUrl: null };
  }
};

const handleModelUpload = async (file: File) => {
  try {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "mobil_holder");

    const response = await fetch(
      "https://api.cloudinary.com/v1_1/do2kojulq/upload",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();
    if (response.ok) {
      return data.secure_url; // Return Cloudinary's file URL
    } else {
      console.error("Cloudinary upload error:", data);
      return null;
    }
  } catch (error) {
    console.error("Error uploading to Cloudinary:", error);
    return null;
  }
};
