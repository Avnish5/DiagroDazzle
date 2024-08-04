import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Link, Share } from "lucide-react";

function WorkspaceHeader() {
  return (
    <div className="p-3 border-b flex justify-between items-center">
      <div>
        <Image src="/logo.png" alt="logo" width={70} height={70} />
      </div>

      <Button className="h-8 text-[12px] bg-blue-600 hover:bg-blue-700 gap-2">
        <Link className="h-4 w-4" /> Share
      </Button>
    </div>
  );
}

export default WorkspaceHeader;
