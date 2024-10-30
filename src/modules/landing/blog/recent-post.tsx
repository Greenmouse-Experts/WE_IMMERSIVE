
const RecentPosts = () => {
  return (
    <div>
      <p className="unbound">Recently Posted</p>
      <div className="mt-7">
        <div className="flex overflow-x-auto scroll-pro gap-6">
          <div className="lg:w-[40%] min-w-[300px]">
            <img
              src="https://res.cloudinary.com/do2kojulq/image/upload/v1728919408/WE%20Immersive/image_18_kdetww.png"
              alt="news-1"
              className="w-full h-[240px] lg:h-[330px] object-cover rounded-[30px]"
            />
            <div className="mt-2">
              <p>Eviola Launches a 5 Star VR Studio for creators</p>
              <p className="text-[#696767] mt-1 fs-500">October 13, 2024</p>
              <p className="!text-[#6817FC] mt-1 underline cursor-pointer">
                Read More
              </p>
            </div>
          </div>
          <div className="lg:w-[30%]  min-w-[300px]">
            <img
              src="https://res.cloudinary.com/do2kojulq/image/upload/v1728919408/WE%20Immersive/image_19_u5zl3r.png"
              alt="news-2"
              className="w-full h-[240px] lg:h-[330px] object-cover rounded-[30px]"
            />
            <div className="mt-2">
              <p>WEImmersive hits 2M users</p>
              <p className="text-[#696767] mt-1 fs-500">Setember 29, 2024</p>
              <p className="!text-[#6817FC] mt-1 underline cursor-pointer">
                Read More
              </p>
            </div>
          </div>
          <div className="lg:w-[30%] min-w-[200px]">
            <img
              src="https://res.cloudinary.com/do2kojulq/image/upload/v1728919409/WE%20Immersive/image_20_kjfi7p.png"
              alt="news-3"
              className="w-full h-[240px] lg:h-[330px] object-cover rounded-[30px]"
            />
            <div className="mt-2">
              <p>Eviola Launches new users platform</p>
              <p className="text-[#696767] mt-1 fs-500">September 20, 2024</p>
              <p className="!text-[#6817FC] mt-1 underline cursor-pointer">
                Read More
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecentPosts