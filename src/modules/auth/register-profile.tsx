import React, { FC, useState } from "react";
import Button from "../../components/ui/Button";

interface Props {
  setActiveForm: React.Dispatch<React.SetStateAction<number>>;
}
const RegisterProfile: FC<Props> = ({ setActiveForm }) => {
  const [selected, setSelected] = useState(0);
  const options = [
    {
      name: "General User",
      desc: "This account is for users looking to enjoy assets and tours",
      image:
        "https://res.cloudinary.com/do2kojulq/image/upload/v1730216023/WE%20Immersive/Group_1000005676_6_j6wgwy.png",
      index: 101,
    },
    {
      name: "Creators",
      desc: "This account is for users looking to create content",
      image:
        "https://res.cloudinary.com/do2kojulq/image/upload/v1730216023/WE%20Immersive/Group_1000005676_5_lkyqgp.png",
      index: 102,
    },
    {
      name: "Student",
      desc: "This account is those looking to explore courses and learn ",
      image:
        "https://res.cloudinary.com/do2kojulq/image/upload/v1730216023/WE%20Immersive/Group_1000005676_7_kk8g2t.png",
      index: 103,
    },
    {
      name: "Institution",
      desc: "This account is for organisation looking to purchase bulk content ",
      image:
        "https://res.cloudinary.com/do2kojulq/image/upload/v1730216023/WE%20Immersive/Group_1000005676_4_wdpzwi.png",
      index: 104,
    },
  ];
  return (
    <div>
      <p className="unbound text-center fw-400 lg:text-xl">
        Choose a user type
      </p>
      <div className="mt-12 grid lg:grid-cols-2 gap-5 lg:gap-9">
        {options.map((item, i) => (
          <div
            className={`border p-3 px-[10px] cursor-pointer rounded-[10px] bg-[#F7F8FD] dark:bg-[#15171E] flex items-center gap-x-2 ${item.index === selected? "border-[#1D9CD7]" : "border-transparent"}`}
            key={i}
            onClick={() => setSelected(item.index)}
          >
            <img
              src={item.image}
              alt="icon-img"
              className="w-[60px] h-[65px] shrink-0"
            />
            <div>
              <p className="unbound fs-500">{item.name}</p>
              <p className="fs-200 mulish text-[#7D7C7C]">{item.desc}</p>
            </div>
            <div>
              <input type="radio" name="profile" checked={item.index === selected}/>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <div className="w-7/12">
          <Button title={"Proceed"} withArrows onClick={() => setActiveForm(1)}/>
        </div>
      </div>
    </div>
  );
};

export default RegisterProfile;
