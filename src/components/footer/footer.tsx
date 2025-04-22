import { COLORS } from "@/colors/colors";
import logo from "../../../public/icon2.svg"
import phone from "../../../public/phone.svg"
import marker from "../../../public/marker.svg"
import envelope from "../../../public/envelope.svg"
import Image from "next/image";
import { socialReach } from "@/constant/constant";

export const Footer = () => {
    return (
        <div className="py-[32px] px-[16px] sm:py-[60px] sm:px-[120px] " style={{ background: COLORS.black100 }}>
            <div className="flex flex-col sm:flex-row items-baseline  sm:items-center font-medium text-[18px] cursor-pointer" style={{ color: COLORS.white }} >
                <div className="flex flex-col gap-[16px] flex-[0.5]">
                    <Image src={logo} alt="logo" />
                    <div className="flex gap-[16px] mt-[20px]">
                        <Image src={phone} alt="phone" />
                        <div>
                            +1236548966
                        </div>
                    </div>
                    <div className="flex gap-[16px]">
                        <Image src={envelope} alt="envelope" />
                        <div>
                            oil@anrita.com
                        </div>
                    </div>
                    <div className="flex gap-[16px]">
                        <Image src={marker} alt="marker" />
                        <div>
                            India
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-[17px] flex-[0.5]">
                    <div className="font-bold mt-[40px] sm:mt[0]">Quick Links</div>
                    <div className="mt-[8px]">Home</div>
                    <div>About Us</div>
                    <div>Shop</div>
                    <div>Contact Us</div>
                </div>
                <div className="flex flex-col gap-[24px] flex-[0.6] mb-[116px]">
                    <div className="font-bold mt-[40px] sm:mt[0">Follow Us</div>
                    <div className="flex gap-[16px]">
                        {socialReach.map((e, i) => <Image key={i} src={e} alt={e} />)}
                    </div>
                </div>

            </div>
            <div />
            <hr className="border-t border-gray-300 w-full mt-[45px] mb-[45px]" />
            <div style={{ color: COLORS.white }} className="flex items-center justify-center font-medium text-[16px]">
                © 2025 ANRITA. All Rights Reserved.
            </div>
        </div>
    )
}