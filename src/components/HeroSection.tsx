"use client";
import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div className="rounded-m relative mx-auto flex h-auto w-full flex-col items-center justify-center overflow-hidden py-10 md:h-[40rem] md:py-0">
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <div className="relative z-10 w-full p-4 text-center">
        <h1 className="mt-20 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-4xl font-bold text-transparent md:mt-0 md:text-7xl">
          Master the art of Music
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-base font-normal text-neutral-300 md:text-lg">
          Drive into our comprehensice music courses and transform your musical
          journey today. Weather your skills, join us to unlock your true
          potential.
        </p>
        <div className="mt-10">
          <Button
            borderRadius="1.75rem"
            className="text-base border-neutral-200 bg-white text-black dark:border-slate-800 dark:bg-slate-900 dark:text-white"
          >
            Borders are cool
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
