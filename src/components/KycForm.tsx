import { Controller, useForm } from "react-hook-form";
import { useRef, useState } from "react";
import { submitKyc } from "../api/general";
import { BeatLoader } from "react-spinners";
import Button from "./ui/Button";
import SelectInput from "./ui/SelectInput";
import { uploadImage } from "../helpers";

const KycForm = () => {
  const { mutate: submitDocument, isPending: isUpdating } = submitKyc();
  const [documentUrlFront, setDocumentUrlFront] = useState<string | null>(null);
  const [documentUrlBack, setDocumentUrlBack] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const documentUrlInputRefFront = useRef<HTMLInputElement>(null);
  const documentUrlInputRefBack = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    submitDocument({
      ...data,
      documentUrl: documentUrlFront,
      documentUrlBack: documentUrlBack,
    });
  };

  const handleThumbnailChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
    isBack: boolean = false
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
      if (isBack) {
        setDocumentUrlBack(result.fileUrl);
      } else {
        setDocumentUrlFront(result.fileUrl);
      }
    } else {
      setError("Thumbnail upload failed.");
    }
  };

  return (
    <div className="min-h-screen w-[100%]">
      <main className="px-0 bg-white rounded-[20px] md:px-2 xl:px-4 md:py-2 xl:py-8">
        <section className="w-[100%]">
          <div className="shadow-sm rounded-md p-2 md:p-3 xl:p-8">
            <p className="unbound text-[16px] font-[400] mb-5">KYC</p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Controller
                name="documentType"
                control={control}
                rules={{ required: "Select a document type" }}
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
                    error={errors.documentType?.message}
                    {...field}
                  />
                )}
              />
              <div className="flex items-center gap-5">
                {[
                  {
                    label: "Front",
                    state: documentUrlFront,
                    ref: documentUrlInputRefFront,
                    isBack: false,
                  },
                  {
                    label: "Back",
                    state: documentUrlBack,
                    ref: documentUrlInputRefBack,
                    isBack: true,
                  },
                ].map(({ label, state, ref, isBack }) => (
                  <div key={label} className="w-full flex flex-col gap-2 mt-5">
                    <p className="mt-4 text-[16px] font-[400]">
                      Upload Document ({label})
                    </p>
                    <div
                      className="h-[250px] border-primary border-dashed border rounded-[10px] flex flex-col items-center justify-center cursor-pointer relative overflow-hidden"
                      onClick={() => ref.current?.click()}
                    >
                      {state ? (
                        <img
                          src={state}
                          alt="image Preview"
                          className="h-full w-full object-cover rounded-lg"
                        />
                      ) : (
                        <img
                          src="https://res.cloudinary.com/do2kojulq/image/upload/v1744902410/Group_1171275478_1_jzfh6b.png"
                          alt="Image Placeholder"
                          className="h-full w-full object-cover"
                        />
                      )}
                      <input
                        type="file"
                        ref={ref}
                        onChange={(e) => handleThumbnailChange(e, isBack)}
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
                  </div>
                ))}
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
