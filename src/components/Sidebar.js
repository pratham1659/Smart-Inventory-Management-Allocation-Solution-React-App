import React from "react";
import { MdDashboard } from "react-icons/md";
import { DASHBOARD_SIDEBAR_LINKS } from "../utils/data";
import { Link } from "react-router-dom";
import classNames from "classnames";

const linkClass =
  "flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base";

export default function Sidebar() {
  return (
    <div className="bg-neutral-900 w-60 p-3 flex flex-col text-white">
      <div className="flex items-center gap-2 px-3 py-3">
        <MdDashboard fontSize={30} />
        <span className="text-neutral-300 text-xl font-bold">Navigator</span>
      </div>
      <div className="flex-1">
        {DASHBOARD_SIDEBAR_LINKS.map((item) => (
          <SidebarLinks key={item.key} item={item} />
        ))}
      </div>
      <div>bottom part</div>
    </div>
  );
}

function SidebarLinks({ item }) {
  return (
    <Link to={item.path} className={classNames("text-white", linkClass)}>
      <span className="text-xl">{item.icon}</span>
      {item.label}
    </Link>
  );
}
