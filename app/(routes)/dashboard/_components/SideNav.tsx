import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import SideNavTop, { Team } from "./SideNavTop";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import SideaNavBottom from "./SideaNavBottom";
import { useConvex, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";
function SideNav() {
  const { user } = useKindeBrowserClient();
  const [activeTeam, setActiveTeam] = useState<Team>();
  const [totalFiles, setTotalFies] = useState<Number>();
  const createFile = useMutation(api.files.createFile);
  const convex = useConvex();

  useEffect(() => {
    activeTeam && getFiles();
  }, [activeTeam]);

  const onFileCreate = (fileName: string) => {
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
          getFiles();
          toast("File created successfully");
        }
      },
      (e) => {
        toast(" Error while creating file");
      }
    );
  };

  const getFiles = async () => {
    const result = await convex.query(api.files.getFiles, {
      teamId: activeTeam?._id,
    });
    setTotalFies(result?.length);
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
        <SideaNavBottom onFileCreate={onFileCreate} totalFiles={totalFiles} />
      </div>
    </div>
  );
}

export default SideNav;
