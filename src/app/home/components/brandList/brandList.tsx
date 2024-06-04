import { getBreand } from "@/service/getBreand";
import React from "react";
import { BreadBanner } from "../banners/breadBanner";

export default async function BrandList() {
  const data = await getBreand();

  return (
    <div>
      <BreadBanner>
        {data?.results?.map((item) => (
          <div key={item.id}>
            <div className=" rounded-full bg-white mx-auto overflow-hidden flex items-center justify-center h-[130px] w-[130px]">
              <img
                className=" mb-3 block   object-center object-contain "
                src={item.image}
                alt=""
              />
            </div>
            <p className=" text-xl text-center font-normal ">{item.title}</p>
          </div>
        ))}
      </BreadBanner>
    </div>
  );
}
