import React from "react";
import { getsubVariant } from "@/service/getsubVariant";
import { NextPage } from "next";
import CatygoryCart from "@/app/home/components/carts/catygoryCart";

const ProductList: NextPage<{ params: { id: string | undefined } }> = async ({
  params,
}) => {
  const data = await getsubVariant(params.id);

  return (
    <div className=" container">
      <div className=" py-10">
        <div className=" flex flex-wrap justify-center gap-5">
          {data.results.map((item) => (
            <CatygoryCart {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
