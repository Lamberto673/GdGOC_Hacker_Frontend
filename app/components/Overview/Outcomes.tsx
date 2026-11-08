import React from "react";

const Pathways: Record<string, string>[] = [
  {
    Pathway: "Research & discovery",
    Practice: "Listening, problem framing, and testing assumptions",
    Outcome: "A research insight and a focused problem brief",
  },
  {
    Pathway: "Design & creativity",
    Practice: "Ideation, user flows, and prototype feedback",
    Outcome: "An interactive prototype and a design story",
  },
  {
    Pathway: "Development",
    Practice: "Coding, testing, and connecting tools",
    Outcome: "A working demo with a clear explanation",
  },
];

const Outcomes = () => {
  return (
    <div className="flex flex-col justify-start items-start gap-8 px-24 pb-20">
      <h2 className="text-4xl leading-10 font-bold">
        From an interest to something you can show.
      </h2>
      <div className="flex flex-col w-full overflow-hidden rounded-[20px] border border-line">
        <div className="grid grid-cols-[250px_448px_1fr] gap-7 px-7 py-5 bg-surface text-xs font-medium text-subtle">
          <p>Pathway</p>
          <p>What you can practice</p>
          <p>A possible outcome</p>
        </div>
        {Pathways.map((item, key) => (
          <div
            key={key}
            className="grid grid-cols-[250px_448px_1fr] gap-7 p-7 border-t border-line"
          >
            <p className="text-lg font-medium">{item.Pathway}</p>
            <p className="text-subtle leading-6.25">{item.Practice}</p>
            <p className="text-subtle leading-6.25">{item.Outcome}</p>
          </div>
        ))}
      </div>
      <p className="text-[13px] leading-5 text-subtle">
        Illustrative learning outcomes. Topics and opportunities are shared
        through community updates.
      </p>
    </div>
  );
};

export default Outcomes;
