"use client";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Role } from "@/lib/api";
import { useFetch } from "@/lib/useFetch";
import Loading from "../Loading";
import StatusMessage from "../StatusMessage";

const Roles = () => {
  const { data: roles, loading, error, retry } = useFetch<Role[]>("/roles");

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[400px_1fr] lg:gap-24 px-5 md:px-12 lg:px-24 pb-22">
      <div className="flex flex-col justify-start items-start gap-5.5">
        <div className="flex justify-start items-center gap-2.5">
          <span className="size-1.75 bg-brand rounded-full" />
          <p className="text-subtle text-xs font-medium uppercase">
            People, not labels
          </p>
        </div>
        <h2 className="text-4xl leading-11 md:text-5xl md:leading-13.5 font-bold">
          There’s more than one way to contribute.
        </h2>
        <p className="text-lg text-subtle">
          You can be learning one day and helping someone else the next. A
          community grows through both.
        </p>
      </div>
      <div className="flex flex-col justify-start items-start gap-7">
        {loading ? (
          <Loading count={3} className="flex flex-col gap-7 w-full" height="h-20" />
        ) : error ? (
          <StatusMessage
            title="We couldn't load the roles"
            message={error}
            onRetry={retry}
          />
        ) : !roles || roles.length === 0 ? (
          <StatusMessage
            title="Nothing here yet"
            message="Ways to get involved will show up here soon."
          />
        ) : (
          roles.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-start items-start gap-3.5 w-full"
            >
              <h3 className="text-2xl leading-7 md:text-[28px] md:leading-7.75 font-bold">
                {item.title}
              </h3>
              <p className="text-[17px] leading-6.5 text-subtle">
                {item.description}
              </p>
              <div className="h-px w-full bg-line" />
            </div>
          ))
        )}
        <Link
          href="/Contact"
          className="flex justify-center items-center gap-3 text-link font-medium hover:underline"
        >
          Let’s talk about getting involved <MoveRight className="size-5" />
        </Link>
      </div>
    </div>
  );
};

export default Roles;
