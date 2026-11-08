"use client";
import { MoveRight } from "lucide-react";
import React from "react";
import Ideas from "../../../public/assets/heroes/Ideas";

const HeroesLayout = () => {
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 pt-10 lg:pt-18 px-5 md:px-12 lg:pr-16 pb-16 lg:pl-24">
        <div className="flex flex-col justify-start items-start w-full gap-7">
          <div className="flex gap-2.5 justify-center items-center">
            <span className="rounded-full size-1.75 bg-brand" />
            <p className="text-subtle text-xs font-medium uppercase">
              GDGoC UGM • 2026/2027
            </p>
          </div>
          <h1 className="flex flex-col font-display text-5xl leading-14 md:text-[80px] md:leading-21 font-bold tracking-tight">
            <span>Big ideas.</span>
            <span className="text-link">Built together.</span>
          </h1>
          <p className="text-subtle text-lg md:text-[21px] md:leading-8.25">
            A place for curious minds at{" "}
            <b className="text-ink font-medium">Universitas Gadjah Mada</b> to
            learn, connect, and build technology that matters.
          </p>
          <div className="flex flex-wrap justify-start items-center gap-3">
            <button className="flex items-center gap-4 h-13 px-6 rounded-lg bg-brand text-white font-medium cursor-pointer">
              Find your learning track <MoveRight className="size-5" />
            </button>
            <button className="flex items-center gap-4 h-13 px-6 rounded-lg bg-white text-link border border-line font-medium cursor-pointer">
              Get to know us <MoveRight className="size-5" />
            </button>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="flex -space-x-[3px]">
              <span className="size-4 rounded-full border-2 border-white bg-g-red" />
              <span className="size-4 rounded-full border-2 border-white bg-g-yellow" />
              <span className="size-4 rounded-full border-2 border-white bg-g-green" />
              <span className="size-4 rounded-full border-2 border-white bg-brand" />
            </div>
            <p className="text-subtle text-sm">
              Different backgrounds. A shared curiosity.
            </p>
          </div>
        </div>
        <div className="relative w-full max-w-155 aspect-[620/530] justify-self-center lg:justify-self-end">
          <Ideas className="pointer-events-none absolute top-0 -left-[17.7%] w-[117.7%] max-w-none h-auto" />
        </div>
      </div>
      <footer className="w-full border-y border-line flex flex-col md:flex-row justify-between items-start md:items-center gap-3 py-6.5 px-5 md:px-12 lg:px-24 text-base md:text-lg font-medium">
        <span className="flex justify-center items-center gap-3.5">
          <span className="size-2 bg-brand" />
          <p>Learn by doing</p>
        </span>
        <span className="flex justify-center items-center gap-3.5">
          <span className="size-2 bg-g-red" />
          <p>Connect across disciplines</p>
        </span>
        <span className="flex justify-center items-center gap-3.5">
          <span className="size-2 bg-g-green" />
          <p>Build with purpose</p>
        </span>
      </footer>
    </div>
  );
};

export default HeroesLayout;
