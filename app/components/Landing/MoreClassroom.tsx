import { BookOpen, Code, Users } from "lucide-react";
import Link from "next/link";
import React from "react";

type TrackList = {
  Logo: React.ReactNode;
  title: string;
  description: string;
  footer: string;
};

const TrackTemplate = ({ Logo, title, description, footer }: TrackList) => (
  <article className="flex flex-col justify-start items-start gap-5 bg-white p-8 rounded-3xl">
    <span className="text-link [&>svg]:size-6">{Logo}</span>
    <div className="flex flex-col justify-start items-start gap-5 w-full">
      <h3 className="text-[28px] leading-7.75 font-bold">{title}</h3>
      <p className="text-subtle leading-6.25">{description}</p>
      <div className="w-full h-px bg-line" />
    </div>
    <footer className="flex justify-start items-start w-full">
      <Link
        className="text-link font-medium text-[13px] hover:underline transition-all duration-300"
        href={"/"}
      >
        {footer}
      </Link>
    </footer>
  </article>
);

const MoreClassroom = () => {
  return (
    <div className="flex flex-col justify-start items-start px-24 py-20 gap-10">
      <div className="flex flex-col gap-4.5 max-w-200">
        <div className="flex items-center gap-2.5">
          <span className="size-1.75 bg-brand rounded-full" />
          <p className="text-subtle text-xs font-medium uppercase">
            More than a classroom
          </p>
        </div>
        <h2 className="text-5xl leading-13.5 font-bold">
          Less watching. More making.
        </h2>
        <p className="text-subtle text-lg">
          Learn in a way that turns a new concept into something you can
          actually use.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-6 w-full">
        <TrackTemplate
          Logo={<BookOpen />}
          title={`Study together`}
          description="Work through foundations in peer learning sessions. Bring your questions; leave with a next step."
          footer="Study groups & guided practice"
        />
        <TrackTemplate
          Logo={<Code />}
          title={`Try it hands-on`}
          description="Explore a tool or technique in a workshop, then put it to work in a small experiment."
          footer="Workshops & technical sessions"
        />
        <TrackTemplate
          Logo={<Users />}
          title={`Share the process`}
          description="Exchange feedback, explain your decisions, and learn from different ways of thinking."
          footer="Project circles & sharing sessions"
        />
      </div>
    </div>
  );
};

export default MoreClassroom;
