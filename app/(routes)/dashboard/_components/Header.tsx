import { Input } from "@/components/ui/input";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { Search, Send } from "lucide-react";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

function Header() {
  const { user } = useKindeBrowserClient();
  return (
    <div className="flex justify-end w-full items-center gap-2">
      <div className="flex gap-2 items-center border rounded-md p-1">
        <Search className="w-4 h-4" />
        <input type="text" placeholder="Search" />
      </div>

      <div>
        <Image
          src={user?.picture || "/logo.png"}
          alt="user-image"
          width={30}
          height={30}
          className="rounded-full bg-red-800"
        />
      </div>

      <Button className="flex gap-2 text-sm h-8 bg-blue-600 hover:bg-blue-700">
        <Send className="h-4 w-4" />
        Invite
      </Button>
    </div>
  );
}

export default Header;
