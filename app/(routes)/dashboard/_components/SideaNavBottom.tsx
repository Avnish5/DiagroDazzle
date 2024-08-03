import { Button } from "@/components/ui/button";
import { Archive, Flag, Github } from "lucide-react";
import React from "react";

function SideaNavBottom() {
  const menuList = [
    {
      id: 1,
      name: "Getting Started",
      path: "",
      icon: Flag,
    },
    {
      id: 2,
      name: "Github",
      path: "",
      icon: Github,
    },
    {
      id: 3,
      name: "Archive",
      path: "",
      icon: Archive,
    },
  ];
  return (
    <div>
      {menuList.map((menu, index) => (
        <h2
          key={index}
          className="flex gap-2 p-2 px-2 text-[14px] hover:bg-gray-200 rounded-md cursor-pointer"
        >
          <menu.icon className="h-5 w-5" />
          {menu.name}
        </h2>
      ))}

      <Button className="w-full bg-blue-500 hover:bg-blue-700  justify-start mt-3">
        New File
      </Button>

      <div className="h-4 w-full bg-gray-200 rounded-lg mt-5">
        <div className="h-4 w-[40%] rounded-lg bg-blue-600"></div>
      </div>

      <h2 className="text-[12px] mt-3">
        <strong>1</strong> out of <strong>5</strong> files used
      </h2>
      <h2 className="text-[12px] mt-1">
        Upgrade your plan for unlimited access
      </h2>
    </div>
  );
}

export default SideaNavBottom;
