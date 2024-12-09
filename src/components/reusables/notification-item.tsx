const NotificationItem = ({isRead}:any) => {

  return (
    <div className={` px-4 py-3 flex items-center gap-4 rounded-[10px] ${isRead ? "border border-[#C4C4C4]" : "bg-[#E9EAFE]"}`}>
      <img
        src="https://res.cloudinary.com/do2kojulq/image/upload/v1733751020/image_iv3d8r.png"
        alt="notify-img"
        className="rounded-lg w-11 h-11"
      />
      <div>
        <p className="fw-500 text-lg">Reminder for Google Event </p>
        <p className="text-sm text-[#AEB9E1]">5 min ago</p>
      </div>
      <div className="ml-auto">
        <img className="w-6 h-6" src="https://res.cloudinary.com/do2kojulq/image/upload/v1733751308/dotpoints-01_ejoeat.png" alt="" />
      </div>
    </div>
  );
};

export default NotificationItem;
