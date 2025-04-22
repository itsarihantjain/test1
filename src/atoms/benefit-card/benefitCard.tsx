import { COLORS } from "@/colors/colors";
import Image from "next/image";

export const BenefitCard: React.FC<Benefits> = ({ icon, heading, description }) => {

    return (
        <div className="border flex flex-col rounded-[8px] gap-[10px] pt-[22px] pb-[22px] pl-[24px] pr-[24px]" style={{ borderColor: COLORS.gray100, background: COLORS.gray300 }}>
            <Image src={icon} alt={heading} />
            <div className="pt-[10px] font-bold text-[22px]" style={{ color: COLORS.black }}>
                {heading}
            </div>
            <div style={{ color: COLORS.gray400 }} className="font-regular text-[16px]">
                {description}
            </div>
        </div>

    )
}