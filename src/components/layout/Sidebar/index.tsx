import React, { FunctionComponent } from "react";
import { StaticQuery, graphql } from "gatsby";
import deptLogo from "../../../../static/images/dept-logo.svg";

export interface SidebarItem {
  label: string;
  href: string;
}

export interface SidebarProps {
  sidebarItems: SidebarItem[];
}

const Sidebar: FunctionComponent<SidebarProps> = ({ sidebarItems }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allMarkdownRemark {
            nodes {
              frontmatter {
                template
              }
            }
          }
        }
      `}
      render={(data) => (
        <nav className="shadow-lg fixed h-screen w-60 l-0 t-0">
          <img src={deptLogo} alt="Dept" />
        </nav>
      )}
    />
  );
};

export default Sidebar;
