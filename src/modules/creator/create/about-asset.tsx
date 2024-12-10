import Button from "../../../components/ui/Button";
import TextInput, { InputType } from "../../../components/ui/TextInput";

interface AboutAssetProps{
    handleStepper: (direction: string) => void;
}
const AboutAsset = ({handleStepper}:AboutAssetProps) => {
  return (
    <div>
      <p className="fw-600 text-sm text-grey">CREATE</p>
      <p className="unbound text-[#06052A] fw-600 mt-3">Create </p>

      <div className="flex flex-col gap-4 mt-5">
        <TextInput
          type={InputType.text}
          label="Asset Name"
          placeholder="Enter asset name"
        />
        <TextInput
          className="bg-[#E9EBFB] h-[150px] rounded-[10px]"
          fullWidth={true}
          type={InputType.textarea}
          label="Asset Details"
          placeholder="Description of your asset"
        />
        <div>
          <p>Upload Asset</p>

          <div className=" bg-[#E9EBFB] rounded-[10px] sm:w-[400px] w-full h-[254px] border border-dashed border-primary flex flex-col justify-center items-center px-24 gap-6">
            <img
              src="https://res.cloudinary.com/do2kojulq/image/upload/v1733826100/Vector_4_w6g0ba.png"
              alt=""
              className="w-[50px] "
            />
            <p className="text-sm text-grey text-center">
              Upload files ie PNG, Sound, JPG, Video, GIF, etc
            </p>
          </div>
        </div>
      </div>

      <div className=" mt-16 ">
          <Button
            onClick={() => handleStepper("next")}
            style={{ width: "fit-content" }}
            title="Proceed"
            withArrows
            size={14}
            altClassName="btn-primary px-10 py-2 whitespace-nowrap"
          />
        </div>
    </div>
  );
};

export default AboutAsset;
