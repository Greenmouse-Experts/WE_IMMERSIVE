import boardImg from "../../../assets/board.png";
import smallGlobImg from "../../../assets/smallGlob.png";
import booksImg from "../../../assets/books.png";

const cards = [
    {
        img:boardImg,
        title:"Showcase & Sell",
        content:"Display and sell digital artworks, NFTs, 3D models, educational content through our seamless platform.",
        color:"#1F86B6"
    },
    {
        img:smallGlobImg,
        title:"Growing Creative Network",
        content:"Connect with a global community of digital creators and unlock new opportunities.",
        color:"#553CF0"
    },
    {
        img:booksImg,
        title:"Creative Learning",
        content:"Access world-class courses and earn certifications upon completion.",
        color:"#1F86B6"
    },
]

const Card1 = () => {
  return (
    <>
        <div className="md:flex justify-between lg:justify-evenly md:gap-3 mt-[6%]">
            {
            cards.map((item, index) => (
                <div key={index} className="flex flex-col mt-[30%] md:mt-14 h-[227px] rounded-[15px] md:w-[35%] xl:w-[28%] w-[100%] text-white pb-5 md:px-1" style={{ backgroundColor: item.color }}>
                    <img src={item.img} alt="img" className={`relative md:w-[50%] xl:w-[149px] w-[135px] mx-auto ${index === 0 ? "-top-[65px] md:-top-[55px] lg:-top-[65px] xl:-top-[65px]" : index === 1 ? "-top-[65px] md:-top-[50px] lg:-top-[62px] xl:-top-[65px]" : index === 2 ? "-top-[77px] md:-top-[65px] lg:-top-[78px] xl:-top-[80px]" : ""}`}/>
                    <p className={`unbound text-[15px] xl:text-[16px] md:text-[14px] font-[600 ${index === 0 ? "-mt-14" : index === 1 ? "-mt-9" : index === 2 ? "-mt-14" : ""}`}>{item.title}</p>
                    <p className={`text-[13px] px-[12%] xl:px-[17%] md:px-[8%] font-[700] ${index === 0 ? "mt-2" : "mt-4"}`}>{item.content}</p>
                </div> 
            ))
            }
        </div>

        {/* <div className="justify-between mt-[6%]">
            {
            cards.map((item, index) => (
                <div key={index} className="mt-14 h-[227px] rounded-[15px] w-[100%] text-white pb-5" style={{ backgroundColor: item.color }}>
                    <div className="flex flex-col">
                        <img src={item.img} alt="img" className={`relative w-[135px] mx-auto ${index === 0 ? "-top-[55px]" : index === 1 ? "-top-[55px]" : index === 2 ? "-top-[75px]" : ""}`}/>
                        <p className={`unbound text-[15px] font-[600  ${index === 1 ? "mt-3" : "mt-0"}`}>{item.title}</p>
                        <p className={`text-[13px] px-[12%] font-[700] ${index === 0 ? "mt-2" : "mt-4"}`}>{item.content}</p>
                    </div>
                </div> 
            ))
            }
        </div> */}
    </>
  )
}

export default Card1