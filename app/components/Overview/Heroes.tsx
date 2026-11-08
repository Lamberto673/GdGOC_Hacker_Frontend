import Image from "next/image";
import React from "react";
import OverviewArtwork from "@/public/assets/HeroesForOverview/OverviewArtwork.png";

const Heroes = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-center gap-8 md:gap-16 px-5 md:px-12 lg:px-24 pt-10 md:pt-16 pb-14">
      <div className="flex flex-col justify-start items-start gap-6 max-w-230">
        <div className="flex justify-start items-center gap-2.5">
          <span className="size-1.75 bg-brand rounded-full" />
          <p className="text-subtle text-xs font-medium uppercase">
            Overview • Programs & learning tracks
          </p>
        </div>
        <h1 className="flex flex-col font-display text-5xl leading-14 md:text-[72px] md:leading-19.5 font-bold">
          <span>Find your spark.</span>
          <span className="text-link">Build your own path.</span>
        </h1>
        <p className="text-lg md:text-[21px] md:leading-8.25 text-subtle">
          Explore how research, creativity, and development connect. Start with
          one interest. Grow through practice and the people around you.
        </p>
      </div>
      <Image
        src={OverviewArtwork}
        alt="Glass puzzle piece with a magnifying glass"
        className="w-40 md:w-66 h-auto shrink-0"
        priority
      />
    </div>
  );
};

export default Heroes;
