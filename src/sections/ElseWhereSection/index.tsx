import { SocialLink } from "@/sections/ElseWhereSection/components/SocialLink";

import gmailIcon from "@/assets/icons/gmail.svg";
import githubIcon from "@/assets/icons/github.svg";
import linkedinIcon from "@/assets/icons/linkedin.svg";
import leetcodeIcon from "@/assets/icons/leetcode.svg";

export const ElseWhereSection = () => {
  return (
    <section className="box-border caret-transparent outline-[3px]">
      <h2 className="text-5xl box-border caret-transparent tracking-[1.2px] leading-[48px] outline-[3px] font-meyrin">
        Elsewhere
      </h2>
      <div className="box-border caret-transparent gap-x-4 flex flex-wrap justify-center outline-[3px] gap-y-4 mt-6">
        <SocialLink
          href="mailto:yp290304@gmail.com"
          iconSrc={gmailIcon}
          label="Email"
        />
        <SocialLink
          href="https://github.com/vindicta07/"
          iconSrc={githubIcon}
          label="Github"
          invertInDarkMode={true}
        />
        <SocialLink
          href="https://www.linkedin.com/in/vindicta07"
          iconSrc={linkedinIcon}
          label="Linkedin"
        />
        <SocialLink
          href="https://leetcode.com/u/vindicta_07/"
          iconSrc={leetcodeIcon}
          label="LeetCode"
          invertInDarkMode={true}
        />
      </div>
    </section>
  );
};