import { getBanner } from "@/service/getBanner";
import React from "react";
import Aksiyacart2 from "../carts/aksiyacart2";

export default async function DiscountBanner2() {
  const data = await getBanner();
  return (
    <div className="  2xl:justify-between  lg:grid  gap-4 lg:grid-cols-2 ">
      {data.results.slice(0, 2).map((item) => (
        <Aksiyacart2
          id={item.id}
          key={item.id}
          image={item.image}
          title={item.title}
        />
      ))}
    </div>
  );
}
