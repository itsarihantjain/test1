import Image from "next/image";
import desk1 from "../../../public/desk1.svg";
import desk2 from "../../../public/desk2.svg";
import desk3 from "../../../public/desk3.svg";
import mobile1 from "../../../public/mobile1.svg";
import mobile2 from "../../../public/mobile2.svg";
import mobile3 from "../../../public/mobile3.svg";
import { COLORS } from "@/colors/colors";

export const AboutUsSection = () => {

    return (
        <div className="flex justify-between flex-col-reverse sm:flex-row sm:py-[146px] py-[88px] px-[16px] sm:px-[120px]" style={{ background: COLORS.white100 }}>
            <div className="flex flex-col flex-[0.6] h-full">
                <div className="flex gap-[16px] items-center">
                    <div className="font-kaushan px-[26px] text-[48px] font-normal pt-0" style={{ background: COLORS.black100, color: COLORS.green }}>
                        About
                    </div>
                    <div style={{ color: COLORS.black100 }} className="text-[40px] font-bold pt-0">
                        Us
                    </div>
                </div>
                <div className="leading-[36px] pt-[16px] text-[20px] font-meduim" style={{ color: COLORS.gray500 }}>
                    At Anrita, we are on a mission to bring back the purity of oils in their most authentic form. Inspired by generations of expertise and a deep-rooted commitment to sustainability, we craft high-qualityoils using traditional kohlu and cold-pressed methods. Our oils are free from additives and chemicals, ensuring that every drop is as nature intended—pure, nutritious, and full of flavor.
                    By choosing Anrita, you choose tradition, quality, and sustainability, ensuring a healthier lifestyle for yourself and a better future for the planet.
                </div>
            </div>
            <div className="relative h-fit w-fit -translate-x-[calc(146px+49.5px)] hidden sm:block">
                <Image src={desk1} alt={"story"} className="object-contain" />
                <Image src={desk2} alt={"story"} className="object-contain absolute right-0 bottom-0 translate-y-1/2 translate-x-1/2" />
                <Image src={desk3} alt={"story"} className="object-contain absolute bottom-0 translate-y-1/2 -translate-x-1/2" />
            </div>
            <div className="relative block sm:hidden mb-[78px]">
                <Image src={mobile1} alt={"story"} className="object-contain" />
                <Image src={mobile2} alt={"story"} className="object-contain absolute right-0 bottom-10 translate-y-1/2" />
                <Image src={mobile3} alt={"story"} className="object-contain absolute bottom-8 translate-y-1/2" />
            </div>
        </div>
    )
}