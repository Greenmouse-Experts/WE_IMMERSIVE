const CreateAsset = () => {
  const CreateAssetSelect = () => {
    return (
      <div className={`border-[#C4C4C4] rounded-[20px] p-4 relative`}>
        
      </div>
    );
  };

  return (
    <div className="rounded-[20px] p-5 bg-white dark:bg-black">
      <p className="unbound text-[#06052A] fw-600">Create </p>
      <div className="mt-2">
        <p className="text-base ">
          Choose the category of what you want to upload
        </p>
      </div>

      <div className="mt-5 flex justify-between gap-5 ">
        <CreateAssetSelect />
      </div>
    </div>
  );
};

export default CreateAsset;
