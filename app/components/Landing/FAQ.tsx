import { MoveRight } from "lucide-react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
const FAQ = () => {
  return (
    <div className="grid grid-cols-[400px_1fr] gap-24 px-24 py-22">
      <div className="gap-5 flex flex-col justify-start items-start">
        <div className="flex justify-start items-center gap-2.5">
          <span className="rounded-full size-1.75 bg-brand" />
          <p className="text-subtle text-xs font-medium uppercase">
            A few good questions
          </p>
        </div>
        <h2 className="flex flex-col text-5xl leading-13.5 font-bold">
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
      <Accordion
        multiple
        defaultValue={FrequentAsked.map((item) => item.question)}
        className="gap-6"
      >
        {FrequentAsked.map((item) => (
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
    </div>
  );
};

export default FAQ;
