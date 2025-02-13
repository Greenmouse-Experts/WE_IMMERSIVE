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
    <div className="md:flex justify-between lg:justify-evenly mt-[10%] md:gap-3">
        {
         cards.map((item, index) => (
            <div key={index} className="flex flex-col h-[227px] rounded-[15px] md:w-[35%] lg:w-[28%] w-[100%] mt-[25%] md:mt-[1%] text-white pb-5 md:px-1" style={{ backgroundColor: item.color }}>
                <img src={item.img} alt="img" className={` md:w-[50%] lg:w-[149px] w-[135px] m-auto ${index === 2 ? "-mt-[26%] md:-mt-[27%] lg:-mt-[21%]" : "-mt-[20%] md:-mt-[20%] lg:-mt-[18%]"}`}/>
                <p className={`unbound lg:mt-8 md:mt-3 text-[15px] lg:text-[16px] md:text-[14px] font-[600  ${index === 0 ? "mb-3" : "mb-4"}`}>{item.title}</p>
                <p className={`text-[13px] px-[12%] lg:px-[17%] md:px-[8%] font-[700] ${index === 0 ? "mb-0" : "mb-5"}`}>{item.content}</p>
            </div> 
         ))
        }
    </div>
  )
}

export default Card1