"use client";
import { COLORS } from "@/colors/colors"
import peanut from "../../../public/peanut.svg";
import Image from "next/image";
import { Button } from "@/atoms/button";
import shoppingCart from "../../../public/shoppingCart.svg"
import bag from "../../../public/bag.svg"
import { useState } from "react";


export const FeaturedProducts = () => {
    const [count, setCount] = useState(1);
    return (
        <div className="sm:p-[24px]" style={{ background: COLORS.white100 }}>
            <div
                style={{
                    background: "radial-gradient(circle at center, #CD8131 0%, #0C1416 40%, #000000 100%)"
                }}
                className="sm:rounded-[16px] pb-[40px] flex flex-col sm:flex-row"
            >
                <div className="flex-1 justify-center  pt-[40px] sm:pt-[88px] sm:pl-[80px] px-[16px]">
                    <div style={{ color: COLORS.white100 }} className="text-[40px] font-bold text-center sm:text-left">
                        Featured
                    </div>
                    <div style={{ color: COLORS.black, background: COLORS.mustard100 }}
                        className="flex justify-center items-center w-fit mt-[9px] font-kaushan text-[48px] px-[24px] font-normal text-center sm:mx-[0] mx-auto ">
                        Products
                    </div>
                    <div style={{ color: COLORS.white100 }} className="pt-[90px] text-[36px] sm:text-[48px] font-bold  text-center sm:text-left">Get 20% OFF!</div>
                    <div style={{ color: COLORS.mustard100 }} className="text-[34px] sm:text-[48px]">Hurry, before it’s gone!</div>
                </div>

                <Image src={peanut} alt={"peanut"} className="flex-2 object-contain" />

                <div className="flex-1 sm:pt-[88px] sm:pl-[100px] pl-[16px]">
                    <div className="hidden sm:flex gap-[32px] pl-[100px]" >
                        <div style={{ borderColor: COLORS.white, color: COLORS.white100 }}
                            className="w-[56px] h-[56px] rounded-full border flex items-center justify-center cursor-pointer text-[32px] font-medium">&larr;</div>
                        <div style={{ borderColor: COLORS.mustard100, background: COLORS.mustard100, color: COLORS.black }}
                            className="w-[56px] h-[56px] rounded-full border flex items-center justify-center cursor-pointer text-[32px] font-medium">&rarr;</div>
                    </div>


                    <div className="sm:pt-[240px]">
                        <div style={{ color: COLORS.white }} className="text-[30px] sm:text-[32px] font-medium">
                            Peanut Oil <span className="text-[16px] font-regular">500 ml</span>
                        </div>
                        <div style={{ color: COLORS.white100 }} className="flex gap-[12px] pt-[16px]">
                            <div onClick={() => setCount((e) => Math.max(0, e - 1))} style={{ borderColor: COLORS.white }} className="w-6 h-6 rounded-full border flex items-center justify-center cursor-pointer">-</div>
                            <div>{count}</div>
                            <div onClick={() => setCount((e) => e + 1)} style={{ borderColor: COLORS.white }} className="w-6 h-6 rounded-full border flex items-center justify-center cursor-pointer">+</div>
                        </div>
                        <div className="pt-[24px] sm:w-[238px] pr-[16px]  sm:px-[0]">
                            <Button text={"Buy now"} icon={bag} textColor={COLORS.black100} bg={COLORS.mustard100} border={COLORS.mustard100} />
                        </div>
                        <div className="pt-[16px] sm:w-[238px] pr-[16px]  sm:px-[0]">
                            <Button text={"Add to cart"} icon={shoppingCart} bg={COLORS.black100} textColor={COLORS.white100} border={COLORS.white100} />
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}