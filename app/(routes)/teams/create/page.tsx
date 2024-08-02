"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

function CreateTeam() {
  const [teamName, setTeamName] = useState("");
  const createTeam = useMutation(api.teams.createTeam);
  const router = useRouter();
  const { user }: any = useKindeBrowserClient();

  const createNewTeam = () => {
    createTeam({
      teamName: teamName,
      createdBy: user?.email,
    }).then((resp) => {
      console.log(resp);
      if (resp) {
        router.push("/dashboard");
        toast("Team created successfully");
      }
    });
  };

  return (
    <div className="px-6 md:px-16 my-16">
      <Image src="/logo.png" alt={"logo"} height={200} width={200} />

      <div className="flex flex-col items-center mt-8">
        <h2 className="font-bold text-[40px] py-3">
          What should we call your team?
        </h2>
        <h2 className="text-gray-500">
          You can always change this later from settings
        </h2>

        <div className="mt-7 w-[40%]">
          <label className="text-gray-500">Team Name</label>
          <Input
            placeholder="Team Name"
            className="mt-3"
            onChange={(e) => setTeamName(e.target.value)}
          />
        </div>
        <Button
          disabled={!(teamName && teamName.length > 0)}
          className=" bg-blue-500 mt-9 w-[30%] hover:bg-blue-700"
          onClick={createNewTeam}
        >
          Create Team
        </Button>
      </div>
    </div>
  );
}

export default CreateTeam;
