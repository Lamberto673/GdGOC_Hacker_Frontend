"use client";
import { X } from "lucide-react";
import React from "react";
import { Track } from "@/lib/api";
import { useFetch } from "@/lib/useFetch";
import Loading from "../Loading";
import StatusMessage from "../StatusMessage";

type TrackDetailProps = {
  id: string;
  onClose: () => void;
};

const TrackDetail = ({ id, onClose }: TrackDetailProps) => {
  const { data: track, loading, error, retry } = useFetch<Track>(`/tracks/${id}`);

  if (loading) {
    return <Loading count={1} className="w-full" height="h-56" />;
  }

  if (error || !track) {
    return (
      <StatusMessage
        title="We couldn't load this track"
        message={error ?? "Please try again."}
        onRetry={retry}
      />
    );
  }

  return (
    <article
      className="relative flex flex-col justify-start items-start gap-5 w-full p-8 rounded-3xl border-2 bg-white"
      style={{ borderColor: track.color }}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-subtle hover:text-ink cursor-pointer"
      >
        <X className="size-6" />
      </button>
      <div className="flex justify-start items-center gap-4">
        <span className="text-4xl">{track.icon}</span>
        <div className="flex flex-col justify-start items-start gap-1">
          <h3 className="text-[28px] leading-7.75 font-bold">{track.name}</h3>
          <p className="text-[13px] font-medium uppercase text-link">
            {track.tagline}
          </p>
        </div>
        <span
          className={`rounded-full px-3.5 py-2 text-[13px] font-bold ${
            track.open ? "bg-tint-green text-g-green" : "bg-surface text-subtle"
          }`}
        >
          {track.open ? "Open for new members" : "Currently closed"}
        </span>
      </div>
      <p className="text-lg text-subtle">{track.description}</p>
      <div className="flex flex-col justify-start items-start gap-2">
        <strong className="text-ink">What you’ll do</strong>
        <p className="text-subtle leading-6.25">{track.what_you_do}</p>
      </div>
      <div className="flex flex-wrap gap-3">
        {track.skills.map((skill) => (
          <span
            key={skill}
            className="bg-surface rounded-full px-3.5 py-2 text-[13px] font-bold text-subtle"
          >
            {skill}
          </span>
        ))}
      </div>
    </article>
  );
};

export default TrackDetail;
