import Button from "../../../../components/ui/Button";
import MarketSearch from "../../homepage/marketplace/components/market-search";

const JobsBanner = () => {
  return (
    <div className="h-[400px] jobs-banner bg-cover bg-center">
      <div className="box">
        <div className="pt-16 lg:pt-24 mx-auto flex flex-col gap-7 items-center">
          <p className="lg:text-4xl  fw-500 unbound text-white">Jobs Opportunities</p>
          <p className="lg:w-5/12 text-white text-center">
          Browse through the new jobs these companies/organisations are hiring for and find your next opportunity
          </p>
        <Button title="Post A Job" withArrows={true} style={{width:'261px', height:'80px'}}/>
        </div>
      </div>
    </div>
  );
};

export default JobsBanner;
