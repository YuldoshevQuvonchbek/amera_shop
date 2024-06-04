import { getsubVariant } from "@/service/getsubVariant";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Props {
  id?: number;
}

export const SubProducts = async ({ id }: Props) => {
  const { results } = await getsubVariant(id);
  const products = [];
  for (let i = 0; i < results.length; i += 2) {
    if (results[i]) {
      products.push([results[i], results[i + 1]]);
    }
  }
  return (
    <div className="mb-5 ">
      <Carousel>
        <CarouselContent>
          {products.map((item, index) => {
            return (
              <CarouselItem
                className="xl:basis-1/3 md:basis-1/2 lg:basis-1/2  "
                key={index}
              >
                <div>
                  <div className="shadow xl2:w-[330px] xl:w-[300px] md:w-[300px] rounded hover:shadow-lg items-center bg-white pt-3 pb-3 pl-3 pr-2   flex transition duration-300 ease-in-out  mb-5 cursor-pointer group">
                    <div className="overflow-hidden relative">
                      <img
                        className="xl2:w-[110px] w-[90px] transition duration-700 ease-in-out group-hover:opacity-0"
                        src={item[0]?.images[0]?.image}
                        alt="image"
                      />
                      <img
                        className="xl2:w-[110px] w-[90px] transition opacity-0 absolute top-0 duration-700 ease-in-out group-hover:opacity-100"
                        src={item[0]?.images[1]?.image}
                        alt="image"
                      />
                    </div>
                    <div className="px-4 py-3   bg-white">
                      <h2 className=" text-xs mb-2 font-normal">
                        Digital, Game & Toy
                      </h2>
                      <h1 className="text-[#0066C0] mb-2 text-sm font-semibold  hover:text-primarycolor transition duration-300 ease-in-out">
                        {item[0]?.title}
                      </h1>
                      <p className=" text-lg font-medium">${item[0]?.price}</p>
                    </div>
                  </div>
                  <div className="shadow xl2:w-[330px] xl:w-[300px] md:w-[300px]  rounded hover:shadow-lg items-center bg-white pt-3 pb-3 pl-3 pr-2  flex transition duration-300 ease-in-out  mb-5 cursor-pointer group">
                    <div className="overflow-hidden relative">
                      <img
                        className=" xl2:w-[110px] w-[90px] transition duration-700 ease-in-out group-hover:opacity-0"
                        src={item[1]?.images[0]?.image}
                        alt="image"
                      />
                      <img
                        className="xl2:w-[110px] w-[90px] transition opacity-0 absolute top-0 duration-700 ease-in-out group-hover:opacity-100"
                        src={item[1]?.images[1]?.image}
                        alt="image"
                      />
                    </div>
                    <div className="px-4 py-3   bg-white">
                      <h2 className=" text-xs mb-2 font-normal">
                        Digital, Game & Toy
                      </h2>
                      <h1 className="text-[#0066C0] mb-2 text-sm font-semibold  hover:text-primarycolor  transition duration-300 ease-in-out">
                        {item[1]?.title}
                      </h1>
                      <p className=" text-lg font-medium">${item[1]?.price}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <div className=" top-[-42px] right-[56px]  absolute">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  );
};
