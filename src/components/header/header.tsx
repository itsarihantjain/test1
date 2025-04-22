import Image from "next/image";
import logo from "../../../public/icon1.svg";
import arrowUpRightWhite from "../../../public/arrowUpRightWhite.svg";
import sort from "../../../public/sort.svg";
import { Button } from "@/atoms/button";
import { COLORS } from "@/colors/colors";

export const Header = () => {
    return (
        <div style={{ background: 'transparent' }} className=" py-[32px] px-[16px] sm:py-[26px] sm:px-[56px] flex justify-between items-center">
            <Image src={logo} alt="logo" />
            <div className="flex items-center gap-[340px] cursor-pointer hidden sm:flex" style={{ color: COLORS.white }}>
                <div className="flex items-center gap-[64px]">
                    <div className="font-bold">
                        Home
                    </div>
                    <div>
                        About Us
                    </div>
                    <div>
                        Shop
                    </div>
                    <div>
                        Contact
                    </div>
                </div>
                <Button text={"Login"} bg="transparent" icon={arrowUpRightWhite} reverse={true} textColor={COLORS.white} />
            </div>
            <div className="flex items-center gap-[24px] sm:hidden">
                <Button text={"Login"} bg="transparent" icon={arrowUpRightWhite} reverse={true} textColor={COLORS.white} />
                <Image src={sort} alt="logo" />
            </div>
        </div>
    )
}