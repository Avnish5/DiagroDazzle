import { ChevronDown, LayoutGrid, LogOut, Settings, Users } from "lucide-react";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import { useConvex } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export interface Team {
  createdBy: String;
  teamName: String;
  _id: String;
}
function SideNavTop({ user, setActiveTeamInfo }: any) {
  const convex = useConvex();
  const router = useRouter();
  const menu = [
    {
      id: 1,
      name: "Create Team",
      path: "/teams/create",
      icon: Users,
    },
    {
      id: 2,
      name: "Settings",
      path: "",
      icon: Settings,
    },
  ];

  const [teamList, setTeamList] = useState<Team[]>();
  const [activeTeam, setActiveTeam] = useState<Team>();
  useEffect(() => {
    user && getTeamList();
  }, [user]);

  useEffect(() => {
    activeTeam && setActiveTeamInfo(activeTeam);
  }, [activeTeam]);
  const getTeamList = async () => {
    const result = await convex.query(api.teams.getTeam, {
      email: user?.email,
    });
    console.log(result);
    setTeamList(result);
    setActiveTeam(result[0]);
  };

  const onMenuClick = (item: any) => {
    if (item?.path) {
      router.push(item?.path);
    }
  };
  return (
    <div>
      <Popover>
        <PopoverTrigger>
          <div className="flex items-center gap-3 hover:bg-gray-200 p-3 rounded-lg cursor-pointer">
            <Image src="/tlogo.png" alt="logo" width={70} height={70} />
            <h2 className="flex gap-2 items-center font-bold text-[17px]">
              {activeTeam?.teamName}
              <ChevronDown />
            </h2>
          </div>
        </PopoverTrigger>
        <PopoverContent className="mt-7 p-4">
          <div>
            {teamList?.map((team, index) => (
              <h2
                key={index}
                className={`p-2
            rounded-lg mb-1 cursor-pointer
            ${activeTeam?._id == team._id && " bg-blue-500 hover:text-white"}`}
                onClick={() => setActiveTeam(team)}
              >
                {team?.teamName}
              </h2>
            ))}
          </div>
          <Separator className="mt-2 bg-slate-100" />

          <div>
            {menu.map((item, index) => (
              <h2
                key={index}
                onClick={() => onMenuClick(item)}
                className="flex gap-2 items-center p-2 hover:bg-gray-100 rounded-lg text-sm cursor-pointer"
              >
                <item.icon className="w-4 h-4" />
                {item.name}
              </h2>
            ))}
          </div>
          <LogoutLink>
            <h2 className="flex gap-2 items-center p-2 hover:bg-gray-100 rounded-lg text-sm cursor-pointer">
              <LogOut className="w-4 h-4" />
              Logout
            </h2>
          </LogoutLink>
          <Separator className="mt-2 bg-slate-100" />

          {user && (
            <div className="mt-2 flex gap-2 items-center">
              <Image
                src={user?.picture}
                alt="user-picture"
                height={30}
                width={30}
                className="rounded-full bg-red-900"
              />
              <div>
                <h2 className="text-[14px] font-bold">
                  {user?.given_name}
                  {user?.family_name}
                </h2>
                <h2 className="text-[14px] text-gray-500">{user?.email}</h2>
              </div>
            </div>
          )}
        </PopoverContent>
      </Popover>

      <Button
        variant="outline"
        className="w-full justify-start gap-2 font-bold mt-8 "
      >
        <LayoutGrid className="h-5 w-5 " />
        All Files
      </Button>
    </div>
  );
}

export default SideNavTop;
