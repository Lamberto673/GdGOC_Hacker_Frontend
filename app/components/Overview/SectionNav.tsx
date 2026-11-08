"use client";
import React, { useState } from "react";

const Sections = [
  { label: "Learning tracks", href: "#tracks" },
  { label: "Learning formats", href: "#formats" },
  { label: "Your learning journey", href: "#journey" },
  { label: "Find a starting point", href: "#start" },
];

const SectionNav = () => {
  const [active, setActive] = useState("#tracks");

  return (
    <div className="flex justify-start items-center gap-8 md:gap-12 px-5 md:px-12 lg:px-24 py-6 border-y border-line overflow-x-auto whitespace-nowrap">
      {Sections.map((item, key) => (
        <a
          key={key}
          href={item.href}
          onClick={() => setActive(item.href)}
          className={`flex items-center gap-2.5 text-[15px] hover:text-link ${
            active === item.href ? "text-link font-bold" : "text-subtle"
          }`}
        >
          {item.label}
          <span className="font-display text-base text-link">↓</span>
        </a>
      ))}
    </div>
  );
};

export default SectionNav;
