import { useEffect, useState } from "react";
// import Button from "../../components/ui/Button";
// import { useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import TextInput, { InputType } from "../../components/ui/TextInput";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { IoCopyOutline } from "react-icons/io5";
import { TbReload } from "react-icons/tb";
// import ArrowsIcon from "../../assets/svg-components/arrows";
import {
  generateTextTo3D,
  textTo3DRefine,
  useGetTextTo3DTaskById,
} from "../../api/meshy-ai";
import { BeatLoader } from "react-spinners";
// import { ThreeDViewer } from "../../modules/landing/assets/asset-details";
// import { upload3DModel } from "../../helpers";
import { Dialog, Progress } from "@material-tailwind/react";
import AiModelPreview from "../../components/AiModelPreview";
// import ModelGenerationTracker from "../../components/ModelGenerationTracker";
import { IMeshiResponse } from "../../types/meshy.types";
// import { ThreeDViewer } from "../../modules/landing/assets/asset-details";

const CreateAssetWithAiText = () => {
  // const navigate = useNavigate();
  const { mutate: generateModel, isPending } = generateTextTo3D();
  const [generatedModel, setGeneratedModel] = useState<IMeshiResponse | any>(
    null
  );
  const [refinedModel, setRefinedModel] = useState<IMeshiResponse | any>(null);
  const [refinedProgress, setRefinedProgress] = useState(0);
  const [previewProgress, setPreviewProgress] = useState(0);
 

  const {
    mutate: refineUploadedModel,
    isPending: isRefining
  } = textTo3DRefine();
  const {
    mutate: fetch3DTask,
    isPending: isCheckingProgress,
  } = useGetTextTo3DTaskById();
  const { mutate: fetchFinalResult, isPending: isGettingRefined } =
    useGetTextTo3DTaskById();

  const isProcessing = isPending || isRefining || isCheckingProgress;

  console.log("final result", refinedModel);
  // const { data: task, isLoading } = getTextTo3DTaskById(
  //   "0195b334-19ff-7d23-9475-9892f25af99e"
  // );
  // const [activeTab, setActiveTab] = useState("realistic");
  const [taskId, setTaskId] = useState("");
 
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      prompt: "",
    },
  });
  // const barItems = ["realistic", "sculpture"];

  // async function downloadAndUpload(url) {
  //   const response = await fetch(url, { mode: "no-cors" });
  //   const blob = await response.blob();
  //   const file = new File([blob], "model.glb", { type: "model/gltf-binary" });

  //   // Upload to Cloudinary
  //   const cloudinaryURL = await upload3DModel(file);
  //   console.log("Cloudinary Model URL:", cloudinaryURL);
  // }

  // const meshAIURL =
  //   "https://assets.meshy.ai/bfabf1ea-5caf-409e-88b6-960f32c53357/tasks/0195b334-19ff-7d23-9475-9892f25af99e/output/model.glb?Expires=4896028800&Signature=Ozzg-JNTGH6uOiDh9MPh6wlqAUeqLEvO9vgPV6Hfp~r5sXYRsb-JeMvtRXUIQnZ5opIxECtXOZ4h0UeMOWrT-RHzc133H0rWARyXM1YIyHp9nEHI121nhAUvLmFZkAsUnXNeoKmDkuLI7HSoHR6UVtrTuIT6M0pcePXsbu0aDObkvjaEVdGq8dCwMmUU6Ia98ir50H4y0H8-1FRPn7AFZ6M-4dwM9xg216o5SqNn3QxFPNp6uwYoG3N0E9QrOcr~foURqBcWKajFcwLLTqRou60eLq6YyMBJAfOIMV79RRqtU4z7MuwaSb6gcOI-o~x0Z2QOUQtmJPRxERHSOvYVjg__&Key-Pair-Id=KL5I0C8H7HX83";
  // downloadAndUpload(meshAIURL);
  const [previewModal, setShowPreviewModal] = useState<boolean>(false);
  const handleOpenModal = () => setShowPreviewModal(!previewModal);
  const [refinedDialog, setRefinedDialog] = useState(false);
  const handleRefinedOpenModal = () => setRefinedDialog(!refinedDialog);


  const [isInitializing, setIsInitializing] = useState(false);
  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (isInitializing) {
        event.preventDefault();
        event.returnValue =
          "Are you sure you want to leave? Your initialization is still in progress.";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [isInitializing]);

  const startInitialization = () => {
    setIsInitializing(true);
  
  };

  const onSubmit = (data: any) => {
    startInitialization();
    generateModel(
      {
        ...data,
        mode: "preview",
        art_style: "realistic",
        should_remesh: true,
      },
      {
        onSuccess: (res) => {
          // console.log("preview response", res);
          if (res.result) {
            checkProgress(res.result);
            setTaskId(res.result);
          }
        },
        onError: () => setIsInitializing(false),
      }
    );
  };

  const checkProgress = (taskId: string) => {
    const interval = setInterval(() => {
      fetch3DTask(taskId, {
        onSuccess: (res) => {
          console.log(`Progress: ${res.progress}%`);
          setPreviewProgress(res.progress);
          if (res.progress === 100) {
            setGeneratedModel(res);
            clearInterval(interval);
            setIsInitializing(false);
            // generateRefinedModel(taskId);
          }
        },
        onError: () => {
          clearInterval(interval);
          setIsInitializing(false);
        },
      });
    }, 10000);
  };

  const checkFinalResult = (taskId: string) => {
    const interval = setInterval(() => {
      fetchFinalResult(taskId, {
        onSuccess: (res) => {
          console.log(`Progress: ${res.progress}%`);
          setRefinedProgress(res.progress);
          if (res.progress === 100) {
            fetchFinalResult(taskId);
            setRefinedModel(res);
            clearInterval(interval);
            setIsInitializing(false);
          }
        },
        onError: () => {
          clearInterval(interval);
          setIsInitializing(false);
        },
      });
    }, 10000);
  };

  const generateRefinedModel = () => {
    startInitialization();
    refineUploadedModel(
      {
        mode: "refine",
        preview_task_id: taskId,
        enable_pbr: true,
      },
      {
        onSuccess: (refinedRes) => {
          console.log("refined response", refinedRes);
          setTaskId(refinedRes.result);
          checkFinalResult(refinedRes.result);
          // fetch3DTask(refinedRes.result, {
          //   onSuccess: () => {
          //     setIsInitializing(false);
          //   },
          // });
        },
        onError: () => setIsInitializing(false),
      }
    );
  };

  // const YOUR_API_KEY = import.meta.env.VITE_MESHY_KEY;

  // useEffect(() => {
  //   // if (!taskId) return;

  //   const fetchStream = async () => {
  //     const url = `https://api.meshy.ai/openapi/v2/text-to-3d/${taskId}/stream`;

  //     try {
  //       const response = await fetch(url, {
  //         headers: {
  //           Authorization: `Bearer ${YOUR_API_KEY}`,
  //         },
  //       });

  //       if (!response.ok) {
  //         throw new Error(`HTTP error! Status: ${response.status}`);
  //       }

  //       const reader = response.body?.getReader();
  //       if (!reader) return;

  //       const decoder = new TextDecoder();
  //       let receivedData = "";

  //       while (true) {
  //         const { done, value } = await reader.read();
  //         if (done) break;

  //         receivedData += decoder.decode(value, { stream: true });
  //         const events = receivedData.split("\n\n");

  //         events.forEach((event) => {
  //           if (event.startsWith("data:")) {
  //             try {
  //               const jsonData = JSON.parse(event.replace("data:", "").trim());
  //               console.log("Received update:", jsonData);

  //               if (
  //                 ["SUCCEEDED", "FAILED", "CANCELED"].includes(jsonData.status)
  //               ) {
  //                 reader.cancel();
  //               }
  //             } catch (err) {
  //               console.error("Error parsing event data:", err);
  //             }
  //           }
  //         });
  //       }
  //     } catch (error) {
  //       console.error("Failed to fetch SSE:", error);
  //     }
  //   };

  //   fetchStream();
  // }, [taskId]);

  return (
    <div>
      <div className="mt-2">
        <h4 className=" ">Generate Text to 3D Asset</h4>
      </div>

      <div className="flex mt-5 w-full gap-10 items-center">
        <form onSubmit={handleSubmit(onSubmit)} className="flex-1">
          <div>
            <Controller
              name="name"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Please enter asset name",
                },
              }}
              render={({ field }) => (
                <TextInput
                  type={InputType.text}
                  label="Asset Name"
                  placeholder="Enter asset name"
                  error={errors.name?.message}
                  {...field}
                  ref={null}
                  disabled={isInitializing || isProcessing}
                />
              )}
            />

            <div className="relative mt-8">
              <Controller
                name="prompt"
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: "AI prompt is required",
                  },
                }}
                render={({ field }) => (
                  <TextInput
                    className="bg-[#E9EBFB] h-[400px] rounded-[10px]"
                    fullWidth={true}
                    type={InputType.textarea}
                    label="Prompt"
                    placeholder="Enter prompt to generate asset "
                    error={errors.prompt?.message}
                    disabled={isInitializing || isProcessing}
                    {...field}
                    ref={null}
                    maxLength={500}
                  />
                )}
              />
              <div
                className={`flex items-center justify-between border border-[#AFAEAE] rounded-[10px] w-[185px] h-10 px-3 absolute bottom-4 left-3 ${
                  errors.prompt?.message && "bottom-10"
                }`}
              >
                <div className="flex items-center gap-2">
                  <GoArrowLeft className="text-primary cursor-pointer" />
                  <GoArrowRight className="text-primary cursor-pointer" />
                </div>
                <div className="bg-[#CCCCCC] w-[1px] h-6" />
                <div>
                  <IoCopyOutline
                    size={18}
                    className="text-primary cursor-pointer"
                  />
                </div>
                <div className="bg-[#CCCCCC] w-[1px] h-6" />
                <div>
                  <TbReload size={20} className="text-primary cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
          {/* <div className="mt-6 ">
            <p className=" text-greyLight">Art Style</p>
            <div className="flex overflow-auto md:px-0 px-3 scroll-pro gap-x-5 mt-2">
              {barItems.map((item, key) => (
                <div
                  className={` cursor-pointer w-fit rounded-[8px]  flex items-center whitespace-nowrap gap-x-4 px-4 lg:px-6 text-[#696767] py-2 border ${
                    activeTab === item ? "border-primary" : "border-gray-600"
                  }`}
                  key={key}
                  onClick={() => setActiveTab(item)}
                >
                  <ArrowsIcon color="#696767" />
                  {item}
                </div>
              ))}
            </div>
          </div> */}
          <div className="mt-5">
            {isInitializing && !generatedModel && (
              <Progress
                value={previewProgress}
                color="blue"
                label="Completed"
              />
            )}
          </div>
          {!generatedModel && (
            <button
              disabled={isPending || isInitializing}
              type="submit"
              className="btn-primary text-xs unbound fw-500 w-full h-10 mt-10 disabled:cursor-not-allowed"
            >
              {isPending || isInitializing ? <BeatLoader /> : "Generate"}
            </button>
          )}
        </form>
        <div className="flex-1 h-full w-full rounded-[20px]">
          {generatedModel && (
            <button
              disabled={isGettingRefined || refinedModel || isInitializing}
              onClick={generateRefinedModel}
              type="submit"
              className="btn-primary text-xs unbound fw-500 w-full h-10 mb-5 disabled:cursor-not-allowed"
            >
              {isGettingRefined ? <BeatLoader /> : "Refine"}
            </button>
          )}
          <p></p>
          {generatedModel?.thumbnail_url ? (
            <>
              <div className="grid grid-cols-2 gap-6">
                <div
                  className="bg-[#D9D9D9] rounded-[20px] flex justify-center items-center h-[300px] overflow-hidden cursor-pointer"
                  onClick={handleOpenModal}
                >
                  <img
                    src={generatedModel?.thumbnail_url}
                    alt=""
                    className="object-contain h-[200px] w-full"
                  />
                </div>
                <div className="bg-[#D9D9D9] rounded-[20px] flex justify-center items-center h-[300px] overflow-hidden">
                  <video
                    src={generatedModel?.video_url}
                    controls
                    autoPlay
                    loop
                    className="h-[200px] w-full"
                  ></video>
                </div>
              </div>
              {refinedModel && (
                <div className="grid grid-cols-2 gap-6 mt-6">
                  <div
                    className="bg-[#D9D9D9] rounded-[20px] flex justify-center items-center h-[300px] overflow-hidden cursor-pointer"
                    onClick={handleRefinedOpenModal}
                  >
                    <img
                      src={refinedModel?.thumbnail_url}
                      alt=""
                      className="object-contain h-[200px] w-full"
                    />
                  </div>
                  <div className="bg-[#D9D9D9] rounded-[20px] flex justify-center items-center h-[300px] overflow-hidden">
                    <video
                      src={refinedModel?.video_url}
                      controls
                      autoPlay
                      loop
                      className="h-[200px] w-full"
                    ></video>
                  </div>
                </div>
              )}
              <div className="my-4">
                {generatedModel && (
                  <Progress
                    value={refinedProgress}
                    color="blue"
                    label="Completed"
                  />
                )}
              </div>
            </>
          ) : (
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-[#D9D9D9] rounded-[20px] flex justify-center items-center h-[300px] overflow-hidden">
                <img
                  src="https://res.cloudinary.com/do2kojulq/image/upload/v1742310182/Vector_8_abep5r.png"
                  alt=""
                  className="w-16"
                />
              </div>
              <div className="bg-[#D9D9D9] rounded-[20px] flex justify-center items-center h-[300px] overflow-hidden">
                <img
                  src="https://res.cloudinary.com/do2kojulq/image/upload/v1742310182/Vector_8_abep5r.png"
                  alt=""
                  className="w-16"
                />
                {/* <ThreeDViewer
                  modelUrl={
                    "https://assets.meshy.ai/bfabf1ea-5caf-409e-88b6-960f32c53357/tasks/0195b532-37f9-7d4a-9f88-235faed03c3b/output/model.glb?Expires=4896028800&Signature=HD~eouV4bsQB-t9wBxprsGGzpOCj52wHHH6lt4Mwl0FkjPHxlXiaq~U-cabeIyLq6qA8rARmFaJrRCBQInvWfdmMvvcKqqI8s0vcbbbLfpM6rIUqfs-xsgEVqVYp0iQy0q~TD3w~kkWWXE88glwbHuscPLfDtO-CkeYYBzAVhDPXEn1d5SbGh4JIi6oLfSIWeNNOSK8GAtnqJu~bFtkXT2fXpAgQKQlkxXoGWMUKMhabAwROdsG-b0BBFkRkha9TCEz3oyhXw-FsKMZDTcg0TLRGRHH4gu~0e-fw~GWSOl3A~rMCoTFsiCqN6vdhB9wcvv3CUvNVMi6aFiex9gjbYg__&Key-Pair-Id=KL5I0C8H7HX83"
                  }
                /> */}
              </div>
            </div>
          )}
        </div>
      </div>

      <Dialog handler={handleOpenModal} open={previewModal} size="md">
        <div className="">
          <AiModelPreview model={generatedModel} handleOpenModal={() => setShowPreviewModal(false)} />
        </div>
      </Dialog>
      <Dialog handler={handleRefinedOpenModal} open={refinedDialog} size="md">
        <div className="">
          <AiModelPreview model={refinedModel} handleOpenModal={() => setRefinedDialog(false)} />
        </div>
      </Dialog>
      {/* <Dialog
        handler={() => setIsInitializing(false)}
        open={isInitializing}
        size="md"
      >
        <div className="p-5">
          <ModelGenerationTracker taskId={taskId} isProcessing={isProcessing} />
        </div>
      </Dialog> */}
    </div>
  );
};

export default CreateAssetWithAiText;

{
  /* <div className="bg-[#D9D9D9] rounded-[20px] flex justify-center items-center h-[300px] overflow-hidden">
            {!task?.texture_urls[0].base_color ? (
              <img
                src="https://res.cloudinary.com/do2kojulq/image/upload/v1742310182/Vector_8_abep5r.png"
                alt=""
                className="w-16"
              />
            ) : (
              <img
                src={task?.texture_urls[0].base_color}
                alt=""
                className="w-full h-full object-cover"
              />
            )}
          </div>
          <div className="bg-[#D9D9D9] rounded-[20px] flex justify-center items-center h-[300px] overflow-hidden">
            {!task?.texture_urls[0].metallic ? (
              <img
                src="https://res.cloudinary.com/do2kojulq/image/upload/v1742310182/Vector_8_abep5r.png"
                alt=""
                className="w-16"
              />
            ) : (
              <img
                src={task?.texture_urls[0].metallic}
                alt=""
                className="w-full h-full object-cover"
              />
            )}
          </div>
          <div className="bg-[#D9D9D9] rounded-[20px] flex justify-center items-center h-[300px] overflow-hidden">
            {!task?.texture_urls[0].roughness ? (
              <img
                src="https://res.cloudinary.com/do2kojulq/image/upload/v1742310182/Vector_8_abep5r.png"
                alt=""
                className="w-16"
              />
            ) : (
              <img
                src={task?.texture_urls[0].roughness}
                alt=""
                className="w-full h-full object-cover"
              />
            )}
          </div>
          <div className="bg-[#D9D9D9] rounded-[20px] flex justify-center items-center h-[300px] overflow-hidden">
            {!task?.texture_urls[0].normal ? (
              <img
                src="https://res.cloudinary.com/do2kojulq/image/upload/v1742310182/Vector_8_abep5r.png"
                alt=""
                className="w-16"
              />
            ) : (
              <img
                src={task?.texture_urls[0].normal}
                alt=""
                className="w-full h-full object-cover"
              />
            )}
          </div> */
}
