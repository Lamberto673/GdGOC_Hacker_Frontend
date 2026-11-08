import React from "react";

const Heroes = () => {
  return (
    <div className="flex flex-col justify-start items-start gap-6 px-5 md:px-12 lg:px-24 pt-10 md:pt-18 pb-14">
      <div className="flex justify-start items-center gap-2.5">
        <span className="size-1.75 bg-brand rounded-full" />
        <p className="text-subtle text-xs font-medium uppercase">
          Contact • Let’s connect
        </p>
      </div>
      <h1 className="font-display text-5xl leading-14 md:text-[72px] md:leading-19.5 font-bold">
        Good things start with <span className="text-link">hello.</span>
      </h1>
      <p className="text-lg md:text-[22px] md:leading-8.5 text-subtle max-w-192.5">
        A question, a collaboration, or an idea for the community? Tell us
        what’s on your mind.
      </p>
    </div>
  );
};

export default Heroes;
