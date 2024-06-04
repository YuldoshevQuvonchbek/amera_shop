import React from "react";

interface AksiyacartProps {
  id: number;
  image: string;
  title: string;
}

const Aksiyacart2: React.FC<AksiyacartProps> = ({ id, image, title }) => {
  return (
    <div className="max-w-[700px] mb-5 w-full  rounded  relative" key={id}>
      <img className=" w-full" src={image} alt="img" />
      <h1
        className="text-white text-xl absolute top-8 left-5 font-normal"
        dangerouslySetInnerHTML={{ __html: title }}
      ></h1>
    </div>
  );
};

export default Aksiyacart2;
