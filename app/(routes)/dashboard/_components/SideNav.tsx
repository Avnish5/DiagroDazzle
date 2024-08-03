import React from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import SideNavTop from "./SideNavTop";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import SideaNavBottom from "./SideaNavBottom";
function SideNav() {
  const { user } = useKindeBrowserClient();
  return (
    <div className="flex flex-col bg-gray-100 h-screen fixed w-72 border-r p-6">
      <div className="flex-1">
        <SideNavTop user={user} />
      </div>

      <div>
        <SideaNavBottom />
      </div>
    </div>
  );
}

export default SideNav;
