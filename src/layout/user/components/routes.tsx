
import { GrHomeRounded } from "react-icons/gr";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { LuCreditCard } from "react-icons/lu";
// import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { PiBookBookmark} from "react-icons/pi";
import { RiHeart2Line } from "react-icons/ri";
export interface RouteType {
  name: string;
  icon: any;
  route: string;
  submenu: {
    name: string;
    icon: any;
    route: string;
  }[];
}
export const Routes = [
  {
    name: "Dashboard",
    icon: <GrHomeRounded className="text-[17px]" />,
    route: "/",
    submenu: [],
  },
  {
    name: "Store",
    icon: <HiOutlineShoppingBag className="text-[20px]" />,
    route: "/",
    submenu: [
    ],
  },
  {
    name: "Likes",
    icon: <RiHeart2Line className="text-xl" />,
    route: "/area",
    submenu: [
    ],
  },
  {
    name: "Courses",
    icon: <PiBookBookmark className="text-xl" />,
    route: "/chat-room",
    submenu: [],
  },
  {
    name: "Transactions",
    icon: <LuCreditCard className="text-lg" />,
    route: "/chat-room",
    submenu: [],
  },
];
