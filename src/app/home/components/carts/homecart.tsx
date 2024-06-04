"use client";
import { Button } from "@/components/ui/button";
import { CiStar } from "react-icons/ci";
import { GoEye } from "react-icons/go";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { add, remove } from "@/redux/reducer/product-reducer";
import { toast } from "@/components/ui/use-toast";
import { addLikeItem, removeLikeItem } from "@/redux/reducer/like-reducer";
import Link from "next/link";

interface Props {
  id: number;
  title: string;
  price: number;
  is_available: boolean;
  description: string;
  category: string;
  product: number;
  attribute_value: [];
  images: {
    order: number;
    image: string;
  }[];
  userCount: number;
  userPrice: number;
  other_detail: string;
  price_with_discount: string;
  quantity: number;
}

const Homecart = (product: Props) => {
  const { products } = useSelector((state: RootState) => state.product);
  const { likeItem } = useSelector((state: RootState) => state.like);

  const myCard = products.find((item) => item.id === product.id);
  const myLike = likeItem.find((item) => item.id == product.id);

  const dispatch = useDispatch();
  const addProduct = () => {
    try {
      dispatch(add(product));
      toast({
        title: "Product successfully added!",
      });
    } catch (e) {
      toast({
        title: "Error!",
      });
      console.log(e);
    }
  };
  const addLike = () => {
    try {
      dispatch(addLikeItem(product));
      toast({
        title: "Product successfully added!",
      });
    } catch (e) {
      toast({
        title: "Error!",
      });
      console.log(e);
    }
  };

  const removeLike = (id: number) => {
    dispatch(removeLikeItem({ id }));
    console.log(true);
  };

  const deleteProduct = (id: number) => {
    dispatch(remove({ id }));
  };

  return (
    <div key={product.id} className="w-[200px] ">
      <div className="shadow hover:shadow-lg bg-white transition duration-300 ease-in-out xl:mb-0 lg:mb-0 md:mb-0 mb-6 cursor-pointer group">
        <div className="overflow-hidden relative">
          <img
            className="w-[200px] h-[200px] transition bg-cover duration-700 ease-in-out  group-hover:opacity-50"
            src={product?.images[0]?.image}
            alt="image"
          />

          <div className="absolute top-[10px] right-[10px] bottom-4 transition translate-x-[50px] group-hover:translate-x-0 duration-500 ease-in-out opacity-0 flex-col gap-3 group-hover:opacity-100">
            {!myLike ? (
              <div
                onClick={() => addLike()}
                className="w-10 mb-3 h-10 hover:bg-primarycolor duration-200 hover:text-white rounded-full flex justify-center items-center bg-bordercolor"
              >
                <CiStar className="  w-[25px] h-[25px] " />
              </div>
            ) : (
              <div
                onClick={() => removeLike(product.id)}
                className="w-10 mb-3 h-10  duration-200  text-white rounded-full flex justify-center items-center bg-primarycolor"
              >
                <CiStar className="  w-[25px] h-[25px] " />
              </div>
            )}
            <Link href={`/singelPage/${product.id}`}>
              <div className="w-10 h-10 hover:bg-primarycolor duration-200 hover:text-white rounded-full flex justify-center items-center bg-bordercolor">
                <GoEye className="  w-[25px] h-[25px] " />
              </div>
            </Link>
          </div>
        </div>
        <div className="px-4  pt-3 pb-5 text-center  relative bg-white">
          <h2 className=" text-xs mb-2 font-normal">Digital, Game & Toy</h2>
          <h1 className="text-[#0066C0]   mb-1 text-sm font-semibold  hover:text-primarycolor transition duration-300 ease-in-out">
            {product.title}
          </h1>
          <p className=" text-lg font-medium ">${product.price}</p>
          <div className=" absolute top-[60px] z-30 right-[18px] transition translate-y-[10px] group-hover:translate-y-0 duration-500 ease-in-out opacity-0  gap-3 group-hover:opacity-100 w-[160px]  ">
            {!myCard ? (
              <Button
                onClick={() => addProduct()}
                className=" bg-primarycolor w-full duration-200 rounded-[30px] hover:bg-white hover:text-black hover:border text-white"
              >
                Add To Cart
              </Button>
            ) : (
              <Button
                onClick={() => deleteProduct(product.id)}
                className=" bg-red-600 w-full duration-200 rounded-[30px] hover:bg-white hover:text-black hover:border text-white"
              >
                Remove To Cart
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homecart;
