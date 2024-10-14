import Button from "../../../components/ui/Button";

const CommunityNews = () => {
  return (
    <div className="mt-24">
      <div className="flex gap-6">
        <div className="w-[40%]">
          <img
            src="https://res.cloudinary.com/do2kojulq/image/upload/v1728919408/WE%20Immersive/image_18_kdetww.png"
            alt="news-1"
            className="w-full h-[330px] object-cover rounded-[30px]"
          />
          <div className="mt-2">
            <p>Eviola Launches a 5 Star VR Studio for creators</p>
            <p className="text-[#696767] mt-1 fs-500">October 13, 2024</p>
          </div>
        </div>
        <div className="w-[30%]">
          <img
            src="https://res.cloudinary.com/do2kojulq/image/upload/v1728919408/WE%20Immersive/image_19_u5zl3r.png"
            alt="news-2"
            className="w-full h-[330px] object-cover rounded-[30px]"
          />
          <div className="mt-2">
            <p>WEImmersive hits 2M users</p>
            <p className="text-[#696767] mt-1 fs-500">Setember 29, 2024</p>
          </div>
        </div>
        <div className="w-[30%]">
          <img
            src="https://res.cloudinary.com/do2kojulq/image/upload/v1728919409/WE%20Immersive/image_20_kjfi7p.png"
            alt="news-3"
            className="w-full h-[330px] object-cover rounded-[30px]"
          />
          <div className="mt-2">
            <p>Eviola Launches new users platform</p>
            <p className="text-[#696767] mt-1 fs-500">September 20, 2024</p>
          </div>
        </div>
      </div>
      <div className="flex mt-8 lg:mt-16 justify-center">
        <div>
          <Button
            title={"See All"}
            withArrows
            altClassName="btn-primary px-6 py-2"
          />
        </div>
      </div>
    </div>
  );
};

export default CommunityNews;
