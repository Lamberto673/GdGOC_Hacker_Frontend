"use client";
import Link from "next/link";
import React, { useState } from "react";
import Logos from "../../../public/assets/heroes/Logos";
import { Menu, MoveRight, X } from "lucide-react";
import { usePathname } from "next/navigation";

const Pages = [
  { label: "Home", href: "/" },
  { label: "About", href: "/About" },
  { label: "Overview", href: "/Overview" },
  { label: "Contact", href: "/Contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const active = "block rounded-full px-5 py-3.5 bg-tint-blue text-link font-bold";
  const idle = "block rounded-full px-5 py-3.5 hover:bg-surface transition-colors";

  return (
    <div className="sticky top-0 z-50 w-full bg-white border-b border-line h-18 lg:h-26">
      <nav className="flex justify-between items-center h-full px-5 md:px-12 lg:px-16">
        <Link href="/" className="flex items-center">
          <Logos className="h-auto w-60 md:w-86.5" />
        </Link>
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-ink cursor-pointer"
          aria-label="Toggle menu"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
        <ul className="hidden lg:flex gap-2 text-subtle">
          <li>
            <Link
              href="/"
              className={pathname === "/" ? active : idle}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/About"
              className={pathname === "/About" ? active : idle}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/Overview"
              className={pathname === "/Overview" ? active : idle}
            >
              Overview
            </Link>
          </li>
          <li>
            <Link
              href="/Contact"
              className={pathname === "/Contact" ? active : idle}
            >
              Contact
            </Link>
          </li>
        </ul>
        <Link
          href="/Overview"
          className="hidden lg:flex items-center gap-4 h-13 px-6 rounded-lg bg-brand text-white font-medium"
        >
          Find your track
          <MoveRight className="size-5" />
        </Link>
      </nav>
      {open && (
        <div className="lg:hidden flex flex-col gap-2 px-5 py-4 bg-white border-b border-line text-subtle">
          {Pages.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={pathname === item.href ? active : idle}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/Overview"
            onClick={() => setOpen(false)}
            className="flex justify-center items-center gap-4 h-13 px-6 mt-2 rounded-lg bg-brand text-white font-medium"
          >
            Find your track
            <MoveRight className="size-5" />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
