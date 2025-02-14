
import { Component } from "lucide-react";
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
    route: "",
    submenu: [],
  },
  {
    name: "Students",
    icon: <RiHeart2Line className="text-xl" />,
    route: "student",
    submenu: [
    ],
  },
  {
    name: "Tutors",
    icon: <RiHeart2Line className="text-xl" />,
    route: "tutor",
    submenu: [
    ],
  },
  {
    name: "Courses",
    icon: <PiBookBookmark className="text-xl" />,
    route: "courses",
    submenu: [],
  },
  {
    name: "Assets",
    icon: <PiBookBookmark className="text-xl" />,
    route: "assets",
    submenu: [],
  },
  {
    name: "Upload Status",
    icon: <PiBookBookmark className="text-xl" />,
    route: "upload",
    submenu: [],
  },
  {
    name: "Cart",
    icon: <PiBookBookmark className="text-xl" />,
    route: "/",
    submenu: [],
  },
  {
    name: "Messages",
    icon: <LuCreditCard className="text-lg" />,
    route: "/",
    submenu: [],
  },
  {
    name: "Notifications",
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
    name: "Transactions",
    icon: <LuCreditCard className="text-lg" />,
    route: "transaction",
    submenu: [],
  },
];
