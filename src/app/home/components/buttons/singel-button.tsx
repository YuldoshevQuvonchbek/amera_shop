"use client";
import { toast } from "@/components/ui/use-toast";
import { addLikeItem } from "@/redux/reducer/like-reducer";
import { add, remove } from "@/redux/reducer/product-reducer";
import { RootState } from "@/redux/store";
import React from "react";
import { CiStar } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";

const SingelButton = ({ product }: { product: any }) => {
  const { products } = useSelector((state: RootState) => state.product);
  const { likeItem } = useSelector((state: RootState) => state.like);
  const myCard = products.find((item) => item.id === product.id);
  const myLike = likeItem.find((item) => item.id == product.id);

  const deleteProduct = (id: number) => {
    dispatch(remove({ id }));
  };

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
    }
  };

  return (
    <div className="flex items-center flex-wrap  gap-[20px] pt-[20px]">
      {!myLike ? (
        <button
          onClick={() => addLike()}
          className={`py-[8px] px-[70px] border-[1px] border-borderColor hover:bg-mainColor hover:text-whiteColor2 rounded-[30px] flex items-center gap-[8px]  `}
        >
          {" "}
          <CiStar className="text-[20px]" /> Add To Wishlist
        </button>
      ) : (
        <button
          className={`py-[8px] px-[70px] border-[1px] border-borderColor bg-mainColor hover:text-whiteColor2 rounded-[30px] flex items-center gap-[8px]  `}
        >
          {" "}
          <CiStar className="text-[20px]" /> In the Wishlist
        </button>
      )}
      {!myCard ? (
        <button
          onClick={() => addProduct()}
          className="py-[8px] px-[90px] bg-mainColor rounded-[30px] "
        >
          + Add To Cart
        </button>
      ) : (
        <button
          onClick={() => deleteProduct(product.id)}
          className="py-[8px] px-[90px] bg-red-500 dark:text-whiteColor2 text-textColor rounded-[30px] "
        >
          - Remove To Cart
        </button>
      )}
    </div>
  );
};

export default SingelButton;
