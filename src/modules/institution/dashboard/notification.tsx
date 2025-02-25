import { MdFormatListBulleted } from "react-icons/md";

interface Notification {
  id: number;
  message: string;
  time: string;
  isUnread?: boolean;
  // You can add more fields (e.g., avatarUrl, type) as needed
}

const Notification = () => {

  const notificationsData: Notification[] = [
    {
      id: 1,
      message: 'Your asset has been uploaded successfully',
      time: '5 min ago',
      isUnread: true,
    },
    {
      id: 2,
      message: 'Your asset has been uploaded successfully',
      time: '5 min ago',
      isUnread: true,
    },
    {
      id: 3,
      message: 'Julia just purchased Tesla 3D Model 🎉',
      time: '5 min ago',
      isUnread: false,
    },
    {
      id: 4,
      message: 'Julia just purchased Tesla 3D Model 🎉',
      time: '5 min ago',
      isUnread: false,
    },
    {
      id: 5,
      message: 'Julia just purchased Tesla 3D Model 🎉',
      time: '5 min ago',
      isUnread: false,
    },
  ];

  return (
    <div>
      <div className="bg-white mt-8 p-2 lg:p-8 rounded-lg" >
          <div className="pb-4 border-b border-gray-200">
            <h1 className="text-lg font-semibold">Notifications</h1>
            <div className="flex items-center justify-between gap-4 mt-[5%]">
              <div className="">
                <button className="text-gray-600 hover:text-gray-800 focus:outline-none text-[10px] lg:text-[16px]">
                  All (20)
                </button>
                <button className="text-gray-600 hover:text-gray-800 focus:outline-none ml-10 text-[10px] lg:text-[16px]">
                  Unread (6)
                </button>
              </div>
              <button className="text-blue-600 hover:text-blue-800 focus:outline-none mt-2 lg:mt-[0] text-[10px] lg:text-[16px]">
                Mark All As Read
              </button>
            </div>
          </div>

          <div className="mt-4">
            {notificationsData.map((notification, index) => {
              const isLast = index === notificationsData.length - 1;
              return (
                <div key={notification.id}>
                  <div
                    className={`
                      flex items-center justify-between px-3 py-5 mt-5
                      ${notification.isUnread ? 'bg-indigo-50' : 'bg-white'}
                      hover:bg-gray-50
                    `}
                  >
                    {/* Left side: could include an avatar or icon */}
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gray-200" />
                      <p className="text-[12px] md:text-sm lg:text-sm text-gray-700">
                        {notification.message}
                      </p>
                    </div>
                    {/* Right side: time */}
                    <span className="text-xs text-gray-400"><MdFormatListBulleted className="text-[20px]"/></span>
                  </div>

                  {/* A dotted divider except for the last item */}
                  {!isLast && (
                    <hr className="border-dotted border-t-2 border-gray-200 mx-3" />
                  )}
                </div>
              );
            })}
          </div>
      </div>
    </div>
  )
}

export default Notification;