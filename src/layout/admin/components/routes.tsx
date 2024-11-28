
import { GrHomeRounded } from "react-icons/gr";
// import { HiOutlineShoppingBag } from "react-icons/hi";
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
    name: "Users",
    icon: <RiHeart2Line className="text-xl" />,
    route: "/area",
    submenu: [
    ],
  },
  {
    name: "Courses",
    icon: <RiHeart2Line className="text-xl" />,
    route: "/area",
    submenu: [
    ],
  },
  {
    name: "Products`",
    icon: <PiBookBookmark className="text-xl" />,
    route: "/",
    submenu: [],
  },
  {
    name: "Jobs",
    icon: <LuCreditCard className="text-lg" />,
    route: "/",
    submenu: [],
  },
  {
    name: "Subscription",
    icon: <LuCreditCard className="text-lg" />,
    route: "/",
    submenu: [],
  },
  {
    name: "Reports/Analysis",
    icon: <LuCreditCard className="text-lg" />,
    route: "/",
    submenu: [],
  },
];
