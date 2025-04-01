import React from "react";
import MenuItem from "@/components/MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";

export default function Header() {
  return (
    <div className="flex justify-between items-center p-4">
      <div className="flex gap-4">
        <MenuItem title="home" address="/" Icon={AiFillHome} />
        <MenuItem title="about" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <div className="flex gap-4 items-center">
        <DarkModeSwitch />
        <Link
          href={"/"}
          className="text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg"
        >
          IMDb
        </Link>
        <span className="text-xl hidden sm:inline">Clone</span>
      </div>
    </div>
  );
}
