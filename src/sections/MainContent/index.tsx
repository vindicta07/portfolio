import { HeroSection } from "@/sections/HeroSection";
import { SectionDivider } from "@/components/SectionDivider";
import { ElseWhereSection } from "@/sections/ElseWhereSection";
import { SkillsSection } from "@/sections/SkillsSection";
import { ProjectSection } from "@/sections/ProjectSection";
import { StatsSection } from "@/sections/StatsSection";

export const MainContent = () => {
  return (
    <main className="box-border caret-transparent flex flex-col justify-between min-h-[1000px] outline-[3px]">
      <div className="box-border caret-transparent blur-0 min-h-[auto] min-w-[auto] outline-[3px]">
        <HeroSection />
      </div>
      <SectionDivider />
      <div className="box-border caret-transparent blur-0 min-h-[auto] min-w-[auto] outline-[3px]">
        <ElseWhereSection />
      </div>
      <SectionDivider />
      <div className="box-border caret-transparent blur-0 min-h-[auto] min-w-[auto] outline-[3px]">
        <SkillsSection />
      </div>
      <SectionDivider />
      <div className="box-border caret-transparent blur-0 min-h-[auto] min-w-[auto] outline-[3px]">
        <ProjectSection />
      </div>
      <SectionDivider />
      <div className="box-border caret-transparent blur-0 min-h-[auto] min-w-[auto] outline-[3px]">
        <StatsSection />
      </div>
    </main>
  );
};