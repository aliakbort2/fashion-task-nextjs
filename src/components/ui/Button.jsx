import React from "react";
import { LiaLongArrowAltUpSolid } from "react-icons/lia";

const Button = ({ text }) => {
  return (
    <div className={`flex ${text} gap-0.5`}>
      <button className="bg-[#8F71E1] text-[#F4F8FF] py-[11px] px-[30.5px] rounded-full text-[19px]">
        Shop Now
      </button>
      <button className="bg-[#8F71E1] text-[#F4F8FF] h-12 w-12 rounded-full flex justify-center items-center">
        <LiaLongArrowAltUpSolid className="rotate-45 text-2xl" />
      </button>
    </div>
  );
};

export default Button;
