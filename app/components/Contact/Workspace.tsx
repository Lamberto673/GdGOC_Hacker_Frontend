"use client";
import React, { useState } from "react";
import { InquiryCategory } from "@/lib/api";
import { useFetch } from "@/lib/useFetch";
import Categories from "./Categories";
import Updates from "./Updates";
import MessageForm from "./MessageForm";

const Workspace = () => {
  const { data: categories, loading, error, retry } =
    useFetch<InquiryCategory[]>("/inquiry-categories");
  const [selected, setSelected] = useState("joining-learning");

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[456px_1fr] lg:gap-16 px-5 md:px-12 lg:px-24 pb-20">
      <div className="flex flex-col justify-start items-start gap-8">
        <Categories
          categories={categories}
          loading={loading}
          error={error}
          retry={retry}
          selected={selected}
          onSelect={setSelected}
        />
        <Updates />
      </div>
      <MessageForm
        categories={categories}
        selected={selected}
        onSelect={setSelected}
      />
    </div>
  );
};

export default Workspace;
