"use client";
import React from "react";
import { HeroParallax } from "./ui/HeroParrallax";

export function Parallax() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail: "/b1.svg",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail: "/b1.svg",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail: "/b1.svg",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail: "/b1.svg",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail: "/b1.svg",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail: "/b1.svg",
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail: "/b1.svg",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail: "/b1.svg ",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail: "/b1.svg",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail: "/b1.svg",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail: "/b1.svg",
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail: "/b1.svg",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail: "/b1.svg",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail: "/b1.svg",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail: "/b1.svg",
  },
];
