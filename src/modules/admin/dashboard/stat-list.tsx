import { getAdminStats } from "../../../api/admin";
import Loader from "../../../components/reusables/loader";
import { formatAsNgnMoney } from "../../../components/utils/formatHelp";

const StatisticList = () => {
  const { data: adminStats, isLoading } = getAdminStats();

  if (isLoading) return <Loader />;
  const list = [
    {
      name: "Total Users",
      count: adminStats.totalUsers,
      img: "https://res.cloudinary.com/do2kojulq/image/upload/v1729716454/WE%20Immersive/learning-2_xy21e0.png",
      color: "#FFC7F0",
    },
    {
      name: "Total Income",
      count: `₦${formatAsNgnMoney(adminStats.totalIncome)}`,
      img: "https://res.cloudinary.com/do2kojulq/image/upload/v1729716093/WE%20Immersive/coin-2_qcugc2.png",
      color: "D0FFC7",
    },
    {
      name: "Active Users",
      count: adminStats.totalActiveUsers,
      img: "https://res.cloudinary.com/do2kojulq/image/upload/v1732618852/Group_1171275331_lcfrkq.png",
      color: "#FFD7C7",
    },
    {
      name: "Subscriptions",
      count: adminStats.totalSubscriptions,
      img: "https://res.cloudinary.com/do2kojulq/image/upload/v1729716404/WE%20Immersive/books_hkqetx.png",
      color: "#C7C8FF",
    },
  ];


  return (
    <div>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-6 mt-10">
        {list.map((item) => (
          <div className="relative h-[120px]">
            <div className="box-drop rounded-[20px] p-4 h-full bg-white dark:bg-[#15171E] flex items-center">
              <div>
                <p className="text monts text-[#7F7F7F] fw-600 text-lg">
                  {item.count}
                </p>
                <p className="unbound fs-500 fw-400 text-[#06052A] pt-1">
                  {item.name}
                </p>
              </div>
            </div>
            <div
              className="absolute top-0 right-0 w-[70px] h-[60px] place-center border-[8px] rounded-[20px] border-[#F6F7FB]"
              style={{ backgroundColor: `${item.color}` }}
            >
              <img src={item.img} alt="icon-image" className="size-[32px]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatisticList;
