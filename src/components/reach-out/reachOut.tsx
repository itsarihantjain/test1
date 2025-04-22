import Image from "next/image";
import { Button } from "../../atoms/button";
import reach from "../../../public/reach.svg"
import arrowUpRightOrange from "../../../public/arrowUpRightOrange.svg"
import { COLORS } from "@/colors/colors";

export const ReachOut = () => {

    return (
        <div>
            <div className="flex w-full">
                <Image src={reach} alt="" className="hidden sm:block" />
                <div style={{ background: COLORS.blue200 }} className="flex flex-col gap-[18px] w-full py-[55px] px-[112px] hidden sm:flex">
                    <div style={{ color: COLORS.white100 }} className="font-bold text-[40px] w-[400px]">
                        Have a question? Reach out.
                    </div>
                    <div style={{ color: COLORS.green }} className="text-[20px] w-[386px]">
                        Explore rich aromas—experience the true taste of quality oil.
                    </div>
                    <div className="w-[238px] mt-[4px]">
                        <Button text={"Reach out now"} icon={arrowUpRightOrange} reverse={true} bg={COLORS.green} border={COLORS.green} />
                    </div>
                </div>

                <div className="flex flex-col items-center gap-[18px] w-full py-[55px] px-[32px] bg-reach sm:hidden">
                    <div style={{ color: COLORS.white100 }} className="font-bold text-[36px] text-center">
                        Have a question? Reach out.
                    </div>
                    <div style={{ color: COLORS.green }} className="text-[20px] text-center">
                        Explore rich aromas—experience the true taste of quality oil.
                    </div>
                    <div className="w-[238px] mt-[4px]">
                        <Button text={"Reach out now"} icon={arrowUpRightOrange} reverse={true} bg={COLORS.green} border={COLORS.green} />
                    </div>
                </div>
            </div>
            <div style={{ background: COLORS.white100 }} className="py-[30px]" />
        </div>
    )
}