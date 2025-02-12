
import creatorsImg from "../../../assets/creatorsImg.png";
import institutionImg from "../../../assets/institutionImg.png";
import studentImg from "../../../assets/studentImg.png";
import educatorsImg from "../../../assets/educatorsImg.png";
import creatorsIcon from "../../../assets/creatorsIcon.png";
import institutionIcon from "../../../assets/institutionIcon.png";
import studentIcon from "../../../assets/studentIcon.png";
import educatorIcon from "../../../assets/educatorsIcon.png";

const cards = [
    {
        icon:creatorsIcon,
        img:creatorsImg,
        title:"For Creators",
        content:"Sign up today to start earning fair royalties and protecting your work.",

    },
    {
        icon:institutionIcon,
        img:institutionImg,
        title:"For Institution",
        content:"Join us to transform your curriculum with immersive digital tools.",

    },
    {
        icon:studentIcon,
        img:studentImg,
        title:"For Students",
        content:"Start your journey toward a profitable career in digital art—enroll now..",

    },
    {
        icon:educatorIcon,
        img:educatorsImg,
        title:"For Educators",
        content:"Host your course on our platform and connect with a global audience..",

    },
]

const JoinCard = () => {
  return (
    <div className="md:flex items-center w-[75%] m-auto justify-between">
        {
            cards.map((card, index) => (
                <div key={index} className="md:w-[23%] mt-[28%] md:mt-[1%] px-5 pb-11 rounded-[20px] border border-grey-600">
                    <img src={card.img} alt="img" className="-mt-12"/>
                    <div className="flex items-center mt-11">
                        <p className="unbound text-[15px]">{card.title}</p>
                        <img src={card.icon} width="25px" alt="icon" className="ml-3"/>
                    </div>
                    <p className="mt-5 text-[#747373] text-[14px] pr-11">{card.content}</p>
                    <button type="button" 
                            className="mt-11 text-center border border-[#6F0AFF] border-500 w-full text-[#6F0AFF] py-2 rounded-md"
                    >
                        Sign Up
                    </button>
                </div>
            ))
        }
    </div>
  )
}

export default JoinCard;
