import Image from "next/image";
import ourStory from "../../../public/ourStory.svg";
import { COLORS } from "@/colors/colors";

export const StorySection = () => {

    return (
        <div className="flex flex-col-reverse sm:flex-row sm:py-[146px] py-[88px] px-[16px] sm:px-[120px] gap-[96px]" style={{ background: COLORS.white100 }}>
            <Image src={ourStory} alt={"story"} className="object-contain flex-1 h-[630]" />
            <div className="flex flex-col flex-1 h-full">
                <div className="flex gap-[16px] items-center text-[40px] font-bold pt-0" style={{ color: COLORS.black100 }}>
                    Our
                    <span style={{ background: COLORS.black100, color: COLORS.green }} className="font-kaushan px-[26px] text-[48px] font-normal pt-0">
                        Story
                    </span>
                </div>
                <div className="leading-[36px] pt-[16px] text-[20px] font-meduim" style={{ color: COLORS.gray500 }}>
                    Anrita’s journey began with a simple conversation that changed everything. As our father once said, “Ours is the last generation to have truly unadulterated food.” That realization drove us to return to the roots of pure, traditional food production.
                    Coming from a family with deep ties to the oil industry, we saw how modern methods were compromising quality. Determined to make a diﬀerence, we started growing our own organic produce and revived the age-old kohlu method of oil extraction.
                    But purity isn’t just about what’s inside the bottle—it’s also about how it’s made. Sustainability is at the core of Anrita. From plastic-free packaging in tin containers to ensuring zero waste in our process, we are dedicated to making choices that are better for both you and the planet.
                    At Anrita, we don’t just sell oil—we preserve a legacy of purity, one bottle at a time.
                </div>
            </div>
        </div>
    )
}