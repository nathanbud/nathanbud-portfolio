"use client";
import React from "react";
import { FloatingNav } from "./ui/FloatingNav";
import { TbHome, TbMessage, TbUser } from "react-icons/tb";
export function NavigationBar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <TbHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <TbUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Portfolio",
      link: "/portfolio",
      icon: <TbMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: <TbMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
