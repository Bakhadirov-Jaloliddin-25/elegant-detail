import React from "react";
import ins1 from "@/assets/images/ins1.png";
import ins2 from "@/assets/images/ins2.png";
import ins3 from "@/assets/images/ins3.png";
import ins4 from "@/assets/images/ins4.png";
import vector from "@/assets/images/Vector.png";
import call from "@/assets/images/call.png";
import fastdelivery from "@/assets/images/fastdelivery.png";
import money from "@/assets/images/money.png";

const data = [
  {
    id: 1,
    title: "Free Shipping",
    desc: "Order above $200",
    url: fastdelivery,
  },
  {
    id: 2,
    title: "Money-back",
    desc: "30 days guarantee",
    url: money,
  },
  {
    id: 3,
    title: "Secure Payments",
    desc: "Secured by Stripe",
    url: vector,
  },
  {
    id: 4,
    title: "24/7 Support",
    desc: "Phone and Email support",
    url: call,
  },
];

const Instagramm = () => {
  return (
    <div className="container">
      <div className="py-10 text-center">
        <p className="uppercase font-bold leading-4 text-[#6C7275]">newsfeed</p>
        <h2 className="text-[40px] leading-[44px] text-[#141718] font-medium mt-4">
          Instagram
        </h2>
        <p className="mt-4 text-[20px] leading-8 text-[#141718]">
          Follow us on social media for more discount & promotions
        </p>
        <p className="mt-4 text-[20px] leading-7 font-medium text-[#6C7275]">
          @3legant_official
        </p>
        <div className="mt-10 grid grid-cols-4 gap-6">
          <img src={ins1} alt="" />
          <img src={ins2} alt="" />
          <img src={ins3} alt="" />
          <img src={ins4} alt="" />
        </div>
      </div>
      <div className="py-4 grid grid-cols-4 gap-6">
        {data?.map((item) => (
          <div key={item.id} className="py-12 px-8">
            <div>
              <img src={item.url} alt="" />
            </div>
            <p className="text-[20px] leading-7 text-[#141718] font-medium mt-4">
              {item.title}
            </p>
            <p className="text-sm left-6 text-[#6C7275] mt-2">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instagramm;
