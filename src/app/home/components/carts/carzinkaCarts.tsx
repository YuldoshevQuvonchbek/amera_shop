"use client";
import { remove, toggleAnmount } from "@/redux/reducer/product-reducer";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBin6Line } from "react-icons/ri";
import Link from "next/link";
import { addLikeItem } from "@/redux/reducer/like-reducer";
import { toast } from "@/components/ui/use-toast";
import { RootState } from "@/redux/store";

interface propsType {
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

const CarzinkaCarts = (product: propsType) => {
  const dispatch = useDispatch();
  const addCount = (id: number) => {
    dispatch(toggleAnmount({ type: "add", id }));
  };
  const removeCount = (id: number) => {
    dispatch(toggleAnmount({ type: "remove", id }));
  };
  const deleteProduct = (id: number) => {
    dispatch(remove({ id }));
  };
  const { likeItem } = useSelector((state: RootState) => state.like);
  const myLike = likeItem.find((item: any) => item.id == product.id);
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

  return (
    <div className="flex items-center justify-between  flex-wrap gap-[20px]  max-w-[800px] w-[100%] mb-[30px] ">
      <div className="flex items-center gap-[25px]">
        <div className="max-w-[90px] w-[100%] ">
          <img src={product?.images[0]?.image} alt="image" />
        </div>
        <div className="flex flex-col gap-[25px] max-w-[400px] w-[100%] ">
          <Link href={`/shop-single/${product.id}`}>
            <h2 className=" font-semibold text-[18px] text-linkColor hover:text-mainColor cursor-pointer ">
              {product.title}
            </h2>
          </Link>
          <div className=" flex items-center gap-[10px]">
            {myLike ? (
              <p className="text-[15px] font-semibold hover:text-red-600 pr-[10px] border-r-[1px] border-borderColor">
                In Favorites
              </p>
            ) : (
              <button
                onClick={() => addLike()}
                className="text-[15px] font-semibold hover:text-red-600 pr-[10px] border-r-[1px] border-borderColor "
              >
                To Favorites
              </button>
            )}
            <button
              onClick={() => deleteProduct(product.id)}
              className="text-[15px] font-semibold hover:text-red-600"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center  gap-[90px]">
        <div className=" flex items-center gap-[15px] border-[2px] border-borderColor py-[3px] rounded-[7px] px-[25px]">
          {product.userCount > 1 ? (
            <button
              className="text-2xl"
              onClick={() => removeCount(product.id)}
            >
              -
            </button>
          ) : (
            <button onClick={() => deleteProduct(product.id)}>
              <RiDeleteBin6Line className="text-2xl" />
            </button>
          )}
          <span className="text-xl">{product.userCount}</span>
          <button className="text-2xl" onClick={() => addCount(product.id)}>
            +
          </button>
        </div>
        <strong>${parseInt(product.price.toString())}</strong>
      </div>
    </div>
  );
};

export default CarzinkaCarts;
