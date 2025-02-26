import { toast } from "react-toastify";

const MAX_VIDEO_SIZE_MB = 50; // Maximum allowed video size in MB
const MAX_IMAGE_SIZE_MB = 5; // Maximum allowed image size in MB

export const uploadFile = async (event, type ) => {
  try {
    const file = event.target.files[0];
    if (!file) {
      throw new Error("No file selected.");
    }

    const { size, name, type: mimeType } = file;
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
