import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import Logos from "@/public/assets/heroes/Logos";
import Link from "next/link";
const Explore: string[] = ["Home", "About", "Overview", "Contact"];

const Footer = () => {
  return (
    <div className="flex flex-col justify-start items-start gap-10 pt-14 px-24 pb-7">
      <div className="flex flex-1 justify-between items-start w-full">
        <div className="flex flex-col justify-start items-start gap-6 w-120">
          <Logos className="h-auto w-95.5" />
          <p className="text-subtle leading-6.25">
            A student community for curious minds, shared learning, and
            technology with purpose.
          </p>
        </div>
        <div className="flex flex-col justify-center items-start gap-3.5 w-37.5">
          <strong className="text-black">Explore</strong>
          {Explore.map((item, key) => (
            <Link
              href={item === "Home" ? "/" : `/${item}`}
              className="text-[15px] text-subtle hover:text-ink"
              key={key}
            >
              {item}
            </Link>
          ))}
        </div>
        <div className="flex flex-col justify-start items-start gap-4 w-65">
          <strong className="text-black">Keep in the loop</strong>
          <p className="text-link text-lg">@gdgoc.ugm</p>
          <div className="flex items-center gap-4 text-subtle text-2xl">
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faYoutube} />
          </div>
          <p className="text-subtle text-sm">
            Learn together. Build together.
          </p>
        </div>
      </div>
      <div className="h-px bg-line w-full" />
      <div className="flex w-full justify-between items-center text-xs text-subtle">
        <p>© GDGoC Universitas Gadjah Mada • 2026/2027</p>
        <p>Made for the campus. Open to possibilities.</p>
      </div>
      <div className="flex justify-start w-40">
        <span className="h-1 bg-brand w-full" />
        <span className="h-1 bg-g-red w-full" />
        <span className="h-1 bg-g-yellow w-full" />
        <span className="h-1 bg-g-green w-full" />
      </div>
    </div>
  );
};

export default Footer;
