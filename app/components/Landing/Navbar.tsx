"use client";
import Link from "next/link";
import React from "react";
import Logos from "../../../public/assets/heroes/Logos";
import { MoveRight } from "lucide-react";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 w-full bg-white border-b border-line h-26">
      <nav className="flex justify-between items-center h-full px-16">
        <Link href="/" className="flex items-center">
          <Logos className="h-auto w-86.5" />
        </Link>
        <ul className="flex gap-2 text-subtle">
          <li>
            <Link
              href="/"
              className="block rounded-full px-5 py-3.5 bg-tint-blue text-link font-bold"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/About"
              className="block rounded-full px-5 py-3.5 hover:bg-surface transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/Overview"
              className="block rounded-full px-5 py-3.5 hover:bg-surface transition-colors"
            >
              Overview
            </Link>
          </li>
          <li>
            <Link
              href="/Contact"
              className="block rounded-full px-5 py-3.5 hover:bg-surface transition-colors"
            >
              Contact
            </Link>
          </li>
        </ul>
        <Link
          href="/Overview"
          className="flex items-center gap-4 h-13 px-6 rounded-lg bg-brand text-white font-medium"
        >
          Find your track
          <MoveRight className="size-5" />
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
