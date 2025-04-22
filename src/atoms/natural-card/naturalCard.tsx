import { COLORS } from "@/colors/colors";
import Image from "next/image";

export const NaturalCard: React.FC<Natural> = ({ icon, heading, description, reverse }) => {
    return (
        <div className="pt-[54px] sm:pt-[92px]">
            <div className={`sm:flex items-center sm:gap-[120px] gap-[64px] pt-[22px] pb-[22px] sm:px-[24px]
            ${reverse ? 'flex-row-reverse' : ''}`}>
                <Image src={icon} alt={heading} />
                <div className={`flex flex-col gap-[30px] pt-[30px] sm:pt-[0]`}>
                    <div className="text-[32px] sm:text-[36px]" style={{ color: COLORS.green100 }}>
                        {heading}
                    </div>
                    <div style={{ color: COLORS.white }} className="font-medium text-[18px] sm:text-[20px] leading-[36px]">
                        {description}
                    </div>
                </div>
            </div>
        </div>
    )
}