import React from "react";
import Link from "next/link";
import {
  RegisterLink,
  useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";

function Hero() {
  const { user } = useKindeBrowserClient();
  return (
    <div>
      <section className=" h-screen relative bg-[url(https://images.unsplash.com/photo-1663517768994-a65e6ab3a40a?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl text-white font-extrabold sm:text-5xl">
              Craft Beautiful
              <strong className="block font-extrabold text-rose-700">
                {" "}
                Diagrams Effortlessly.{" "}
              </strong>
            </h1>

            <p className="mt-4  text-white max-w-lg sm:text-xl/relaxed">
              At DiagroDazzle , we believe in simplifying the process of diagram
              creation. Our intuitive tools help you visualize, design, and
              communicate your ideas with clarity and precision
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <Link
                href={user ? "/dashboard" : "/"}
                className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Get Started
              </Link>

              <Link
                href="/"
                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
