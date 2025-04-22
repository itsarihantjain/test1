'use client';
import { COLORS } from "@/colors/colors";
import { Arrows } from "../arrows";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Button } from "../button";
import arrowupright from "../../../public/arrowupright.svg"

type CarouselProps = {
  carouselData: Carousel[]
};

export const Carousel: React.FC<CarouselProps> = ({ carouselData }) => {
  const ref = useRef(0);
  const [carouselCurrentIndex, setCarouselCurrentIndex] = useState(ref.current)

  const next = () => {
    ref.current += 1
    ref.current === carouselData?.length ? ref.current = 0 : ref.current
    setCarouselCurrentIndex(ref.current)
  }

  const prev = () => {
    ref.current -= 1
    ref.current === -1 ? ref.current = carouselData?.length - 1 : ref.current
    setCarouselCurrentIndex(ref.current)
  }

  useEffect(() => {
    const autoCall = setInterval(() => {
      next()
    }, 5000)

    return () => clearInterval(autoCall);
  }, [carouselCurrentIndex])


  return (
    <div className="relative bg-cover" style={{ background: carouselData[ref.current].background }}>
      {
        carouselData[ref.current] && (
          <div className="flex flex-col justify-start transition-all duration-300" >

            <div key={ref.current} className="flex justify-center items-center relative">
              <Image src={carouselData[ref.current].image} alt={carouselData[ref.current].heading}
                className="object-cover w-auto h-[327px] md:h-[600px] md:w-[400px] z-[10]" />

              <div className="absolute lg:w-[70%] w-[50%]">
                <Image src={carouselData[ref.current].backgroundImage} alt={carouselData[ref.current].heading}
                  className="object-contain relative w-full z-[5]" />
                <Image src={carouselData[ref.current].nameImage} alt={carouselData[ref.current].heading}
                  className="object-contain absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 z-[0]" />

                <Image src={carouselData[ref.current].productImage} alt={carouselData[ref.current].heading}
                  className="object-contain absolute right-0 bottom-0 translate-x-1/2 translate-y-[calc(50%+120px)] z-[0]" />
              </div>


            </div>

            <div className="pl-[16px] md:pl-[80px] pt-[74px] md:pt-[12px] font-bold text-[32px]" style={{ color: COLORS.white }}>
              {carouselData[ref.current].heading}
            </div>

            <div className="pl-[16px] md:pl-[80px] w-[362px] font-regular text-[16px]" style={{ color: COLORS.white }}>
              {carouselData[ref.current].description}
            </div>
            <div className="w-[120px] mt-[21px] ml-[16px] md:ml-[80px]">
              <Button text={"Buy Now"} icon={arrowupright} reverse={true} bg={COLORS.white} textColor={COLORS.mustard100} />
            </div>
          </div>
        )
      }

      <div className="flex items-center justify-center gap-x-1 pb-[32px] pt-[26px]">
        {carouselData.map((_, index) => (
          <div
            key={index}
            onClick={() => setCarouselCurrentIndex(index)}
            className={`md:hidden block rounded-full cursor-pointer transition-all duration-300 
              ${carouselCurrentIndex === index ? 'w-3 h-3 bg-white' : 'w-2.5 h-2.5 bg-gray-300'
              }`}
          ></div>
        ))}
      </div>


      <div className="md:block hidden">
        <Arrows next={next} prev={prev} ref={ref} carouselData={carouselData} />
      </div>
    </div>
  );
};
