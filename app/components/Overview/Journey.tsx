"use client";
import React from "react";
import { Journey as JourneyStep } from "@/lib/api";
import { useFetch } from "@/lib/useFetch";
import Loading from "../Loading";
import StatusMessage from "../StatusMessage";

const Journey = () => {
  const { data: steps, loading, error, retry } = useFetch<JourneyStep[]>("/journey");

  return (
    <div className="flex flex-col justify-start items-start gap-10 px-5 md:px-12 lg:px-24 py-20">
      <div className="flex flex-col gap-4.5">
        <div className="flex justify-start items-center gap-2.5">
          <span className="size-1.75 bg-brand rounded-full" />
          <p className="text-xs font-medium uppercase text-subtle">
            Progress, not perfection
          </p>
        </div>
        <h2 className="text-4xl leading-11 md:text-5xl md:leading-13.5 font-bold">
          A journey you can keep building on.
        </h2>
      </div>
      {loading ? (
        <Loading
          count={4}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full"
          height="h-47"
        />
      ) : error ? (
        <StatusMessage
          title="We couldn't load the journey"
          message={error}
          onRetry={retry}
        />
      ) : !steps || steps.length === 0 ? (
        <StatusMessage
          title="Nothing here yet"
          message="The learning journey will show up here soon."
        />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {steps.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-start items-start gap-5"
            >
              <strong className="text-link text-[38px] leading-12">
                {String(item.step).padStart(2, "0")}
              </strong>
              <div className="h-px w-full bg-line" />
              <h3 className="text-[26px] leading-7.25 font-bold">
                {item.title}
              </h3>
              <p className="text-subtle leading-6.25">{item.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Journey;
