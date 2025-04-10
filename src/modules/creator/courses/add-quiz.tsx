interface IAddQuiz {
  selectedContent: string;
  setContentType: any;
}

const AddQuiz = ({ selectedContent, setContentType }: IAddQuiz) => {
  const contentList = [
    {
      id: 1,
      title: "Quiz",
      contentType: "quiz",
      contentUrl:
        "https://res.cloudinary.com/do2kojulq/image/upload/v1740558807/Group_bejwle.png",
    },
    {
      id: 2,
      title: "Assignments",
      contentType: "assignment",
      contentUrl:
        "https://res.cloudinary.com/do2kojulq/image/upload/v1740558808/Vector_h2sa2m.png",
    },

    // Add more content here...
  ];
  return (
    <div className="bg-white dark:bg-black w-full rounded-[20px] py-5 px-7">
      <p className="text-[#5B5959]">EDUCATIONAL TOOLS</p>
      <div className="grid grid-cols-2 gap-3 mt-4">
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
            <p className="text-xs text-greyLight">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddQuiz;
