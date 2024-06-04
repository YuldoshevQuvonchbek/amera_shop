import { getSubLimitproduct } from "@/service/getSubLimitproduct";
import { getsubVariant } from "@/service/getsubVariant";

import React from "react";
import { SubProducts } from "../sub-products/sub-products";

const Subbannerlist = async () => {
  const data = await getSubLimitproduct();
  const product1 = data.results[0];

  return (
    <div>
      <div className="pb-7 items-center relative gap-1 flex">
        <h1 className=" text-xl font-medium text-nowrap  ">
          Top Flash
          <strong className=" text-nowrap text-xl font-normal">Deals</strong>
        </h1>
        <span className=" h-[1px] max-w-[1100px] w-full bg-bordercolor  "></span>
      </div>
      <div className=" flex md2:justify-between justify-center  ">
        <div className="xl:w-[250px] hidden md2:block w-[200px] ">
          {data?.results?.slice(0, 1).map((item) => (
            <div key={item.id}>
              <img
                className=" w-full h-[289px] object-cover"
                src={item.image}
                alt=""
              />
            </div>
          ))}
        </div>
        <div className=" lg2:max-w-[1080px]   xl2:max-w-[1000px] xl:max-w-[950px] lg:max-w-[800px] md:max-w-[600px] max-w-[300px]   ">
          <SubProducts id={product1.id} />
        </div>
      </div>
    </div>
  );
};

export default Subbannerlist;
