import { ProfileIntro } from "@/sections/HeroSection/components/ProfileIntro";
import { Bio } from "@/sections/HeroSection/components/Bio";
import { HeroActions } from "@/sections/HeroSection/components/HeroAction";

export const HeroSection = () => {
  return (
    <section className="box-border caret-transparent outline-[3px]">
      <ProfileIntro />
      <Bio />
      <HeroActions />
    </section>
  );
};
