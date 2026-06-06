import { ArrowUpRight, FileDown } from "lucide-react";
import resumePdf from "@/assets/yp_resume.pdf";

export const HeroActions = () => {
  return (
    <div className="items-center box-border caret-transparent gap-x-4 flex justify-center outline-[3px] gap-y-4 mt-8">
      <a
        href="https://www.linkedin.com/in/vindicta07"
        className="text-xs font-medium items-center bg-white/80 dark:bg-zinc-900/80 box-border caret-transparent gap-x-2 inline-flex justify-center leading-4 min-h-[auto] min-w-[auto] outline-[3px] text-zinc-800 dark:text-zinc-100 border border-zinc-300 dark:border-zinc-700 px-3 py-2 rounded-[3.35544e+07px] font-healtheweb transition-colors duration-300 md:text-sm md:leading-5 md:px-4"
      >
        <span className="text-base leading-none">✨</span>
        <span className="box-border inline outline-[3px] md:hidden">
          Hire me
        </span>
        <span className="box-border hidden outline-[3px] md:inline">
          Available for opportunities
        </span>
        <ArrowUpRight className="h-3.5 w-3.5" />
      </a>
      <a
        href={resumePdf}
        download="yp_resume.pdf"
        className="text-xs items-center bg-white/70 dark:bg-zinc-900/70 box-border caret-transparent gap-x-1.5 inline-flex leading-4 min-h-[auto] min-w-[auto] outline-[3px] text-zinc-700 dark:text-zinc-200 border border-zinc-300 dark:border-zinc-700 px-3 py-2 rounded-[3.35544e+07px] font-healtheweb transition-colors duration-300 md:text-[13.3333px] md:leading-[17.7778px] md:px-4 md:gap-x-2"
      >
        <FileDown className="h-3 w-3" />
        <span className="box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] md:hidden md:min-h-0 md:min-w-0">
          Resume
        </span>
        <span className="box-border caret-transparent hidden min-h-0 min-w-0 outline-[3px] md:block md:min-h-[auto] md:min-w-[auto]">
          Download CV
        </span>
      </a>
    </div>
  );
};