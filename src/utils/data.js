import { HiOutlineViewGrid, HiOutlineQuestionMarkCircle, HiOutlineCog } from "react-icons/hi";
import { FaUserGear } from "react-icons/fa6";
import { IoConstruct } from "react-icons/io5";
import { AiOutlineProfile } from "react-icons/ai";
import { IoIosCreate } from "react-icons/io";
import { GrGroup } from "react-icons/gr";
import { PiGraph } from "react-icons/pi";
import { PiTreeView } from "react-icons/pi";
import { TbReportAnalytics } from "react-icons/tb";

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/",
    icon: <HiOutlineViewGrid />,
  },
  {
    key: "products",
    label: "Product Profile",
    path: "/product-profile",
    icon: <AiOutlineProfile />,
  },
  {
    key: "create",
    label: "Create Allocation",
    path: "/create-allocation",
    icon: <IoIosCreate />,
  },
  {
    key: "grouping",
    label: "Grouping",
    path: "/grouping",
    icon: <GrGroup />,
  },
  {
    key: "configuration",
    label: "Configuration",
    path: "/configuration",
    icon: <FaUserGear />,
  },
  {
    key: "constraints",
    label: "Constraints",
    path: "/constraints",
    icon: <IoConstruct />,
  },
  {
    key: "orderbatch",
    label: "Order Batching",
    path: "/order-batching",
    icon: <PiGraph />,
  },
  {
    key: "viewpast",
    label: "View Past Allocation",
    path: "/view-past-allocation",
    icon: <PiTreeView />,
  },
  {
    key: "report",
    label: "Reports",
    path: "/report",
    icon: <TbReportAnalytics />,
  },
];

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
  {
    key: "settings",
    label: "Settings",
    path: "/settings",
    icon: <HiOutlineCog />,
  },
  {
    key: "support",
    label: "Help & Support",
    path: "/support",
    icon: <HiOutlineQuestionMarkCircle />,
  },
];

export const breadcrumbData = [
  { label: "Dashboard", path: "/" },
  { label: "Product Profile", path: "/product-profile" },
  { label: "Create Allocation", path: "/create-allocation" },
  { label: "Grouping", path: "/grouping" },
  { label: "Configuration", path: "/configuration" },
  { label: "Constraints", path: "/constraints" },
  { label: "Order Batching", path: "/order-batching" },
  { label: "View Past Allocation", path: "/view-past-allocation" },
  { label: "Reports", path: "/report" },
  { label: "Settings", path: "/settings" },
  { label: "Help & Support", path: "/support" },
];
