import React from "react";

type StatusMessageProps = {
  title: string;
  message: string;
  onRetry?: () => void;
};

const StatusMessage = ({ title, message, onRetry }: StatusMessageProps) => {
  return (
    <div className="flex flex-col justify-center items-center gap-3 w-full rounded-3xl border border-dashed border-line px-7 py-12 text-center">
      <p className="text-xl font-medium">{title}</p>
      <p className="text-subtle">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="flex items-center h-11 px-6 mt-2 rounded-lg bg-brand text-white font-medium cursor-pointer"
        >
          Try again
        </button>
      )}
    </div>
  );
};

export default StatusMessage;
