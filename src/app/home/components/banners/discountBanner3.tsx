import { getBanner } from "@/service/getBanner";
import React from "react";
import Aksiyacart from "../carts/aksiyacart";

export default async function DiscountBanner3() {
  const data = await getBanner();
  return (
    <div className="flex items-center gap-[20px] pb-6 justify-center 2xl:justify-between  flex-wrap ">
      {data.results.slice(0, 3).map((item) => (
        <Aksiyacart
          key={item.id}
          id={item.id}
          image={item.image}
          title={item.title}
        />
      ))}
    </div>
  );
}
