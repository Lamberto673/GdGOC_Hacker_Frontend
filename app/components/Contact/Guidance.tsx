import { MoveRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const Tips: Record<string, string>[] = [
  {
    Title: "For learning questions",
    desc: "Tell us which topic interests you and where you are in your learning journey.",
  },
  {
    Title: "For collaborations",
    desc: "Share the idea, who it’s for, and how you imagine working with the community.",
  },
  {
    Title: "Not sure which category fits?",
    desc: "Choose General inquiry. A clear question is always a good starting point.",
  },
];

const Guidance = () => {
  return (
    <div className="grid grid-cols-[420px_1fr] gap-20 px-24 py-18">
      <div className="flex flex-col justify-start items-start gap-5">
        <div className="flex justify-start items-center gap-2.5">
          <span className="size-1.75 bg-brand rounded-full" />
          <p className="text-subtle text-xs font-medium uppercase">
            A little guidance
          </p>
        </div>
        <h2 className="flex flex-col text-[40px] leading-11.25 font-bold">
          <span>Help us understand</span>
          <span>your idea.</span>
        </h2>
        <Link
          href="/Overview"
          className="flex justify-center items-center gap-3 text-link font-medium hover:underline"
        >
          Explore the programs first <MoveRight className="size-5" />
        </Link>
      </div>
      <div className="flex flex-col justify-start items-start gap-6.5">
        {Tips.map((item, key) => (
          <div
            key={key}
            className="flex flex-col justify-start items-start gap-2.5 w-full"
          >
            <h3 className="text-[21px] leading-6 font-bold">{item.Title}</h3>
            <p className="text-subtle leading-6.25">{item.desc}</p>
            <div className="h-px w-full bg-line" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Guidance;
