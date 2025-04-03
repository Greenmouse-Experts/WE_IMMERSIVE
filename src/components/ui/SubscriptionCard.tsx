import { IoMdRadioButtonOff, IoMdRadioButtonOn } from "react-icons/io";
import { ISubscription } from "../../types/subscription.types";
interface SubscriptionCardProps {
  item: ISubscription;
  handleSelect: (item: ISubscription) => void;
  isSelected: boolean;
  altImgStyle?: string;
}
const SubscriptionCard = ({
  item,
  handleSelect,
  isSelected,
}: SubscriptionCardProps) => {
  return (
    <div
      onClick={() => handleSelect(item)}
      className={`border ${isSelected ? "border-primary" : "border-[#C4C4C4]"} 
          rounded-[20px]  p-4 py-12 flex flex-col gap-3 items-center relative cursor-pointer flex-1`}
    >
      <div className="absolute top-4 right-4">
        {isSelected ? (
          <IoMdRadioButtonOn size={25} className="text-primary" />
        ) : (
          <IoMdRadioButtonOff size={25} color="#7D7C7C" />
        )}
      </div>
      {/* <img
        src={item.img}
        alt=""
        className={` ${altImgStyle ? altImgStyle : "w-[81px] h-[73px]"}`}
      /> */}
      <p className="text-lg unbound fw-500 text-black">{item.name}</p>
      <p className="text-center text-[#676767] fw-600">{item.price}</p>
      <p className="text-center text-[#676767] fw-600">{item.period}</p>
      <p className="text-center text-[#676767] fw-600">{item.duration}</p>
    </div>
  );
};

export default SubscriptionCard;
