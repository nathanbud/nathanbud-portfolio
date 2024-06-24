"use client";
import React from "react";
import { FloatingNav } from "./ui/FloatingNav";
import { TbHome, TbMessage, TbUser } from "react-icons/tb";
import { navItems } from "@/data";

export function NavigationBar() {
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
