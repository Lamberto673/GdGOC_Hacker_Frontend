import ImagesAbout from "@/public/assets/HeroesForAbout/ImagesAbout";
import React from "react";

const Heroes = () => {
  return (
    <div className="flex justify-start items-center ml-[96px] mr-[96px] mt-[80px] ">
      <div className="flex flex-col justify-start items-start">
        <div className="flex justify-start items-center mb-[26px] gap-[10px]">
          <span className="w-3 h-3 rounded-full bg-blue-500" />
          <p className="text-[#5F6368] text-[12px]">ABOUT GDGOC UGM</p>
        </div>
        <div className="flex flex-col justify-start items-start mb-[26px]">
          <h1 className="text-[72px] font-black">Built by students.</h1>
          <h1 className="text-[72px] text-[#1967D2] font-black">
            For what’s next.
          </h1>
        </div>
        <p className="text-[22px] text-[#5F6368] mb-[26px]">
          We’re a community of learners and makers at Universitas Gadjah Mada,
          connected by curiosity and the belief that technology can do good.
        </p>
        <p className="text-[#5F6368] text-[13px]">
          UNIVERSITAS GADJAH MADA • 2026/2027
        </p>
      </div>
      <div className="ml-[64px] flex justify-start items-start">
        <ImagesAbout className="w-116 h-auto shrink-0" />
      </div>
    </div>
  );
};

export default Heroes;
