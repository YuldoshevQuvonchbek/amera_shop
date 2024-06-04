"use client";
import { RootState } from "@/redux/store";
import React from "react";
import { useSelector } from "react-redux";
import { FaCartArrowDown } from "react-icons/fa6";
import Link from "next/link";
import dynamic from "next/dynamic";

const CarzinkaCarts = dynamic(
  () => import("../home/components/carts/carzinkaCarts"),
  {
    ssr: false,
  }
);

const Carzinka = () => {
  const { products, totalPrice } = useSelector(
    (state: RootState) => state.product
  );
  const { count } = useSelector((state: any) => state.product);

  return (
    <>
      <div className="pb-[70px] pt-[40px] ">
        <div className="container">
          {products.length ? (
            <div className=" flex items-start justify-center gap-[36px] flex-wrap ">
              <div className="w-[900px] border-[2px] rounded-[5px] px-[25px] py-[15px] border-borderColor mb-[15px] ">
                <h1 className="font-medium text-[30px]  text-linkColor mb-[15px] ">
                  <span>{count}</span> items in the cart
                </h1>
                {products.map((product) => (
                  <CarzinkaCarts key={product.id} {...product} />
                ))}
              </div>
              <div className="max-w-[400px] w-[100%] border-[2px] rounded-[5px] border-borderColor px-[25px] py-[15px] ">
                <div className="flex items-center gap-[15px]">
                  <span className="font-extrabold text-[25px] text-mainColor">
                    Total Price:
                  </span>
                  <strong className="font-extrabold text-[25px] ">
                    $ {totalPrice}
                  </strong>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex items-center justify-center mb-[10px]">
                <FaCartArrowDown className="text-4xl text-mainColor " />
              </div>
              <div>
                <h1 className="font-extrabold text-[28px] text-center ">
                  The cart is empty
                </h1>
                <p className="font-semibold text-[15px] text-center mb-[20px] ">
                  But you can always fill it
                </p>
              </div>
              <div className="flex items-center justify-center">
                <Link
                  href={"/"}
                  className="py-[10px] px-[18px] bg-mainColor rounded-[8px] text-[15px] font-semibold text-buttonColor "
                >
                  To the main page
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Carzinka;
