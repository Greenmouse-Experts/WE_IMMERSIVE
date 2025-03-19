import { useSearchParams } from "react-router-dom";
import CreateAssetWithAiText from "./create-with-ai-text";
import CreateAssetWithAiImage from "./create-with-ai-image";

const CreateAssetWithAi = () => {
  const [searchParams] = useSearchParams();

  const type = searchParams.get("type");
  return (
    <div className="rounded-[20px] p-5 bg-white dark:bg-black pb-20">
      <p className="text-[#6C6969] fw-600">CREATE </p>

      {type === "text-to-model" ? (
        <CreateAssetWithAiText />
      ) : (
        <CreateAssetWithAiImage />
      )}
    </div>
  );
};

export default CreateAssetWithAi;
