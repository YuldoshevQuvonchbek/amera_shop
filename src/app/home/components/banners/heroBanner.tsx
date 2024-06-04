import React from "react";
import { SleyderHero } from "./sleyderHero";
import { getBanner } from "@/service/getBanner";

export default async function HeroBanner() {
  const data = await getBanner();
  return (
    <SleyderHero>
      {data.results.map((item) => (
        <div className="relative overflow-hidden  rounded-xl " key={item.id}>
          <img
            src={item.image}
            alt={item.title}
            className="w-full object-cover h-[500px]"
          />
          <h1 className="absolute ml:text-xl font-medium lg:text-6xl  max-w-[544px]  top-[112px] left-[70px]">
            {item.title}
          </h1>
        </div>
      ))}
    </SleyderHero>
  );
}
