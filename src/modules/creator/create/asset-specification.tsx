import Button from "../../../components/ui/Button";
import TextInput, { InputType } from "../../../components/ui/TextInput";

interface AssetSpecificationProps{
    handleStepper: (direction: string) => void;
}
const AssetSpecification = ({handleStepper}:AssetSpecificationProps) => {
  return (
    <div>
       <p className="fw-600 text-sm text-grey">CREATE</p>
      <p className="unbound text-[#06052A] fw-600 mt-3">Specifications </p>

      <div className="flex flex-col gap-4 mt-5">
        <TextInput
          type={InputType.text}
          label="Subject Matter"
          placeholder="Enter subject matter"
        />
        <TextInput
          fullWidth={true}
          type={InputType.text}
          label="Medium"
          placeholder="Choose medium"
        />
        <TextInput
          fullWidth={true}
          type={InputType.text}
          label="Software Used"
          placeholder="Choose softwares used"
        />
        <TextInput
          fullWidth={true}
          type={InputType.text}
          label="Tags"
          placeholder="Pick tags the describe your asset"
        />
        <TextInput
          fullWidth={true}
          type={InputType.text}
          label="Version (Optional)"
          placeholder="What version is this"
        />
      
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

export default AssetSpecification;
