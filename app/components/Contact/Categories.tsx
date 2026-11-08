import React from "react";
import { InquiryCategory } from "@/lib/api";
import Loading from "../Loading";
import StatusMessage from "../StatusMessage";

type CategoriesProps = {
  categories: InquiryCategory[] | null;
  loading: boolean;
  error: string | null;
  retry: () => void;
  selected: string;
  onSelect: (id: string) => void;
};

const Categories = ({
  categories,
  loading,
  error,
  retry,
  selected,
  onSelect,
}: CategoriesProps) => {
  return (
    <div className="flex flex-col justify-start items-start gap-4.5 w-full">
      <h2 className="text-[28px] leading-7.75 font-bold">
        What brings you here?
      </h2>
      <p className="text-subtle leading-6.25">
        Pick the closest topic in the form. We’ll take it from there.
      </p>
      {loading ? (
        <Loading count={4} className="flex flex-col gap-4.5 w-full" height="h-22" />
      ) : error ? (
        <StatusMessage
          title="We couldn't load the topics"
          message={error}
          onRetry={retry}
        />
      ) : !categories || categories.length === 0 ? (
        <StatusMessage
          title="No topics yet"
          message="You can still send us a message."
        />
      ) : (
        categories.map((item) => (
          <button
            key={item.id}
            onClick={() => onSelect(item.id)}
            className={`flex justify-start items-center gap-4.5 w-full p-5 rounded-2xl border text-left cursor-pointer transition-colors ${
              selected === item.id
                ? "bg-tint-blue border-white"
                : "border-line hover:bg-surface"
            }`}
          >
            <span className="w-6 shrink-0 font-display text-[25px] leading-7.5 font-medium text-link text-center">
              {item.icon}
            </span>
            <div className="flex flex-col justify-start items-start gap-1.5">
              <p className="text-[17px] leading-5.25 font-medium">
                {item.label}
              </p>
              <p className="text-sm leading-5.5 text-subtle">
                {item.description}
              </p>
            </div>
          </button>
        ))
      )}
    </div>
  );
};

export default Categories;
