"use client";
import { BookOpen, Code, Lightbulb, Users } from "lucide-react";
import React from "react";
import { Format } from "@/lib/api";
import { useFetch } from "@/lib/useFetch";
import Loading from "../Loading";
import StatusMessage from "../StatusMessage";

type FormatStyle = {
  Logo: React.ReactNode;
  bg: string;
  bestFor: string;
};

const Styles: Record<string, FormatStyle> = {
  "study-groups": {
    Logo: <BookOpen />,
    bg: "bg-tint-blue",
    bestFor: "Learning the fundamentals",
  },
  "hands-on-workshops": {
    Logo: <Code />,
    bg: "bg-tint-green",
    bestFor: "Trying something new",
  },
  "project-circles": {
    Logo: <Users />,
    bg: "bg-tint-yellow",
    bestFor: "Putting skills into practice",
  },
  "knowledge-sharing": {
    Logo: <Lightbulb />,
    bg: "bg-tint-red",
    bestFor: "Exchanging perspectives",
  },
};

const Formats = () => {
  const { data: formats, loading, error, retry } = useFetch<Format[]>("/formats");

  return (
    <div className="flex flex-col justify-start items-start gap-9 px-24 py-20">
      <div className="flex flex-col gap-4.5 max-w-200">
        <div className="flex items-center gap-2.5">
          <span className="size-1.75 bg-brand rounded-full" />
          <p className="text-subtle text-xs font-medium uppercase">
            Ways to learn
          </p>
        </div>
        <h2 className="text-5xl leading-13.5 font-bold">
          The format changes. The curiosity stays.
        </h2>
        <p className="text-lg text-subtle">
          Explore the kinds of experiences that help you move from
          understanding to doing.
        </p>
      </div>
      {loading ? (
        <Loading
          count={4}
          className="grid grid-cols-2 gap-6 w-full"
          height="h-45"
        />
      ) : error ? (
        <StatusMessage
          title="We couldn't load the formats"
          message={error}
          onRetry={retry}
        />
      ) : !formats || formats.length === 0 ? (
        <StatusMessage
          title="No formats yet"
          message="Learning formats will show up here soon."
        />
      ) : (
        <div className="grid grid-cols-2 gap-6 w-full">
          {formats.map((item) => (
            <article
              key={item.id}
              className="flex justify-start items-start gap-6 p-7 bg-white rounded-3xl"
            >
              <span
                className={`flex shrink-0 justify-center items-center size-13 rounded-[14px] text-link [&>svg]:size-6 ${
                  Styles[item.id]?.bg ?? "bg-tint-blue"
                }`}
              >
                {Styles[item.id]?.Logo ?? <BookOpen />}
              </span>
              <div className="flex flex-col justify-start items-start gap-3.5">
                <h3 className="text-[27px] leading-7.5 font-bold">
                  {item.name}
                </h3>
                <p className="text-subtle leading-6.25">{item.description}</p>
                {Styles[item.id] && (
                  <p className="text-[13px] font-medium text-link">
                    Best for • {Styles[item.id].bestFor}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
};

export default Formats;
