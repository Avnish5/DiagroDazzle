import { Button } from "@/components/ui/button";
import { Archive, FileInput, Flag, Github } from "lucide-react";
import React, { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

function SideaNavBottom({ onFileCreate, totalFiles }: any) {
  const [fileName, setFileName] = useState("");
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
      <Dialog>
        <DialogTrigger className="w-full" asChild>
          <Button className="w-full bg-blue-500 hover:bg-blue-700  justify-start mt-3">
            New File
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create new file</DialogTitle>
            <DialogDescription>
              <Input
                onChange={(e) => setFileName(e.target.value)}
                placeholder="Enter file name"
                className="mt-5"
              />
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button
                disabled={!(fileName && fileName.length > 0)}
                type="button"
                className="bg-blue-600 hover:bg-blue-700"
                onClick={() => onFileCreate(fileName)}
              >
                Create
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <div className="h-4 w-full bg-gray-200 rounded-lg mt-5">
        <div
          className={`h-4  rounded-lg
           bg-blue-600`}
          style={{ width: `${(totalFiles / 5) * 100}%` }}
        ></div>
      </div>

      <h2 className="text-[12px] mt-3">
        <strong>{totalFiles}</strong> out of <strong>5</strong> files used
      </h2>
      <h2 className="text-[12px] mt-1">
        Upgrade your plan for unlimited access
      </h2>
    </div>
  );
}

export default SideaNavBottom;
