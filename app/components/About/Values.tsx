"use client";
import { BookOpen, Code, Heart, Users } from "lucide-react";
import React from "react";
import { Value } from "@/lib/api";
import { useFetch } from "@/lib/useFetch";
import Loading from "../Loading";
import StatusMessage from "../StatusMessage";

const Icons: Record<string, React.ReactNode> = {
  "stay-curious": <BookOpen />,
  "make-room": <Users />,
  "learn-by-building": <Code />,
  "give-something-back": <Heart />,
};

const Values = () => {
  const { data: values, loading, error, retry } = useFetch<Value[]>("/values");

  return (
    <div className="flex flex-col justify-start items-start gap-10 px-24 py-22">
      <div className="flex flex-col gap-4.5 max-w-200">
        <div className="flex items-center gap-2.5">
          <span className="size-1.75 bg-brand rounded-full" />
          <p className="text-subtle text-xs font-medium uppercase">
            What guides us
          </p>
        </div>
        <h2 className="text-5xl leading-13.5 font-bold">
          Good technology starts with good company.
        </h2>
      </div>
      {loading ? (
        <Loading
          count={4}
          className="grid grid-cols-4 gap-6 w-full"
          height="h-62"
        />
      ) : error ? (
        <StatusMessage
          title="We couldn't load our values"
          message={error}
          onRetry={retry}
        />
      ) : !values || values.length === 0 ? (
        <StatusMessage
          title="Nothing here yet"
          message="Our community values will show up here soon."
        />
      ) : (
        <div className="grid grid-cols-4 gap-6 w-full">
          {values.map((item) => (
            <article
              key={item.id}
              className="flex flex-col justify-start items-start gap-5.5 p-6.5 rounded-3xl border border-line"
            >
              <span
                className="h-1 w-9 rounded-sm"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-link [&>svg]:size-6">
                {Icons[item.id] ?? <Heart />}
              </span>
              <h3 className="text-2xl leading-6.75 font-bold">{item.title}</h3>
              <p className="text-subtle leading-6.25">{item.description}</p>
            </article>
          ))}
        </div>
      )}
    </div>
  );
};

export default Values;
