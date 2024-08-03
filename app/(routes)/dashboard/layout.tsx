"use client";
import React, { useContext, useEffect } from "react";
import { useConvex, useMutation, useQuery } from "convex/react";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { api } from "@/convex/_generated/api";
import { useRouter } from "next/navigation";
import SideNav from "./_components/SideNav";
function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const convex = useConvex();
  const { user }: any = useKindeBrowserClient();

  useEffect(() => {
    user && checkTeam();
  }, [user]);

  const checkTeam = async () => {
    const result = await convex.query(api.teams.getTeam, {
      email: user?.email,
    });

    if (!result?.length) {
      router.push("teams/create");
    }
  };

  return (
    <div>
      <div className="grid grid-cols-4">
        <div>
          <SideNav />
        </div>
        <div className="grid-cols-3">{children}</div>
      </div>
    </div>
  );
}

export default DashboardLayout;
