"use client";
import Image from "next/image";
import Hero from "./_components/Hero";
import Header from "./_components/Header";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const { user } = useKindeBrowserClient();
  const router = useRouter();
  useEffect(() => {
    console.log(user);
    if (user) {
      router.push("/dashboard");
    }
  }, [user]);

  return (
    <div>
      <Header />
      <Hero />
    </div>
  );
}
