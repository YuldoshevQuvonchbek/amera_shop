import React from "react";
import { TopFlashBanner } from "../components/banners/topFlashBanner";
import { getproduct } from "@/service/getproduct";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default async function ProductList() {
  const data = await getproduct();

  return (
    <div className=" mb-5">
      <div className="pb-7 items-center gap-1 flex">
        <h1 className=" text-xl font-medium text-nowrap  ">
          Top Flash
          <strong className=" text-nowrap text-xl font-normal">Deals</strong>
        </h1>
        <span className=" h-[1px] max-w-[400px] w-full bg-bordercolor  "></span>
      </div>
      <Carousel>
        <CarouselContent>
          {data.results.map((item) => (
            <CarouselItem>
              <div
                key={item.id}
                className="   bg-white p-5  items-center rounded"
              >
                <div className=" sm:flex  items-center ">
                  <div className=" xl2:max-w-[300px]  ">
                    <img
                      className="   object-cover  object-center h-[300px]"
                      src={item.images[0].image}
                      alt={item.title}
                    />
                  </div>
                  <div className="  max-w-[376px]">
                    <div>
                      <div className=" mb-1 flex  gap-1 ">
                        <p className=" text-xs text-linkcolor cursor-pointer duration-150  hover:underline      font-normal">
                          Game & Toy
                        </p>
                        <p className=" hover:underline duration-150 cursor-pointer  text-xs font-normal text-linkcolor ">
                          Smart Phones
                        </p>
                      </div>
                      <h1 className=" text-titlecolor mb-3 text-base  font-medium">
                        {item.title}
                      </h1>
                      <p className="text-lg font-medium mb-1 ">${item.price}</p>
                      <p className=" text-sm font-normal mb-3">
                        Typi non habent claritatem insitam, est usus legentis in
                        iis qui facit eorum claritatem. Investigationes…
                      </p>
                      <p className=" mb-[10px]">Hurry up! Special offer:</p>
                    </div>
                    <div className="  flex items-center gap-[10px]">
                      <div className=" flex flex-col items-center w-[58px] h-[58px] justify-center rounded-full bg-bordercolor ">
                        <p className=" text-base font-medium">420</p>
                        <p className="  text-xs font-normal ">Days</p>
                      </div>
                      <div className=" flex flex-col items-center w-[58px] h-[58px] justify-center   rounded-full bg-bordercolor ">
                        <p className=" text-base font-medium">17</p>
                        <p className="  text-xs font-normal ">Hrs</p>
                      </div>
                      <div className=" flex flex-col items-center w-[58px] h-[58px] justify-center rounded-full bg-bordercolor ">
                        <p className=" text-base font-medium">16</p>
                        <p className="  text-xs font-normal ">Mins</p>
                      </div>
                      <div className=" flex flex-col items-center w-[58px] h-[58px] justify-center rounded-full bg-bordercolor ">
                        <p className=" text-base font-medium">28</p>
                        <p className="  text-xs font-normal ">Secs</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
