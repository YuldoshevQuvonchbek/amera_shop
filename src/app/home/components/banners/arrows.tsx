import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      style={{
        ...style,
        display: "block",
        position: "absolute",
        opacity: "0.5",
        right: "10px",
        zIndex: "9",
        top: "50%",
      }}
      onClick={onClick}
    >
      <GrNext className="w-7 h-7 rounded-full hover:bg-bordercolor flex items-center justify-center  duration-200" />
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      style={{
        ...style,
        display: "block",
        position: "absolute",
        zIndex: "9",
        opacity: "0.5",

        top: "50%",
        left: "10px",
      }}
      onClick={onClick}
    >
      <GrPrevious className="w-7 h-7 rounded-full hover:bg-bordercolor flex items-center justify-center  duration-200" />
    </div>
  );
}

export { SampleNextArrow, SamplePrevArrow };
