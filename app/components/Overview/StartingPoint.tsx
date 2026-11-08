import { MoveRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const StartingPoint = () => {
  return (
    <div className="grid grid-cols-[460px_1fr] gap-16 px-24 py-14">
      <div className="flex flex-col justify-start items-start gap-4">
        <div className="flex justify-start items-center gap-2.5">
          <span className="size-1.75 bg-brand rounded-full" />
          <p className="text-subtle text-xs font-medium uppercase">
            Start where you are
          </p>
        </div>
        <h2 className="flex flex-col text-4xl leading-10 font-bold">
          <span>New to tech?</span>
          <span>That’s a starting point, too.</span>
        </h2>
      </div>
      <div className="flex flex-col justify-start items-start gap-5">
        <p className="text-lg text-subtle">
          You don’t need a finished portfolio or the perfect track choice. Pick
          a topic you’re curious about. If you’re unsure, tell us what interests
          you and we can start a conversation.
        </p>
        <Link
          href="/Contact"
          className="flex justify-center items-center gap-3 text-link font-medium hover:underline"
        >
          Ask about getting started <MoveRight className="size-5" />
        </Link>
      </div>
    </div>
  );
};

export default StartingPoint;
