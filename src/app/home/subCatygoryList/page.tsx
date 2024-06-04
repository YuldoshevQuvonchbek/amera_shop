import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getproduct } from "@/service/getproduct";
import { Button } from "@/components/ui/button";
import { CiStar } from "react-icons/ci";
import { GoEye } from "react-icons/go";
import { Item } from "@radix-ui/react-accordion";
import Homecart from "../components/carts/homecart";

export default async function SubCatygory() {
  const data = await getproduct();

  return (
    <div>
      <div className="pb-7 items-center gap-1 flex">
        <h1 className=" text-xl font-medium text-nowrap  ">
          Recent
          <strong className=" text-nowrap text-xl font-normal">Products</strong>
        </h1>
        <span className=" h-[1px] max-w-[400px] w-full bg-bordercolor  "></span>
      </div>
      <Carousel className="relative">
        <CarouselContent>
          {data.results.map((item) => (
            <CarouselItem className=" xl2:basis-1/3 md:basis-1/2   ">
              <Homecart key={item.id} {...item} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="   top-[-43px] right-[50px] absolute">
          <CarouselNext /> <CarouselPrevious />
        </div>
      </Carousel>
    </div>
  );
}
