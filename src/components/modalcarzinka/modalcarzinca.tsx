"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { Button } from "../ui/button";
import Link from "next/link";

const Modalcarzinca = () => {
  const { products, totalPrice } = useSelector(
    (state: RootState) => state.product
  );

  const { count } = useSelector((state: any) => state.product);
  return (
    <div>
      <Sheet>
        <SheetTrigger className=" flex  relative flex-col items-center gap-[1]">
          <MdOutlineShoppingCart className=" w-8 h-8 " />
          <p className=" text-linkcolor">My Cart</p>
          <p className=" w-5 h-5 bg-primarycolor absolute rounded-full text-white flex justify-center items-center top-[-10px] right-0">
            {count}
          </p>
        </SheetTrigger>
        <SheetContent>
          <div className="   ">
            <div className=" mt-5">
              {products.map((item) => (
                <div className=" flex gap-2 items-center border py-1 px-2 rounded mb-4  ">
                  <img
                    className=" w-20 h-20"
                    src={item.images[0].image}
                    alt=""
                  />
                  <p>{item.title}</p>
                </div>
              ))}
            </div>

            <Link
              className=" flex justify-center mt-5 bg-primarycolor py-2 px-4 rounded "
              href="/carzinka"
            >
              Go To Cart
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Modalcarzinca;
