import React from "react";
import { storiesOf } from "@storybook/react";
import Sidebar, { SidebarItem } from ".";

const story = storiesOf("Components|Layout", module);

const data: SidebarItem[] = [
  {
    title: "Titulo",
    href: "/",
  },
];

story.add("Sidebar", () => <Sidebar sidebarItems={data} />);
