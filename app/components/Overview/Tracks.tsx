"use client";
import Design from "@/public/assets/tracks/Design";
import Development from "@/public/assets/tracks/Development";
import Research from "@/public/assets/tracks/Research";
import React, { useState } from "react";
import { Track } from "@/lib/api";
import { useFetch } from "@/lib/useFetch";
import { TrackCard } from "../Landing/Interest";
import Loading from "../Loading";
import StatusMessage from "../StatusMessage";
import TrackDetail from "./TrackDetail";

const Arts: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  "research-discovery": Research,
  "design-creativity": Design,
  development: Development,
};

const Tracks = () => {
  const { data: tracks, loading, error, retry } = useFetch<Track[]>("/tracks");
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="flex flex-col justify-start items-start gap-9 px-24 py-20">
      <div className="flex flex-col gap-4.5 max-w-200">
        <div className="flex items-center gap-2.5">
          <span className="size-1.75 bg-brand rounded-full" />
          <p className="text-subtle text-xs font-medium uppercase">
            Explore your interests
          </p>
        </div>
        <h2 className="text-5xl leading-13.5 font-bold">
          Three ways in. Plenty of ways forward.
        </h2>
        <p className="text-lg text-subtle">
          These pathways are starting points, not boxes. Follow one deeply or
          bring different skills together.
        </p>
      </div>
      {loading ? (
        <Loading
          count={3}
          className="grid grid-cols-3 gap-6 w-full"
          height="h-135"
        />
      ) : error ? (
        <StatusMessage
          title="We couldn't load the tracks"
          message={error}
          onRetry={retry}
        />
      ) : !tracks || tracks.length === 0 ? (
        <StatusMessage
          title="No tracks yet"
          message="New learning tracks will show up here once they open."
        />
      ) : (
        <div className="grid grid-cols-3 gap-6 w-full">
          {tracks.map((item) => (
            <TrackCard
              key={item.id}
              Art={Arts[item.id] ?? Research}
              eyebrow={item.tagline}
              title={item.name}
              description={item.description}
              skills={item.skills.join(" · ")}
              onExplore={() => setSelected(item.id)}
            />
          ))}
        </div>
      )}
      {selected && (
        <TrackDetail
          key={selected}
          id={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  );
};

export default Tracks;
