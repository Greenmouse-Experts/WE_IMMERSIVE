import Button from "../../../components/ui/Button";
import globe from "../../../assets/globe.png";

const AboutBanner = () => {
  return (
    <div className=" bg-gradient-to-r from-[#ffffff] via-[#1D9CD7] to-[#6F0AFF]">
      <div className="flex align-middle items-center">
        <div className="pl-[9%] py-[3%] w-[85%]">
            <p className="Mulish text-[14px] mb-3 font-[700]">ABOUT WE IMMERSIVE</p>
            <h1 className="unbound text-[30px] font-[700] mb-4 leading-[1.6]">The creative hub built for today’s digital artists, designers, and creators.</h1>
            <p className="text-[14px] text-[#696767] w-[70%] mb-5">WE.IMMERSIVE leverages cutting-edge technology to empower African creators through an equitable marketplace and innovative payment systems.</p>
            <Button 
                title={"Join Now"} 
                withArrows
                altClassName="btn-primary whitespace-nowrap px-10 py-3"
            />
        </div>
        <div className="">
            <img src={globe} width="500%"  alt="globe"/>
        </div>
      </div>
    </div>
  );
}

export default AboutBanner;