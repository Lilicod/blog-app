import React from "react";
import SecondaryButton from "./SecondaryButton";
import MainButton from "./MainButton";
import { Menu } from "./Menu";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-3 px-2 lg:bg-transparent bg-Gray lg:py-3 lg:px-10 font-poppins">
      <div className="block lg:hidden">
        <Menu />
      </div>
      <div className="flex flex-row gap-3 hidden lg:block">
        <SecondaryButton label={"FAQ"} font={"semibold"} link={"/faq"} />
        <SecondaryButton
          label={"Contact"}
          font={"semibold"}
          link={"/contact"}
        />
      </div>
      <div>
        <Link href={"/"}>
          <p className="text-3xl font-bold hidden lg:block">my blog app</p>
        </Link>
      </div>
      <div className="flex flex-row gap-3">
        <SecondaryButton label={"Log in"} font={"semibold"} link={"/login"} />
        <MainButton label={"Sign up"} font={"semibold"} link={"/signup"} />
      </div>
    </nav>
  );
}
