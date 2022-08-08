import React from "react";
import { storiesOf } from "@storybook/react";
import Sidebar, { SidebarItem } from ".";

const story = storiesOf("Components|Layout", module);

const data: SidebarItem[] = [
  {
    label: "Titulo",
    href: "/",
  },
];

story.add("Header", () => <Sidebar sidebarItems={data} />);
