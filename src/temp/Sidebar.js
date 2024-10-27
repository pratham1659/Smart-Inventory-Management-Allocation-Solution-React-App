import React from "react";
import { MdDashboard } from "react-icons/md";
import { SIDEBAR_LINKS, SIDEBAR_BOTTOM_LINKS } from "../utils/data";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import { HiOutlineLogout } from "react-icons/hi";

const linkClass =
  "flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base";

export default function Sidebar() {
  return (
    <div className="bg-neutral-900 w-60 p-3 flex flex-col text-white overflow-y-auto max-h-screen">
      <div className="flex items-center gap-2 px-3 py-3">
        <MdDashboard fontSize={30} />
        <span className="text-neutral-300 text-xl font-bold">Navigator</span>
      </div>
      <div className="flex-1 py-4 flex flex-col gap-0.5">
        {SIDEBAR_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
      </div>
      <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
        {SIDEBAR_BOTTOM_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
        <div>
          <div className={classNames(linkClass, "cursor-pointer text-red-500")}>
            <span className="text-xl">
              <HiOutlineLogout />
            </span>
            Logout
          </div>
        </div>
      </div>
    </div>
  );
}

function SidebarLink({ item }) {
  const { pathname } = useLocation();
  return (
    <Link to={item.path} className={classNames(pathname === item.path ? "text-white bg-neutral-700" : "text-neutral-400", linkClass)}>
      <span className="text-xl">{item.icon}</span>
      {item.label}
    </Link>
  );
}
