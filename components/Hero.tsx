import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { GridBackground } from "./GridBackground";
import { HeroText } from "./HeroText";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <Spotlight
        className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
        fill="white"
      />
      <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple" />
      <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      <GridBackground />
      <div className="flex flex-row relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-left">
          <h2 className="uppercase tracking-widest text-xs text-left text-blue-100 max-w-80">
            Dynamic Web Magic with Next.js
          </h2>
          <HeroText />
          <p className="text-left md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Transforming concepts into Seamless Experiences
          </p>
          <a href="#">
            <MagicButton
              title="Discover More"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
        <div>
          <p>image here</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
