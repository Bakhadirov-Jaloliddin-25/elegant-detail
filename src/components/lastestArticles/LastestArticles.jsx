import React from "react";
import url1 from "@/assets/images/gift1.png";
import url2 from "@/assets/images/gift2.png";
import url3 from "@/assets/images/gift3.png";
import { IoArrowForwardOutline } from "react-icons/io5";

const items = [url1, url2, url3];

const LastestArticles = () => {
  return (
    <div className="container py-20">
      <div className="flex items-center justify-between">
        <h2 className="text-[40px] leading-[44px] text-[#141718] font-medium">
          Latest Articles
        </h2>
        <button className="flex items-center gap-1 text-[#141718] border-b border-[#141718]">
          <span className="font-medium">View More</span>
          <IoArrowForwardOutline />
        </button>
      </div>
      <div className="grid grid-cols-3 gap-[25px] mt-10">
        {items?.map((item, inx) => (
          <div key={inx}>
            <div>
              <img src={item} alt="" />
            </div>
            <div className="mt-6">
              <p className="text-[20px] leading-7 font-medium text-[#23262F]">
                2023 Holiday Gift Guide
              </p>
              <button className="flex items-center gap-1 text-[#141718] border-b border-[#141718] mt-2">
                <span className="font-medium">Read More</span>
                <IoArrowForwardOutline />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LastestArticles;
