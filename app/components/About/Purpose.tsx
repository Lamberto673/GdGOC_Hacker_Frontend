import React from "react";

const Purpose = () => {
  return (
    <div className="grid grid-cols-[400px_1fr] gap-24 px-24 py-20">
      <div className="flex flex-col justify-start items-start gap-5">
        <div className="flex justify-start items-center gap-2.5">
          <span className="size-1.75 bg-brand rounded-full" />
          <p className="text-subtle text-xs font-medium uppercase">
            Why we come together
          </p>
        </div>
        <h2 className="flex flex-col text-5xl leading-13.5 font-bold">
          <span>A bridge from</span>
          <span>
            <span className="text-link">“I wonder”</span> to
          </span>
          <span className="text-brand">“I made this.”</span>
        </h2>
      </div>
      <div className="flex flex-col justify-start items-start gap-6">
        <p className="text-2xl leading-9.25">
          Learning feels different when there’s someone to exchange ideas with,
          a problem you care about, and the space to give it a try.
        </p>
        <p className="text-lg leading-7 text-subtle">
          That’s the spirit of Google Developer Groups on Campus at UGM. We
          create room for students to explore technology, develop practical
          skills, and learn from one another.
        </p>
        <p className="text-lg leading-7 text-subtle">
          Our campus is the starting point. The questions we ask and the things
          we build can reach beyond it.
        </p>
      </div>
    </div>
  );
};

export default Purpose;
