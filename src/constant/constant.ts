import { COLORS } from "@/colors/colors";
import coconut from "../../public/coconut.svg";
import mustard from "../../public/mustard.svg";
import peanut from "../../public/peanut.svg";
import group12 from "../../public/group12.svg";
import group13 from "../../public/group13.svg";
import group14 from "../../public/group14.svg";
import group15 from "../../public/group15.svg";
import leaf from "../../public/leaf.svg";
import coconutName from "../../public/coconutName.svg";
import peanutName from "../../public/peanutName.svg";
import mustardName from "../../public/mustardName.svg";
import peanutBg from "../../public/peanutBg.svg";
import mustardBg from "../../public/mustardBg.svg";
import coconutBg from "../../public/coconutBg.svg";
import peanutProduct from "../../public/peanutProduct.svg";
import coconutProduct from "../../public/coconutProduct.svg";
import mustardProduct from "../../public/mustardProduct.svg";

import twitter from "../../public/twitter.svg"
import instagram from "../../public/instagram.svg"
import youtube from "../../public/youtube.svg"
import facebook from "../../public/facebook.svg"




export const carouselData: Carousel[] = [{
    background: COLORS.mustard100,
    image: peanut,
    backgroundImage:peanutBg,
    nameImage: peanutName,
    productImage: peanutProduct,
    heading: "Peanut Oil",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
},
{

    background: COLORS.red100,
    image: mustard,
    backgroundImage: mustardBg,
    nameImage: mustardName,
    productImage: mustardProduct,
    heading: "Mustard Oil",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
}, 
{
    background: COLORS.blue100,
    image: coconut,
    backgroundImage: coconutBg,
    nameImage: coconutName,
    productImage: coconutProduct,
    heading: "Coconut Oil",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
}
]


export const benefitsData: Benefits[] = [{
    icon: group14,
    heading: "Cold-pressed & pure ",
    description: "Lorem ipsum dolor sit amet consectetur. Odio donec ac tristique enim. "
},
{

    icon: group15,
    heading: "Wholesome, nutrient-rich oils",
    description: "Lorem ipsum dolor sit amet consectetur. Odio donec ac tristique enim. "
}, 
{
    icon: group12,
    heading: "100 & natural, chemical-free goodness",
    description: "Lorem ipsum dolor sit amet consectetur. Odio donec ac tristique enim. "
},
{
    icon: group13,
    heading: "Versatile for cooking & wellness",
    description: "Lorem ipsum dolor sit amet consectetur. Odio donec ac tristique enim. "
}
]

export const naturalData: Natural[] = [{
    icon: leaf,
    heading: "Only the Purest Seeds Make the Cut",
    description: "Great oil starts with great seeds. We carefully select only high-quality, nutrient rich seeds, ensuring maximum purity, flavor, and health benefits in every drop. By using superior seeds, we guarantee that our oils retain their essential nutrients, antioxidants, and rich natural taste."
},
{

    icon: leaf,
    heading: "Our Signature Zero-Heat Process",
    description: "We extract our oils using the kohlu method, a traditional wooden press technique that applies slow, gentle pressure to release the oil without any heat.  This, combined with cold-pressed extraction, ensures that the nutrients, antioxidants, and rich flavors remain intact, making our oils as pure and wholesome as nature intended."
}, 
{
    icon: leaf,
    heading: "Naturally Preserved in Plastic-Free Packaging",
    description: "Once extracted, our oils are stored in premium tin containers—ensuring zero plastic waste while preserving freshness and preventing oxidation, thus extending its shelf life without compromising quality.  Our spill-proof rubber stopper adds convenience, making sure every pour is smooth, mess-free, and easy to handle."
},
]

export const socialReach = [twitter,instagram,youtube,facebook];