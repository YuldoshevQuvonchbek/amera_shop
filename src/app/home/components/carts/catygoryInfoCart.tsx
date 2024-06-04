import React from "react";

interface Props {
  id: number;
  title: string;
  image: string;
  children: { title: string; image: string; id: number }[];
}

const CatygoryInfoCart = ({ title, id, image }: Props) => {
  return (
    <div
      key={id}
      className=" max-w-[299px] flex bg-white   justify-between items-center border border-bordercolor pl-5 py-[10px] pr-[10px]"
    >
      <div>
        <h1>{title}</h1>
        <p> items: 10 </p>
      </div>
      <div>
        <img className=" max-w-[107px] max-h-[107px]" src={image} alt={title} />
      </div>
    </div>
  );
};

export default CatygoryInfoCart;
