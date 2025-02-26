interface IAddContent {
  selectedContent: string;
  setContentType: any;
}

const AddContent = ({ selectedContent, setContentType }: IAddContent) => {
  const contentList = [
    {
      id: 1,
      title: "Image",
      contentType: "image",
      contentUrl:
        "https://res.cloudinary.com/do2kojulq/image/upload/v1740558807/Group_bejwle.png",
    },
    {
      id: 2,
      title: "Text",
      contentType: "text",
      contentUrl:
        "https://res.cloudinary.com/do2kojulq/image/upload/v1740558808/Vector_h2sa2m.png",
    },
    {
      id: 3,
      title: "Video",
      contentType: "video",
      contentUrl:
        "https://res.cloudinary.com/do2kojulq/image/upload/v1740558807/Vector_1_tomgns.png",
    },
    {
      id: 4,
      title: "Audio",
      contentType: "audio",
      contentUrl:
        "https://res.cloudinary.com/do2kojulq/image/upload/v1740558807/Vector_2_gjrxrz.png",
    },
    {
      id: 5,
      title: "Pdf",
      contentType: "pdf",
      contentUrl:
        "https://res.cloudinary.com/do2kojulq/image/upload/v1740558807/Vector_3_qj37hk.png",
    },
    // Add more content here...
  ];
  return (
    <div className="bg-white dark:bg-black w-full rounded-[20px] py-5 px-7">
      <h4>Add Content</h4>
      <div className="grid grid-cols-3 gap-3">
        {contentList.map((item) => (
          <div
            onClick={() => setContentType(item.contentType)}
            key={item.id}
            className={`flex flex-col items-center gap-1 justify-center border  rounded-[10px]  h-24 cursor-pointer ${
              selectedContent === item.contentType
                ? "border-primary"
                : "border-[#D9D9D9]"
            }`}
          >
            <img src={item.contentUrl} alt={item.title} className="w-5" />
            <p className="text-sm text-greyLight">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddContent;
