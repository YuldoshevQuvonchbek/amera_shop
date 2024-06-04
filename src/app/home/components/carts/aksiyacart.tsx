import React from "react";

interface AksiyacartProps {
  id: number;
  image: string;
  title: string;
}

const Aksiyacart: React.FC<AksiyacartProps> = ({ id, image, title }) => {
  return (
    <div
      className="max-w-[440px] xl:max-w-[380px] xl2:max-w-[410px] ml:mb-5 ml:w-[440px]  relative"
      key={id}
    >
      <img src={image} alt="img" />
      <h1
        className="text-white text-xl absolute top-8 left-5 font-normal"
        dangerouslySetInnerHTML={{ __html: title }}
      ></h1>
    </div>
  );
};

export default Aksiyacart;
