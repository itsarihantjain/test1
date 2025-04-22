import { BenefitCard } from "@/atoms/benefit-card";
import { benefitsData } from "@/constant/constant";

export const Benefits = () => {

    return (
        <div className="bg-[url('/benefits.svg')] bg-no-repeat bg-cover bg-center w-full h-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px] sm:gap-[40px]  pt-[47px] sm:pt-[160px] pb-[44px] 
            sm:pb-[100px] w-fit mx-auto pl-[16px] pr-[16px] sm:pl-[0]  sm:pr-[0]">
                {benefitsData.map((singleBenefit, index) => {
                    return <BenefitCard key={index} icon={singleBenefit.icon} heading={singleBenefit.heading} description={singleBenefit.description} />
                })}
            </div>
        </div>
    )

}