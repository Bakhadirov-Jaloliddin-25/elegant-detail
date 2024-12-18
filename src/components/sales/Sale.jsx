import React from "react";
import { IoArrowForwardOutline } from "react-icons/io5";

const Sale = () => {
  return (
    <div className="h-[532px] grid grid-cols-2">
      <div className="bg-sale bg-no-repeat bg-cover"></div>
      <div className="flex items-center  bg-[#F3F5F7]">
        <div className="pl-[72px] max-w-[452px]">
          <p className="leading-4 font-bold text-[#377DFF]">
            SALE UP TO 35% OFF
          </p>
          <h1 className="text-[40px] leading-[44px] text-[#141718] font-medium mt-4 max-w-[350px]">
            HUNDREDS of New lower prices!
          </h1>
          <p className="mt-4 mb-8 text-[20px] leading-8 text-[#141718]">
            Hurry up!!! Winter is coming!
          </p>
          <button className="flex items-center gap-1 text-[#141718] mt-6 border-b border-[#141718]">
            <span className="font-medium">Shop Now</span>
            <IoArrowForwardOutline />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sale;
