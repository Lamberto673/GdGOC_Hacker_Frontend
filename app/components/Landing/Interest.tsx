"use client";
import Design from "@/public/assets/tracks/Design";
import Development from "@/public/assets/tracks/Development";

import Research from "@/public/assets/tracks/Research";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import React from "react";

type TrackCardProps = {
  Art: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  eyebrow: string;
  title: string;
  description: string;
  skills: string;
};

const TrackCard = ({
  Art,
  eyebrow,
  title,
  description,
  skills,
}: TrackCardProps) => {
  return (
    <article className="relative overflow-hidden rounded-3xl border border-line bg-white">
      <Art className="absolute left-0 top-0 h-auto w-full" />
      <div className="relative flex flex-col gap-4.5 px-7 pb-7 pt-[calc(58%+1.75rem)]">
        <p className="text-[11px] font-medium uppercase text-link">{eyebrow}</p>
        <h3 className="text-[28px] leading-7.75 font-bold">{title}</h3>
        <p className="text-subtle leading-6.25">{description}</p>
        <hr className="border-line" />
        <p className="text-[13px] leading-5 text-subtle">{skills}</p>
        <button className="flex items-center gap-3 text-link font-medium cursor-pointer hover:underline">
          Explore this track <MoveRight className="size-5" />
        </button>
      </div>
    </article>
  );
};

const Interest = () => {
  return (
    <div className="flex flex-col justify-start items-start gap-9 pt-4 px-24 pb-22">
      <div className="flex w-full justify-between items-end">
        <div className="flex flex-col gap-4.5 max-w-200">
          <div className="flex items-center gap-2.5">
            <span className="size-1.75 bg-brand rounded-full" />
            <p className="text-subtle text-xs font-medium uppercase">
              Find your starting point
            </p>
          </div>
          <h2 className="text-5xl leading-13.5 font-bold">
            Many interests. One shared journey.
          </h2>
          <p className="text-lg text-subtle">
            Follow what excites you. Explore a track, then connect the dots
            with others.
          </p>
        </div>
        <Link
          href="/Overview"
          className="flex items-center gap-3 text-link font-medium hover:underline"
        >
          See the overview <MoveRight className="size-5" />
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-6 w-full">
        <TrackCard
          Art={Research}
          eyebrow="EXPLORE THE WHY"
          title="Research & discovery"
          description="Ask better questions, understand people, and turn insight into a clear problem worth solving."
          skills="Problem framing · User research · Product thinking"
        />
        <TrackCard
          Art={Design}
          eyebrow="MAKE IT MEANINGFUL"
          title="Design & creativity"
          description="Translate ideas into thoughtful experiences, from a first sketch to a prototype people can use."
          skills="UI/UX · Visual storytelling · Prototyping"
        />
        <TrackCard
          Art={Development}
          eyebrow="BRING IDEAS TO LIFE"
          title="Development"
          description="Learn the tools, write the code, and build useful things with people who enjoy figuring it out."
          skills="Web & mobile · Cloud · AI foundations"
        />
      </div>
    </div>
  );
};

export default Interest;
