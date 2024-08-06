import Image from "next/image";
import React, { useState } from "react";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
function Header() {
  return (
    <div>
      <header className="bg-black">
        <div className="mx-auto flex justify-between h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
          <Image src="/clogo.png" alt={"logo"} height={150} width={150} />

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <LoginLink
                className="block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
                postLoginRedirectURL="/dashboard"
              >
                Login
              </LoginLink>
              <RegisterLink className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-black-600 transition hover:text-black-600/75 sm:block">
                Register
              </RegisterLink>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
