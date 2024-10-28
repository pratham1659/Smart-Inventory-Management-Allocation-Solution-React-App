import { HiOutlineViewGrid, HiOutlineQuestionMarkCircle, HiOutlineCog } from "react-icons/hi";
import { FaUserGear } from "react-icons/fa6";
import { IoConstruct } from "react-icons/io5";
import { AiOutlineProfile } from "react-icons/ai";
import { IoIosCreate } from "react-icons/io";
import { GrGroup } from "react-icons/gr";
import { PiGraph } from "react-icons/pi";
import { PiTreeView } from "react-icons/pi";
import { TbReportAnalytics } from "react-icons/tb";
import React from "react";
import { FiBarChart, FiCreditCard, FiStar, FiShoppingCart } from "react-icons/fi";
import { BsBoxSeam, BsCurrencyDollar, BsShield, BsChatLeft } from "react-icons/bs";
import { MdOutlineSupervisorAccount } from "react-icons/md";
import { HiOutlineRefresh } from "react-icons/hi";
import { TiTick } from "react-icons/ti";

export const SIDEBAR_LINKS = [
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

export const SIDEBAR_BOTTOM_LINKS = [
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

export const earningData = [
  {
    icon: <MdOutlineSupervisorAccount />,
    amount: "39,354",
    percentage: "-4%",
    title: "Customers",
    iconColor: "#03C9D7",
    iconBg: "#E5FAFB",
    pcColor: "red-600",
  },
  {
    icon: <BsBoxSeam />,
    amount: "4,396",
    percentage: "+23%",
    title: "Products",
    iconColor: "rgb(255, 244, 229)",
    iconBg: "rgb(254, 201, 15)",
    pcColor: "green-600",
  },
  {
    icon: <FiBarChart />,
    amount: "423,39",
    percentage: "+38%",
    title: "Sales",
    iconColor: "rgb(228, 106, 118)",
    iconBg: "rgb(255, 244, 229)",

    pcColor: "green-600",
  },
  {
    icon: <HiOutlineRefresh />,
    amount: "39,354",
    percentage: "-12%",
    title: "Refunds",
    iconColor: "rgb(0, 194, 146)",
    iconBg: "rgb(235, 250, 242)",
    pcColor: "red-600",
  },
];

export const recentTransactions = [
  {
    icon: <BsCurrencyDollar />,
    amount: "+$350",
    title: "Paypal Transfer",
    desc: "Money Added",
    iconColor: "#03C9D7",
    iconBg: "#E5FAFB",
    pcColor: "green-600",
  },
  {
    icon: <BsShield />,
    amount: "-$560",
    desc: "Bill Payment",
    title: "Wallet",
    iconColor: "rgb(0, 194, 146)",
    iconBg: "rgb(235, 250, 242)",
    pcColor: "red-600",
  },
  {
    icon: <FiCreditCard />,
    amount: "+$350",
    title: "Credit Card",
    desc: "Money reversed",
    iconColor: "rgb(255, 244, 229)",
    iconBg: "rgb(254, 201, 15)",

    pcColor: "green-600",
  },
  {
    icon: <TiTick />,
    amount: "+$350",
    title: "Bank Transfer",
    desc: "Money Added",

    iconColor: "rgb(228, 106, 118)",
    iconBg: "rgb(255, 244, 229)",
    pcColor: "green-600",
  },
  {
    icon: <BsCurrencyDollar />,
    amount: "-$50",
    percentage: "+38%",
    title: "Refund",
    desc: "Payment Sent",
    iconColor: "#03C9D7",
    iconBg: "#E5FAFB",
    pcColor: "red-600",
  },
];

export const weeklyStats = [
  {
    icon: <FiShoppingCart />,
    amount: "-$560",
    title: "Top Sales",
    desc: "Johnathan Doe",
    iconBg: "#FB9678",
    pcColor: "red-600",
  },
  {
    icon: <FiStar />,
    amount: "-$560",
    title: "Best Seller",
    desc: "MaterialPro Admin",
    iconBg: "rgb(254, 201, 15)",
    pcColor: "red-600",
  },
  {
    icon: <BsChatLeft />,
    amount: "+$560",
    title: "Most Commented",
    desc: "Ample Admin",
    iconBg: "#00C292",
    pcColor: "green-600",
  },
];

export const dropdownData = [
  {
    id: "1",
    date: "March 2021",
  },
  {
    id: "2",
    date: "April 2021",
  },
  {
    id: "3",
    date: "May 2021",
  },
];

export const contextMenuItems = [
  "AutoFit",
  "AutoFitAll",
  "SortAscending",
  "SortDescending",
  "Copy",
  "Edit",
  "Delete",
  "Save",
  "Cancel",
  "PdfExport",
  "ExcelExport",
  "CsvExport",
  "FirstPage",
  "PrevPage",
  "LastPage",
  "NextPage",
];

export const themeColors = [
  {
    name: "blue-theme",
    color: "#1A97F5",
  },
  {
    name: "green-theme",
    color: "#03C9D7",
  },
  {
    name: "purple-theme",
    color: "#7352FF",
  },
  {
    name: "red-theme",
    color: "#FF5C8E",
  },
  {
    name: "indigo-theme",
    color: "#1E4DB7",
  },
  {
    color: "#FB9678",
    name: "orange-theme",
  },
];

export const chatData = [
  {
    message: "Roman Joined the Team!",
    desc: "Congratulate him",
    time: "9:08 AM",
  },
  {
    message: "New message received",
    desc: "Salma sent you new message",
    time: "11:56 AM",
  },
  {
    message: "New Payment received",
    desc: "Check your earnings",
    time: "4:39 AM",
  },
  {
    message: "Jolly completed tasks",
    desc: "Assign her new tasks",
    time: "1:12 AM",
  },
];

export const userProfileData = [
  {
    icon: <BsCurrencyDollar />,
    title: "My Profile",
    desc: "Account Settings",
    iconColor: "#03C9D7",
    iconBg: "#E5FAFB",
  },
  {
    icon: <BsShield />,
    title: "My Inbox",
    desc: "Messages & Emails",
    iconColor: "rgb(0, 194, 146)",
    iconBg: "rgb(235, 250, 242)",
  },
  {
    icon: <FiCreditCard />,
    title: "My Tasks",
    desc: "To-do and Daily Tasks",
    iconColor: "rgb(255, 244, 229)",
    iconBg: "rgb(254, 201, 15)",
  },
];
