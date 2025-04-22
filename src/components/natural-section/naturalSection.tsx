import { NaturalCard } from "@/atoms/natural-card"
import { COLORS } from "@/colors/colors"
import { naturalData } from "@/constant/constant"


export const NaturalSection = () => {


    return (
        <div style={{ background: COLORS.black100 }} className="sm:pt-[48px] sm:pb-[98px] sm:pl-[120px] sm:pr-[120px] px-[16px] py-[40px]">
            <div className="flex justify-center sm:text-[40px] text-[36px] font-bold whitespace-nowrap" style={{ color: COLORS.white100 }}>
                The natural way
            </div>
            <div className="flex justify-center">
                <div className=" pt-[20x] text-[40px] sm:text-[48px] font-kaushan inline-block px-[66px] whitespace-nowrap" style={{ background: COLORS.green }}>
                    We make it
                </div>
            </div>
            <div>
                {naturalData.map((singleNatural, index) => {
                    return <NaturalCard key={index} icon={singleNatural.icon} heading={singleNatural.heading} description={singleNatural.description} reverse={index % 2 === 1} />
                })}
            </div>
        </div>
    )

}