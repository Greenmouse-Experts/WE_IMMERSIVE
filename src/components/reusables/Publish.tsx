import Button from "../ui/Button";

interface IPublishProps {
  title: string;
  text?: string;
  isLoading?: boolean;
  handleProceed: () => void;
  handleCancel: () => void;
}
const Publish = ({
  title,
  text,
  isLoading,
  handleProceed,
  handleCancel,
}: IPublishProps) => {
  return (
    <div>
      <p className="unbound">{title}</p>
      {text && <p>{text}</p>}
      <div className="flex gap-4 justify-end mt-4">
        <button
          className="text-white bg-gray-600 w-[80px] rounded-lg"
          onClick={handleCancel}
        >
          Cancel
        </button>
        <Button
          isBusy={isLoading}
          style={{ width: "80px" }}
          className="text-white btn-primary px-4 py-2 rounded-lg"
          onClick={handleProceed}
          title="Proceed"
        />
      </div>
    </div>
  );
};

export default Publish;
