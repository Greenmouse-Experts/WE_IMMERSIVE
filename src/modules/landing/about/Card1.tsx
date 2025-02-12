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
    <div className="md:flex justify-between mt-[10%]">
        {
         cards.map((item, index) => (
            <div key={index} className="flex flex-col rounded-[15px] md:w-[30%] mt-[30%] md:mt-[1%] text-white pb-5" style={{ backgroundColor: item.color }}>
                <img src={item.img} width="149px" alt="img" className={`relative left-[21%] md:left-[30%] ${index === 2 ? "-mt-[31%] md:-mt-[21%]" : "-mt-[25%] md:-mt-[18%]"}`}/>
                <p className="unbound mb-5 mt-8 text-[15px] font-[600]">{item.title}</p>
                <p className="text-[13px] px-[17%] font-[700]">{item.content}</p>
            </div>
         ))
        }
    </div>
  )
}

export default Card1