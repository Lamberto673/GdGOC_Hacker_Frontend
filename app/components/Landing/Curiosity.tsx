import { MoveRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const Curiosity = () => {
  return (
    <div className="flex px-24 py-16 justify-center items-center">
      <div className="bg-tint-blue p-12 flex justify-between items-center rounded-4xl gap-12 w-full">
        <div className="flex flex-col justify-start items-start gap-4">
          <div className="flex justify-start items-center gap-2.5">
            <span className="size-1.75 bg-brand rounded-full" />
            <p className="text-subtle text-xs font-medium uppercase">
              Your next chapter
            </p>
          </div>
          <h2 className="flex flex-col justify-start items-start text-[44px] leading-12.25 font-bold">
            <span>Bring your curiosity.</span>
            <span>We’ll build from there.</span>
          </h2>
          <p className="text-subtle text-lg">
            Find a learning track, meet a collaborator, or start a
            conversation.
          </p>
        </div>
        <div className="flex shrink-0 flex-col justify-center items-start gap-4">
          <Link
            href={`/Overview`}
            className="flex items-center gap-4 h-13 px-6 rounded-lg bg-brand text-white font-medium"
          >
            Explore the overview <MoveRight className="size-5" />
          </Link>
          <Link
            className="flex items-center gap-3 text-link font-medium hover:underline"
            href={`/Contact`}
          >
            Talk to the community <MoveRight className="size-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Curiosity;
