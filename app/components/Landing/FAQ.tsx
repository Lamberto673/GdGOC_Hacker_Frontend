"use client";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Faq } from "@/lib/api";
import { useFetch } from "@/lib/useFetch";
import Loading from "../Loading";
import StatusMessage from "../StatusMessage";

type FQA = {
  question: string;
  answer: string;
};
const FrequentAsked: FQA[] = [
  {
    question: "Do I need to know how to code?",
    answer:
      "No. Start with an interest in technology and a willingness to learn. Research and design are part of the journey, too.",
  },
  {
    question: "Is this only for computer science students?",
    answer:
      "Different disciplines bring different perspectives. Explore the overview to find a starting point that fits your interests.",
  },
  {
    question: "How can I find learning opportunities?",
    answer:
      "Keep an eye on @gdgoc.ugm for community updates. You can also use the contact page to ask about getting involved.",
  },
];

const Categories = [
  { value: "", label: "All" },
  { value: "joining-learning", label: "Joining & learning" },
  { value: "collaboration", label: "Collaboration" },
  { value: "speaking-sharing", label: "Speaking & sharing" },
];

const FAQ = () => {
  const [category, setCategory] = useState("");
  const path = category ? `/faqs?category=${category}` : "/faqs";
  const { data: faqs, loading, error, retry } = useFetch<Faq[]>(path);
  const list: FQA[] = error ? FrequentAsked : (faqs ?? []);

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[400px_1fr] lg:gap-24 px-5 md:px-12 lg:px-24 py-22">
      <div className="gap-5 flex flex-col justify-start items-start">
        <div className="flex justify-start items-center gap-2.5">
          <span className="rounded-full size-1.75 bg-brand" />
          <p className="text-subtle text-xs font-medium uppercase">
            A few good questions
          </p>
        </div>
        <h2 className="flex flex-col text-4xl leading-11 md:text-5xl md:leading-13.5 font-bold">
          <span>Wondering</span>
          <span>where</span>
          <span>to begin?</span>
        </h2>
        <Link
          href="/Contact"
          className="flex justify-center items-center gap-3 text-link font-medium hover:underline"
        >
          Ask us a question <MoveRight className="size-5" />
        </Link>
      </div>
      <div className="flex flex-col justify-start items-start gap-8">
        <div className="flex flex-wrap gap-2">
          {Categories.map((item) => (
            <button
              key={item.value}
              onClick={() => setCategory(item.value)}
              className={`rounded-full px-4 py-2 text-sm font-medium cursor-pointer transition-colors ${
                category === item.value
                  ? "bg-tint-blue text-link"
                  : "border border-line text-subtle hover:bg-surface"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
        {error && (
          <StatusMessage
            title="We couldn't load the latest questions"
            message="Here are a few common ones for now."
            onRetry={retry}
          />
        )}
        {loading ? (
          <Loading count={3} className="flex flex-col gap-6 w-full" height="h-16" />
        ) : list.length === 0 ? (
          <StatusMessage
            title="No questions here yet"
            message="Try another category, or ask us directly."
          />
        ) : (
      <Accordion
        key={list.map((item) => item.question).join()}
        multiple
        defaultValue={list.map((item) => item.question)}
        className="gap-6 w-full"
      >
        {list.map((item) => (
          <AccordionItem
            key={item.question}
            value={item.question}
            className="border-b border-line"
          >
            <AccordionTrigger className="py-0 text-xl font-medium text-ink hover:no-underline **:data-[slot=accordion-trigger-icon]:size-6 **:data-[slot=accordion-trigger-icon]:text-link">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="pt-3.5 pb-6 text-base leading-6.25 text-subtle">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
        )}
      </div>
    </div>
  );
};

export default FAQ;
