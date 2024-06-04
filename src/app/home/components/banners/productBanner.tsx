// "use client";
// import React, { useRef } from "react";
// import Slider from "react-slick";
// import { GrNext } from "react-icons/gr";
// import { GrPrevious } from "react-icons/gr";

// interface typeSettings {
//   children: React.ReactNode;
// }

// export const ProductBanner: React.FC<typeSettings> = ({ children }) => {
//   const sliderRef = useRef<Slider>(null);

//   const settings = {
//     className: "center",
//     centerMode: true,
//     infinite: true,
//     centerPadding: "10px",
//     slidesToShow: 3,
//     speed: 500,
//     rows: 2,
//     slidesPerRow: 2,
//   };

//   const next = () => {
//     sliderRef.current?.slickNext();
//   };

//   const previous = () => {
//     sliderRef.current?.slickPrev();
//   };

//   return (
//     <div className="slider-container relative">
//       <Slider className="  flex gap" ref={sliderRef} {...settings}>
//         {children}
//       </Slider>

//       <div
//         className=" flex absolute top-0 right-0   items-center gap-8 "
//         style={{ textAlign: "center" }}
//       >
//         <button className="  w-[10px] h-[19px]" onClick={previous}>
//           <GrPrevious />
//         </button>
//         <button className=" w-[10px] h-[19px]" onClick={next}>
//           <GrNext />
//         </button>
//       </div>
//     </div>
//   );
// };
