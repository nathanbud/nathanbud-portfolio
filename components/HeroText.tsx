"use client";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const words = `I m Nathaniel: aspiring Fullstack Web Developer.
`;

export function HeroText() {
  return (
    <TextGenerateEffect
      className="text-left text-[40px] md:text-5xl lg:text-6xl"
      words={words}
    />
  );
}
