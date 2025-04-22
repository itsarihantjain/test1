import { Carousel } from "@/atoms/ carousel";
import { AboutUsSection } from "@/components/about-us";
import { Benefits } from "@/components/benefits-section";
import { FeaturedProducts } from "@/components/featured-section";
import { NaturalSection } from "@/components/natural-section";
import { StorySection } from "@/components/story-section/storySection";
import { carouselData } from "@/constant/constant";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
      <Carousel carouselData={carouselData} />
      <Benefits />
      <NaturalSection />
      <StorySection />
      <FeaturedProducts />
      <AboutUsSection />
    </div>
  );
};

export default Home;
