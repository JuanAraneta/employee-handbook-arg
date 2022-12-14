import React, { FunctionComponent } from "react";
import { Link } from "gatsby";
import deptLogo from "../../../../static/images/dept-logo.svg";

export interface SidebarItem {
  title: string;
  href: string;
}

export interface SidebarProps {
  sidebarItems: SidebarItem[];
}

const Sidebar: FunctionComponent<SidebarProps> = ({ sidebarItems }) => {
  return (
    <nav className="shadow-lg fixed h-screen w-60 l-0 t-0 px-12 pt-12">
      <div className="flex mb-20">
        <img className="w-2/3" src={deptLogo} alt="Dept" />
        🇦🇷
      </div>
      <div>
        <Link to="/">Home</Link>
      </div>
      {sidebarItems.map(({ title, href }) => (
        <div key={href}>
          <Link to={href}>{title}</Link>
        </div>
      ))}
    </nav>
  );
};

export default Sidebar;
