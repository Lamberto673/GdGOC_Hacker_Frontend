import React from "react";
const Lists: Record<string, string>[] = [
  {
    Step: "01",
    Title: "Follow your curiosity",
    desc: "Explore the tracks and find a topic you want to understand better.",
  },
  {
    Step: "02",
    Title: "Learn alongside others",
    desc: "Join a learning opportunity, ask a question, and share your perspective.",
  },
  {
    Step: "03",
    Title: "Turn learning into action",
    desc: "Practice through a project, exchange feedback, and pass something on.",
  },
];
const MakeYourFirstMove = () => {
  return (
    <div className="flex flex-col justify-start items-start gap-10 pt-2 px-24 pb-22">
      <div className="flex flex-col gap-4.5">
        <div className="flex justify-start items-center gap-2.5">
          <span className="size-1.75 bg-brand rounded-full" />
          <p className="text-xs font-medium uppercase text-subtle">
            Make your first move
          </p>
        </div>
        <h2 className="flex flex-col text-5xl leading-13.5 font-bold">
          <span>You don’t need to have it all</span>
          <span>figured out.</span>
        </h2>
      </div>
      <div className="grid grid-cols-3 gap-10 w-full">
        {Lists.map((item, id) => (
          <div key={id} className="flex flex-col justify-start items-start gap-5">
            <strong className="font-display text-link text-[44px] leading-13.25">
              {item.Step}
            </strong>
            <div className="h-px w-full bg-line" />
            <div className="flex flex-col justify-start items-start gap-5">
              <h3 className="text-[25px] leading-7 font-bold">{item.Title}</h3>
              <p className="text-subtle leading-6.25">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MakeYourFirstMove;
