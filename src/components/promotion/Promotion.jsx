import React from "react";
import video from "@/assets/images/video.png";

const Promotion = () => {
  return (
    <div className="container py-[40px]">
      <div className="text-center">
        <p className="leading-4 font-bold text-[#377DFF]">PROMOTION</p>
        <h2 className="text-[40px] leading-[44px] text-[#141718] font-medium mt-4">
          Winter Collections
        </h2>
        <p className="mt-4 mb-8 text-[20px] leading-8 text-[#141718]">
          Introducing the new winter jackets.
        </p>
        <img src={video} alt="" />
      </div>
    </div>
  );
};

export default Promotion;
