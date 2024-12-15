const Notifications = () => {
  const activities = [
    {
      title: "New post from Eviola & Co",
      img: "https://res.cloudinary.com/do2kojulq/image/upload/v1730279183/WE%20Immersive/image_3_mu6rxn.png",
      date: "13-14-24",
      time: "5:00pm",
    },
    {
      title: "Purchase Completed 🎊",
      img: "https://res.cloudinary.com/do2kojulq/image/upload/v1730279183/WE%20Immersive/image_4_hwdpua.png",
      date: "13-14-24",
      time: "10:00pm",
    },
    {
      title: "You finished XR Course",
      img: "https://res.cloudinary.com/do2kojulq/image/upload/v1730279182/WE%20Immersive/image_5_slbtqp.png",
      date: "13-14-24",
      time: "3:45pm",
    },
  ];

  return (
    <div>
      <div className="bg-white dark:bg-[#15171E] px-4 lg:py-6 rounded-[20px]">
        <p className="unbound text-[#06052A]">Notifications </p>
        <div className="mt-6 grid gap-4">
          {activities.map((item, i) => (
            <div className="flex items-center gap-x-2" key={i}>
              <div className="w-[45px] shrink-0">
                <img src={item.img} alt="course-img" className="w-full" />
              </div>
              <div className="w-full">
                <p className="fw-500 fs-400">{item.title}</p>
                <div className="flex justify-between items-center">
                  <p className="fs-200 text-[#696767]">{item.date}</p>
                  <p className="fs-200 text-[#696767]">{item.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
