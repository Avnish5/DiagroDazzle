import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Link, Save, Share } from "lucide-react";

function WorkspaceHeader({ onSave }: any) {
  return (
    <div className="p-3 border-b flex justify-between items-center">
      <div>
        <Image src="/tlogo.png" alt="logo" width={70} height={70} />
      </div>

      <div className="flex items-center gap-4">
        <Button
          className="h-8 text-[12px] bg-yellow-600 hover:bg-yellow-700 gap-2"
          onClick={() => onSave()}
        >
          <Save className="h-4 w-4" /> Save
        </Button>
        <Button className="h-8 text-[12px] bg-blue-600 hover:bg-blue-700 gap-2">
          <Link className="h-4 w-4" /> Share
        </Button>
      </div>
    </div>
  );
}

export default WorkspaceHeader;
