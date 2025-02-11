import AboutBanner from "./AboutBanner";
import Card1 from "./Card1";
import Card2 from "./Card2";
import netflix from "../../../assets/netflix.png";
import cupid from "../../../assets/cupid.png";
import cooler from "../../../assets/cooler.png";
import house from "../../../assets/house.png";
import star from "../../../assets/star.png";
import cash from "../../../assets/cash.png";
import handshake from "../../../assets/handshake.png"
import JoinCard from "./JoinCard";


const maxList = [
    {
        icon:cooler,
        content: "Freelance Projects: Send and receive messages from prospective clients and digital creators directly on the platform.."
    },
    {
        icon:house,
        content: "Digital Storefront: Sell assets with customizable pricing."
    },
    {
        icon:star,
        content: "Appear on curated pages for premium visibility."
    },
    {
        icon:cash,
        content: "Set your licensing terms to align with your creative goals"
    }
]



const AboutIndex = () => {
  return (
    <div className="">
      <AboutBanner/>
      <div className="bg-white w-full">
        <div id="whole_package" className="w-[85%] m-auto text-center py-[5%]">
            <h1 className="unbound text-[35px] font-[700] px-[23%] leading-[1.3]">Enjoy the Whole Package with WE Immersive</h1>
            <p className="px-[29%] mt-8 text-[15px] mb-10">WE.IMMERSIVE leverages cutting-edge technology to empower African creators through an equitable marketplace</p>
            <div>
                <Card1/>
            </div>
        </div>
      </div>
      <div id="empowering_creators" className="w-[85%] mx-auto mt-5 mb-[7%] bg-[white]">
        <div>
            <div className="flex text-white justify-center bg-primary rounded-full px-5 py-[2px] w-[80px]">
                <p className="text-[10px] unbound fw-600">Creators</p>
            </div>
            <h1 className="unbound text-[35px] mt-4 font-[700]">Empowering Creators Everywhere</h1>
            <p className="text-[16px] pr-[55%] mb-2 mt-5 text-[#747373]">
               We offer advanced analytics to track your growth, custom websites to showcase your portfolio, 
               a community that celebrates and supports your talent, 
               and much more
            </p>
        </div>
        <div>
            <img src={netflix} alt="img"/>
        </div>
        <div>
            <Card2/>
        </div>
      </div>

      <div className="bg-[#E9EBFB] pt-[5%] pb-[1%]">
        <div className="flex items-top w-[85%] mx-auto">
            <div className="w-[50%]">
                <img src={cupid} width="100%" alt="img"/>
            </div>
            <div className="w-[50%]">
                <div className="flex text-white justify-center bg-primary rounded-full py-[2px] w-[150px] mb-5">
                    <p className="text-[10px] unbound fw-600">Maximize Potential</p>
                </div>
                <h1 className="unbound text-[40px] font-[500] leading-[1.3] mb-8 w-[60%]">Unlock your full potential</h1>
                <div className="mt-5">
                    {
                      maxList.map((item, index) => (
                        <div key={index} className="flex items-center list-none mb-10 pr-[35%]">
                            <img src={item.icon} alt="img" width="20px"/>
                            <li className="text-[14px] ml-3">{item.content}</li>
                        </div>
                      ))
                    }
                </div>
            </div>
        </div>
      </div>

      <div className="pb-11">
        <div className="flex flex-col text-center mt-[5%] mb-[8%]">
            <img src={handshake} width="20%" alt="img" className="m-auto"/>
            <div>
                <h1 className="unbound font-[700] text-[38px] mt-3">Join Us Today</h1>
                <p className="mt-5 text-[#747373] w-[30%] m-auto">Start your journey on WE.IMMERSIVE and access tools designed for creative professionals:</p>
            </div>
        </div>
        <div>
            <JoinCard/>            
        </div>
      </div>

      <div className="mb-[5%] text-center">
        <h1 className="text-[#EEEEEE] text-[70px] font-[700]">Dream . Create . Inspire || Dream . Create . inspire</h1>
      </div>
    
    </div>
  );
}

export default AboutIndex;

