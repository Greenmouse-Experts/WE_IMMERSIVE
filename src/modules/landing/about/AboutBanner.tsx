import Button from "../../../components/ui/Button";
import globe from "../../../assets/globe.png";

const AboutBanner = () => {
  return (
    <div className="bg-gradient-to-r from-blue-100 to-purple-200">
      <div className="flex flex-col-reverse md:flex-row align-middle items-center py-11 md:py-0">
        <div className="md:pl-[9%] py-[3%] md:w-[85%]">
            <h5 className="Mulish text-[14px] text-center md:text-left mb-3 font-[700]">ABOUT WE IMMERSIVE</h5>
            <h1 className="unbound md:text-[30px] text-center md:text-left font-[700] mb-4 leading-[1.6] md:pr-[20%]">The creative hub built for today’s digital artists, designers, and creators.</h1>
            <h5 className="Mulish text-[14px] text-[#696767] text-center md:text-left md:w-[70%] mb-5">WE.IMMERSIVE leverages cutting-edge technology to empower African creators through an equitable marketplace and innovative payment systems.</h5>
            <div>
                <Button 
                    title={"Join Now"} 
                    withArrows
                    altClassName="btn-primary whitespace-nowrap px-10 py-3"
                />
            </div>
        </div>
        <div className="">
            <img src={globe} width="500%"  alt="globe"/>
        </div>
      </div>
    </div>
  );
}

export default AboutBanner;