import { Controller, useForm } from "react-hook-form";
import TextInput, { InputType } from "../../../components/ui/TextInput";
// import SelectInput from "../../../components/ui/SelectInput";
import Button from "../../../components/ui/Button";
import { useState } from "react";
import { BeatLoader } from "react-spinners";
import { useMutation } from "@tanstack/react-query";
import { createLessons } from "../../../api";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import DropZone from "../../../components/DropZone";
import RichTextEditor from "../../../components/RichTextEditor";
import AddContent from "./add-content";

const CreateLessons = () => {
  const [isBusy, setIsBusy] = useState<boolean>(false);
  const navigate = useNavigate();
  const [files, setFiles] = useState("");
  const [contentType, setContentType] = useState("video")

  const { id } = useParams();

  const {
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      title: "",
      contentType: "",
      content: "",
      duration: "",
      contentUrl: "",
    },
  });

  // const selectedContentType = watch("contentType");

  const onSubmit = (formData: any) => {
    if (id) {
      const payload = {
        ...formData,
        contentType,
        moduleId: id,
        contentUrl:
          files === ""
            ? `https://we-imersive.netlify.app${window.location.pathname}`
            : files,
      };
      mutation.mutate(payload, {
        onSuccess: () => {
          navigate(-1);
        },
      });
    }
  };

  const mutation = useMutation({
    mutationFn: createLessons,
    onSuccess: (data: any) => {
      toast.success(data.message);
      setIsBusy(false); // Hide loader
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
      setIsBusy(false); // Hide loader
    },
    onSettled: () => {
      setIsBusy(false); // Hide loader
    },
  });

  const handleDrop = (data: any) => {
    setFiles(data);
  };

  const extractFormattedText = (nodes: any[]): string => {
    return nodes
      .map((node) => {
        if (node.type === "paragraph") {
          return node.children.map(formatText).join("") + "\n";
        }
        if (node.type === "heading-one") {
          return `# ${node.children.map(formatText).join("")}\n`;
        }
        if (node.type === "heading-two") {
          return `## ${node.children.map(formatText).join("")}\n`;
        }
        if (node.type === "block-quote") {
          return `> ${node.children.map(formatText).join("")}\n`;
        }
        if (node.type === "bulleted-list") {
          return node.children
            .map(
              (listItem: { children: any[] }) =>
                `- ${extractFormattedText(listItem.children)}`
            )
            .join("\n");
        }
        if (node.type === "numbered-list") {
          return node.children
            .map(
              (listItem: { children: any[] }, index: number) =>
                `${index + 1}. ${extractFormattedText(listItem.children)}`
            )
            .join("\n");
        }
        return node.children.map(formatText).join(""); // Default case
      })
      .join("\n");
  };

  const formatText = (child: any): string => {
    let text = child.text || "";
    if (child.bold) text = `**${text}**`;
    if (child.italic) text = `_${text}_`;
    if (child.underline) text = `__${text}__`;
    if (child.code) text = `\`${text}\``;
    return text;
  };

  const handleEditorChange = (value: any) => {
    const plainText = extractFormattedText(value);
    setValue("content", plainText);
  };

  return (
    <div className="flex flex-row items-start gap-5">
      <div className="rounded-[20px] py-5 px-7 md:w-3/4 w-full bg-white dark:bg-black">
        <p className="fw-600 text-sm text-grey">CREATE LESSON</p>

        <div className="w-full">
          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
            <div className="flex flex-col gap-4 mt-5">
              <Controller
                name="title"
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: "Please enter lesson title",
                  },
                }}
                render={({ field }) => (
                  <TextInput
                    type={InputType.text}
                    label="Lesson Title"
                    placeholder="Enter lesson title"
                    error={errors.title?.message}
                    {...field}
                    ref={null}
                  />
                )}
              />

              {/* <Controller
                name="contentType"
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                }}
                render={({ field }) => (
                  <SelectInput
                    label="Content Type"
                    list={[
                      {
                        id: "video",
                        name: "Video",
                      },
                      {
                        id: "text",
                        name: "Text",
                      },
                    ]}
                    placeholder="Select Content Type"
                    error={errors.contentType?.message}
                    {...field}
                  />
                )}
              /> */}

              <Controller
                name="duration"
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: "Please enter content duration",
                  },
                }}
                render={({ field }) => (
                  <TextInput
                    type={InputType.text}
                    label="Content duration"
                    placeholder="Enter content duration"
                    error={errors.duration?.message}
                    {...field}
                    ref={null}
                  />
                )}
              />

              {contentType === "text" && (
                <div>
                  <p className="my-4">Write Content</p>
                  <div className="w-full p-7 border border-dashed">
                    <RichTextEditor
                      onChange={(value) => handleEditorChange(value)}
                    />
                  </div>
                </div>
              )}

              {contentType === "video" && (
                <div>
                  <p className="my-3">Upload Video</p>

                  <div className=" bg-[#E9EBFB] rounded-[10px] sm:w-[400px] w-full h-[254px] border border-dashed border-primary flex flex-col justify-center items-center px-24 gap-6">
                    <DropZone onUpload={handleDrop} />
                  </div>

                  <div className="grid grid-cols-3 gap-4 mt-4">
                    {files !== "" && (
                      <div className="relative">
                        <video src={files} controls />
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            <div className="mt-5 flex">
              <Button
                style={{ width: "fit-content" }}
                title={
                  isBusy ? <BeatLoader size={12} color="white" /> : "Proceed"
                }
                withArrows
                disabled={!isValid}
                size={14}
                altClassName="btn-primary px-10 py-2 whitespace-nowrap"
              />
            </div>
          </form>
        </div>
      </div>
      <div className=" w-1/4">
        <AddContent selectedContent={contentType} setContentType={setContentType}/>
      </div>
    </div>
  );
};

export default CreateLessons;
