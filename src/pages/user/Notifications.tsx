import { useState } from "react";
import Navbar from "../../layout/user/components/navbar";

const Notifications = () => {
  const [activeTab, setActiveTab] = useState("All");

  const notifications = [
    { text: "Course purchased successfully", time: "5 mins ago", unread: true },
    {
      text: "Asset purchased successfully ✅",
      time: "5 mins ago",
      unread: true,
    },
    { text: "You have a test due today 📅", time: "5 mins ago", unread: true },
    {
      text: "You just completed Physics 101 🎉",
      time: "5 mins ago",
      unread: false,
    },
    {
      text: "You just earned an EV Token 🎉",
      time: "5 mins ago",
      unread: false,
    },
    {
      text: "You just earned an EV Token 🎉",
      time: "5 mins ago",
      unread: false,
    },
    {
      text: "You just earned an EV Token 🎉",
      time: "5 mins ago",
      unread: false,
    },
    {
      text: "New update on the WEimmersive mobile app",
      time: "5 mins ago",
      unread: false,
    },
  ];

  return (
    <>
      <div className="mx-auto">
        <Navbar />
      </div>
      <div className="bg-white dark:bg-[#15171E] px-4 py-6 rounded-[20px]">
        <div className="flex justify-between items-center">
          <p className="unbound text-lg mb-3">Notifications</p>
          <button className="text-blue-600 text-sm">Mark All As Read</button>
        </div>

        <div className="flex gap-6 mt-4 border-b pb-2">
          <button
            className={`text-sm ${
              activeTab === "All" ? "text-blue-600 font-bold" : "text-gray-500"
            }`}
            onClick={() => setActiveTab("All")}
          >
            All (20)
          </button>
          <button
            className={`text-sm ${
              activeTab === "Unread"
                ? "text-blue-600 font-bold"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("Unread")}
          >
            Unread (6)
          </button>
        </div>

        <div className="mt-4 space-y-2">
          {notifications.map((item, i) => (
            <div
              key={i}
              className={`p-4 rounded-lg ${
                item.unread ? "bg-[#E9EAFE] dark:bg-[#15171E]" : "bg-gray-50 dark:bg-[#15171E]"
              }`}
            >
              <p className="fs-500">{item.text}</p>
              <p className="text-gray-500 text-xs mt-1">{item.time}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Notifications;
