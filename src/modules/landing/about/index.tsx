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
      <div className="w-full">
        <div id="whole_package" className="md:w-[95%] lg:w-[85%] w-[85%] m-auto text-center py-[5%]">
            <h1 className="unbound md:text-[25px] lg:text-[35px] font-[700] lg:px-[10%] xl:px-[25%] leading-[1.3] dark:text-white">Enjoy the Whole Package with WE Immersive</h1>
            <p className="md:px-[15%] lg:px-[20%] xl:px-[30%] mt-5 md:mt-8 lg:mt-8 text-[14px] md:text-[16px] lg:text-[16px] mb-10 dark:text-[red] text-[#747373]">WE.IMMERSIVE leverages cutting-edge technology to empower African creators through an equitable marketplace</p>
            <div>
                <Card1/>
            </div>
        </div>
      </div>
      <div id="empowering_creators" className="md:w-[95%] lg:w-[85%] w-[90%] mx-auto mt-5 mb-[7%] bg-[white] dark:bg-[#0e1624]">
        <div>
            <div className="flex text-white justify-center bg-primary rounded-full px-6 py-[3px] w-[80px] md:m-auto lg:m-0">
                <p className="text-[10px] unbound fw-600">Creators</p>
            </div>
            <h1 className="unbound md:text-[35px] mt-4 font-[700] dark:text-white text-center lg:text-left">Empowering Creators Everywhere</h1>
            <p className="text-[12px] md:text-[16px] lg:text-[18px] lg:pr-[30%] xl:pr-[55%] mb-2 mt-5 text-[#747373]  text-center lg:text-left">
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
        <div className="lg:flex lg:flex-row md:flex md:flex-col items-top md:w-[95%] lg:w-[95%] w-[85%] xl:w-[85%] mx-auto">
            <div className="md:w-[100%] md:align-center md:flex lg:w-[50%]">
                <img src={cupid} width="100%" alt="img" className="md:ml-[4.3%]"/>
            </div>
            <div className="lg:w-[50%]">
                <div className="flex text-white justify-center bg-primary rounded-full py-[4px] w-[150px] mb-5 md:mx-auto lg:mx-0">
                    <p className="text-[10px] unbound fw-600">Maximize Potential</p>
                </div>
                <h1 className="unbound md:text-[40px] font-[500] leading-[1.3] mb-8 w-[70%] md:w-[100%] xl:w-[60%] md:text-center lg:text-left">Unlock your full potential</h1>
                <div className="mt-5 md:flex md:flex-col md:items-center">
                    {
                      maxList.map((item, index) => (
                        <div key={index} className="flex items-center list-none mb-10 md:w-[65%] lg:w-[100%] lg:mt-3 xl:pr-[25%]">
                            <img src={item.icon} alt="img" width="24px"/>
                            <li className="Mulish text-[14px] ml-3 xl:text-[17px] text-[#747373] dark:!text-[#747373]">{item.content}</li>
                        </div>
                      ))
                    }
                </div>
            </div>
        </div>
      </div>

      <div className="pb-11">
        <div className="flex flex-col text-center mt-[5%] mb-[8%]">
            <img src={handshake} alt="img" className="m-auto w-[60%] md:w-[20%]"/>
            <div>
                <h1 className="unbound font-[700] md:text-[38px] mt-3 dark:text-white">Join Us Today</h1>
                <p className="px-3 md:px-0 mt-5 text-[#747373] md:w-[60%] lg:w-[35%] m-auto text-[14px] md:text-[18px]">Start your journey on WE.IMMERSIVE and access tools designed for creative professionals:</p>
            </div>
        </div>
        <div> 
            <JoinCard/>            
        </div>
      </div>

      <div className="mb-[5%] overflow-hidden overflow-x-auto">
        <div className="whitespace-nowrap">
          <h1 className="text-[#EEEEEE] text-[70px] font-[700] -ml-14">Dream . Create . Inspire || Dream . Create . inspire</h1>
        </div>
      </div>
    
    </div>
  );
}

export default AboutIndex;

