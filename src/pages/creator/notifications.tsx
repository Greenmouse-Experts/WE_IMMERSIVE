import NotificationItem from "../../components/reusables/notification-item";

const CreatorNotificationScreen = () => {
  return (
    <div className="rounded-[20px] p-5 bg-white dark:bg-black xl:w-10/12">
      <p className="fw-600 unbound text-2xl">Notifications</p>

      <div className="flex gap-5 items-center mt-12">
        <p className="fw-700 text-lg text-primary">All (20)</p>
        <p className="fw-700 text-lg text-[#515153]">Unread (6)</p>
        <p className="fw-600 text-secondary ml-auto">Mark All As Read</p>
      </div>

      <div className="mt-7 flex flex-col gap-4">
        <NotificationItem isRead={true} />
        <NotificationItem isRead={false}/>
        <NotificationItem isRead={true}/>
        <NotificationItem isRead={true}/>
        <NotificationItem isRead={false}/>
        <NotificationItem isRead={false}/>
        <NotificationItem isRead={false}/>
      </div>
    </div>
  );
};

export default CreatorNotificationScreen;
