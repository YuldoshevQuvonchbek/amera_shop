"use client";

import React from "react";
import { useSelector } from "react-redux";
import Homecart from "../home/components/carts/homecart";

const Like = () => {
  const { likeItem } = useSelector((state: any) => state.like);

  return (
    <div className=" container">
      <div className=" flex justify-center  mt-8 gap-7 flex-wrap">
        {likeItem.map((item: any) => (
          <Homecart key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Like;
