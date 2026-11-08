import { MoveRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const Updates = () => {
  return (
    <div className="flex flex-col justify-start items-start gap-4 p-6.5 rounded-3xl bg-tint-yellow w-full">
      <div className="flex justify-start items-center gap-2.5">
        <span className="size-1.75 bg-brand rounded-full" />
        <p className="text-subtle text-xs font-medium uppercase">
          Stay curious, stay connected
        </p>
      </div>
      <h3 className="text-[26px] leading-7.25 font-bold">
        Looking for community updates?
      </h3>
      <p className="text-subtle leading-6.25">
        Follow <b className="text-ink">@gdgoc.ugm</b> for learning
        opportunities and what’s happening in the community.
      </p>
      <Link
        href="https://www.instagram.com/gdgoc.ugm"
        target="_blank"
        className="flex justify-center items-center gap-3 text-link font-medium hover:underline"
      >
        Find @gdgoc.ugm <MoveRight className="size-5" />
      </Link>
    </div>
  );
};

export default Updates;
