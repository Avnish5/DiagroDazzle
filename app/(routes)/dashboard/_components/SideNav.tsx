import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import SideNavTop, { Team } from "./SideNavTop";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import SideaNavBottom from "./SideaNavBottom";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";
function SideNav() {
  const { user } = useKindeBrowserClient();
  const [activeTeam, setActiveTeam] = useState<Team>();
  const createFile = useMutation(api.files.createFile);
  const onFileCreate = (fileName: string) => {
    console.log(fileName);
    createFile({
      fileName: fileName,
      teamId: activeTeam?._id,
      createdBy: user?.email,
      archive: false,
      document: "",
      whiteBoard: "",
    }).then(
      (resp) => {
        console.log(resp);
        if (resp) {
          toast("File created successfully");
        }
      },
      (e) => {
        toast(" Error while creating file");
      }
    );
  };
  return (
    <div className="flex flex-col bg-gray-100 h-screen fixed w-72 border-r p-6">
      <div className="flex-1">
        <SideNavTop
          user={user}
          setActiveTeamInfo={(activeTeam: Team) => setActiveTeam(activeTeam)}
        />
      </div>

      <div>
        <SideaNavBottom onFileCreate={onFileCreate} />
      </div>
    </div>
  );
}

export default SideNav;
