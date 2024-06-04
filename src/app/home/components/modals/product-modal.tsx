"use client";

import React from "react";
import { IoEyeOutline } from "react-icons/io5";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import Link from "next/link";

interface Props {
  images: { image: string}[];
  title: string;
  price: string;
  id: number;
  other_detail: string;
}

const ProductModal: React.FC<Props> = (product) => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="w-[40px] h-[40px] bg-bodyColor border-[1px] border-borderColor text-[20px] hover:border-none hover:bg-mainColor flex items-center justify-center rounded-[50%] "
      >
        <IoEyeOutline />
      </button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className=" max-w-[1000px] w-[100%] ">
          <div className="flex gap-10 items-center">
            <div className="w-[45%] ">
              <img
                className="w-[400px] object-cover max-h-[60vh]"
                src={product.images[0]?.image}
              />
            </div>
            <div className="flex flex-col gap-3 w-[65%] max-h-[80vh] overflow-auto">
              <h1 className="font-medium text-xl text-start">
                {product.title}
              </h1>
              <strong>${product.price}</strong>
              <div className="flex items-center gap-5">
                <Link
                  href={`/shop-single/${product.id}`}
                  className="hover:text-mainColor hover:underline  "
                >
                  See all features
                </Link>
              </div>

              <p
                className="max-h-[300px] h-full overflow-y-scroll"
                dangerouslySetInnerHTML={{
                  __html: product.other_detail,
                }}
              ></p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProductModal;
