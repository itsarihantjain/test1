import { forwardRef } from "react";
import Image from "next/image";
import backIcon from "../../../public/back.svg";
import nextIcon from "../../../public/next.svg";

type ArrowsProps = {
  next: () => void;
  prev: () => void;
  carouselData: Carousel[]
};

export const LeftArrow: React.FC<{ prev: () => void }> = ({ prev }) => {
  return (
    <div onClick={() => prev()} className="ml-10">
      <Image src={backIcon} alt={"back"} />
    </div>
  );
};

export const RightArrow: React.FC<{ next: () => void }> = ({ next }) => {
  return (
    <div onClick={() => next()} className="mr-10 ml-auto">
      <Image src={nextIcon} alt={"nextIcon"} />
    </div>
  );
};

export const Arrows = forwardRef<HTMLDivElement, ArrowsProps>(({ next, prev, carouselData }, ref) => {
  return (
    <div className="flex justify-between items-center absolute top-1/2 w-full -translate-y-1/2">
      {ref?.current !== 0 && <LeftArrow prev={prev} />}
      {ref?.current !== carouselData.length - 1 && <RightArrow next={next} />}
    </div>
  );
})
