import React, { FunctionComponent } from "react";
import Helmet from "react-helmet";
import { withPrefix } from "gatsby";
import { useSiteMetadata } from "../hooks/useSiteMetadata";
import Sidebar, { SidebarItem } from "./Sidebar";
import { Footer } from "./footer";

const footer = {
  copyrightOwner: "GEEK SG",
  linkedin: "https://www.linkedin.com/in/raymondyeh/",
  github: "https://github.com/yehjxraymond",
  instagram: "https://www.instagram.com/geek.sg/",
};

interface Props {
  children: React.ReactNode;
  items: SidebarItem[];
}

export const Layout: React.FC<Props> = ({ children, items }) => {
  const { title } = useSiteMetadata();
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
          color="#ffffff"
        />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <meta name="theme-color" content="#fff" />
      </Helmet>
      <Sidebar sidebarItems={items} />
      <div className="min-h-screen ml-60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
        <Footer {...footer} />
      </div>
    </>
  );
};

export default Layout;
