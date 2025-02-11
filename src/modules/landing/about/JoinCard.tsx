
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
    <div className="flex items-center w-[75%] m-auto justify-between">
        {
            cards.map((card, index) => (
                <div key={index} className="w-[23%] px-5 rounded-[20px] border border-grey-600">
                    <img src={card.img} alt="img" className="-mt-12"/>
                    <div className="flex items-center">
                        <p>{card.title}</p>
                        <img src={card.icon} alt="icon"/>
                    </div>
                    <p>{card.content}</p>
                </div>
            ))
        }
    </div>
  )
}

export default JoinCard;