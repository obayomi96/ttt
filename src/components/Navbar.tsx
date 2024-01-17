import React from "react";
import { Logo } from "../svgs/Logo";

const Navbar = () => {
  return (
    <div className="w-full h-[42px] top-[56px] relative justify-center items-start gap-[610.43px] inline-flex flex-wrap lg:flex-nowrap">
      <div className="w-[162.22px] h-[42px] justify-center items-center gap-x-[11.27px] inline-flex flex-wrap lg:flex-nowrap">
        <div className="mb-2 w-full">
          <Logo color="rgba(101, 228, 163, 1)" />
        </div>
        <div className=" h-[42px] text-white text-[43.25px] font-bold leading-[33.64px]">
          Boldo
        </div>
      </div>
      <div className="justify-center items-center gap-10 inline-flex flex-wrap lg:flex-nowrap">
        <div className="text-white text-base font-semibold font-['Open Sans'] leading-7">
          Product
        </div>
        <div className="text-white text-base font-semibold font-['Open Sans'] leading-7">
          Services
        </div>
        <div className="text-white text-base font-semibold font-['Open Sans'] leading-7">
          About
        </div>
        <div className="px-10 py-2 bg-white rounded-3xl border-2 border-white justify-start items-start gap-2 flex">
          <div className="text-sky-950 text-base font-bold font-['Open Sans'] leading-normal">
            Log In
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
