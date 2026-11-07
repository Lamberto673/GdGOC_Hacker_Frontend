import { CodeXml, MoveRight } from "lucide-react";
import React from "react";

const ProtoType = () => {
  return (
    <div className="grid grid-cols-2 items-center px-24 py-22 gap-16">
      <div className="rounded-4xl p-10 flex flex-col justify-start items-start bg-tint-yellow gap-6">
        <div className="flex justify-between items-center w-full">
          <p className="text-xs text-subtle">IDEA → PROTOTYPE</p>
          <CodeXml className="size-6 text-link" />
        </div>
        <div className="flex flex-col justify-start items-start rounded-2xl border border-line p-6.5 gap-6 bg-white w-full">
          <div className="flex gap-1.5 justify-start items-start">
            <span className="size-2 rounded-full bg-g-red" />
            <span className="size-2 rounded-full bg-g-yellow" />
            <span className="size-2 rounded-full bg-g-green" />
          </div>
          <p className="text-[32px] leading-9 font-bold">
            A little less friction. A better campus day.
          </p>
          <div className="flex items-center gap-3 w-full">
            <span className="flex-1 p-4 bg-tint-blue rounded-xl text-[13px] font-bold text-black">
              Discover
            </span>
            <span className="flex-1 p-4 bg-tint-green rounded-xl text-[13px] font-bold text-black">
              Connect
            </span>
            <span className="flex-1 p-4 bg-tint-red rounded-xl text-[13px] font-bold text-black">
              Share
            </span>
          </div>
          <p className="text-subtle text-[13px] leading-5">
            Start with a student need. Build a small, useful solution.
          </p>
        </div>
        <p className="text-subtle text-[11px]">
          EXAMPLE PROJECT BRIEF • NOT A LAUNCHED PRODUCT
        </p>
      </div>
      <div className="flex flex-col justify-center items-start gap-6">
        <div className="flex justify-start items-center gap-2.5 w-full">
          <span className="bg-brand size-1.75 rounded-full" />
          <p className="text-xs font-medium uppercase text-subtle">
            Build something that matters
          </p>
        </div>
        <h2 className="text-5xl leading-13.5 font-bold">
          Your next project could start on campus.
        </h2>
        <p className="text-lg text-subtle">
          What if finding a study partner, sharing resources, or navigating
          campus felt easier? Small, familiar problems can be the beginning of
          meaningful work.
        </p>
        <p className="text-subtle leading-6.25">
          Bring research, design, and development together. Try an idea, get
          feedback, and make the next version better.
        </p>
        <button className="flex items-center gap-3 text-link font-medium cursor-pointer hover:underline">
          Explore project-based learning
          <MoveRight className="size-5" />
        </button>
      </div>
    </div>
  );
};

export default ProtoType;
