"use client";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const CampusCommunity = () => {
  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[490px_1fr] lg:gap-24 px-5 md:px-12 lg:px-24 py-22">
      <div className="flex flex-col gap-5">
        <div className="flex justify-start items-center gap-2.5">
          <span className="size-1.75 bg-brand rounded-full" />
          <p className="text-subtle text-xs font-medium uppercase">
            A campus. A community.
          </p>
        </div>
        <h2 className="text-4xl leading-11 md:text-5xl md:leading-13.5 font-bold">
          Not just learning tech. Finding your people.
        </h2>
        <div className="flex justify-start items-center">
          <Link
            href={"/About"}
            className="flex justify-center items-center gap-3 text-link font-medium hover:underline"
          >
            More about GDGoC UGM <MoveRight className="size-5" />
          </Link>
        </div>
      </div>
      <div className="flex flex-col justify-start items-start gap-6">
        <p className="text-lg md:text-[21px] md:leading-8.25 text-subtle">
          Google Developer Groups on Campus, Universitas Gadjah Mada brings
          students together around one simple idea: we can go{" "}
          <b className="text-ink font-medium">further</b> when we{" "}
          <b className="text-ink font-medium">learn</b> with each other.
        </p>
        <p className="text-lg text-subtle">
          From your first line of code to your next product idea, there’s room
          to ask questions, share what you know, and try something new.
        </p>
        <div className="flex flex-wrap gap-3 items-center">
          <span className="bg-surface rounded-full px-3.5 py-2 text-[13px] font-bold text-subtle">
            Student-led
          </span>
          <span className="bg-surface rounded-full px-3.5 py-2 text-[13px] font-bold text-subtle">
            Peer-powered
          </span>
          <span className="bg-surface rounded-full px-3.5 py-2 text-[13px] font-bold text-subtle">
            Curiosity-first
          </span>
        </div>
      </div>
    </div>
  );
};

export default CampusCommunity;
