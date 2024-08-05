"use client";
import Image from "next/image";
import Hero from "./_components/Hero";
import Header from "./_components/Header";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

export default function Home() {
  const { user } = useKindeBrowserClient();

  return (
    <div>
      <Header />
      <Hero />
    </div>
  );
}
