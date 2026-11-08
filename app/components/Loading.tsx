import React from "react";

type LoadingProps = {
  count: number;
  className: string;
  height: string;
};

const Loading = ({ count, className, height }: LoadingProps) => {
  return (
    <div className={className}>
      {Array.from({ length: count }).map((_, key) => (
        <div
          key={key}
          className={`${height} w-full rounded-3xl bg-line/40 animate-pulse`}
        />
      ))}
    </div>
  );
};

export default Loading;
