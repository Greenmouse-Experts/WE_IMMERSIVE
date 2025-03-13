import { Controller, useForm } from "react-hook-form";
import { useEffect, useRef, useState } from "react";
import Loader from "./reusables/loader";
import { getGeneralUserDetails, submitKyc } from "../api/general";
import { BeatLoader } from "react-spinners";
import Button from "./ui/Button";
import SelectInput from "./ui/SelectInput";
import { uploadImage } from "../helpers";

const KycForm = () => {
  const { data: userData, isLoading } = getGeneralUserDetails();
  const { mutate: submitDocument, isPending: isUpdating } = submitKyc();
  const [documentUrl, setDocumentUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const documentUrlInputRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (userData) {
      setValue("documentType", userData.documentType);
    }
  }, [userData]);

  const onSubmit = (data: any) => {
    submitDocument({
      ...data,
      documentUrl,
    });
  };

  const handleThumbnailChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setLoading(true);
    setError(null);

    const file = event.target.files?.[0];
    if (!file) {
      setLoading(false);
      return;
    }

    const result = await uploadImage(file);
    setLoading(false);

    if (result.isSuccess) {
      setDocumentUrl(result.fileUrl);
    } else {
      setError("Thumbnail upload failed.");
    }
  };

  const openFilePicker = (inputRef: React.RefObject<HTMLInputElement>) => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen w-[100%]">
      <main className="px-0 bg-white rounded-[20px] md:px-2 xl:px-4 md:py-2 xl:py-8">
        <section className="w-[100%]">
          {/* Settings Tabs */}
          <div className="shadow-sm rounded-md p-2 md:p-3 xl:p-8">
            <p className="unbound text-[16px] font-[400] mb-5">KYC</p>

            {/* Tab Content */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="">
                <Controller
                  name="documentType"
                  control={control}
                  rules={{
                    required: {
                      value: true,
                      message: "Select a document type",
                    },
                  }}
                  render={({ field }) => (
                    <SelectInput
                      disabled={isUpdating}
                      label="Choose Verification Document"
                      list={[
                        { id: "national_id", name: "National ID" },
                        { id: "driver_license", name: "Driver License" },
                        { id: "passport", name: "Passport" },
                        { id: "CAC_document", name: "CAC Document" },
                      ]}
                      placeholder="Choose document, eg NIN"
                      // icon={
                      //   <IoCallOutline className="mx-3 relative top-[1px] text-[#89888D]" />
                      // }
                      error={errors.documentType?.message}
                      {...field}
                    />
                  )}
                />
                <div className="w-full flex flex-col gap-2 mt-5">
                  <p className="mt-4 text-[16px] md:text-[15px] lg:text-[15px] font-[400]">
                    Upload Document
                  </p>
                  <div
                    className="h-[274px] w-[427px] border-primary border-dashed border rounded-[10px] flex flex-col items-center justify-center cursor-pointer relative"
                    onClick={() => documentUrlInputRef.current?.click()}
                  >
                    {documentUrl ? (
                      <img
                        src={documentUrl}
                        alt="image Preview"
                        className="h-full w-full object-cover rounded-lg"
                      />
                    ) : (
                      <img
                        src="https://res.cloudinary.com/do2kojulq/image/upload/v1741179955/Group_1171275478_ftrg7a.png"
                        alt="Image Placeholder"
                        className="h-full w-full object-cover"
                      />
                    )}
                    <input
                      type="file"
                      ref={documentUrlInputRef}
                      onChange={handleThumbnailChange}
                      accept="image/*"
                      className="hidden"
                    />
                  </div>
                  {loading && (
                    <p className="mt-2">
                      <BeatLoader size={10} />
                    </p>
                  )}
                  {error && <p className="mt-2 text-red-500">{error}</p>}
                  {documentUrl && (
                    <button
                      onClick={() => openFilePicker(documentUrlInputRef)}
                      className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition w-fit"
                    >
                      Change Logo
                    </button>
                  )}
                </div>
              </div>

              <div className="mt-16">
                <Button
                  title={isUpdating ? <BeatLoader /> : "Upload KYC"}
                  style={{ width: 350 }}
                />
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};

export default KycForm;
