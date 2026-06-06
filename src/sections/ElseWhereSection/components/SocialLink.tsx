export type SocialLinkProps = {
  href: string;
  iconSrc: string;
  label: string;
  invertInDarkMode?: boolean;
};

export const SocialLink = (props: SocialLinkProps) => {
  return (
    <a
      href={props.href}
      className="text-xs bg-white/70 dark:bg-zinc-900/70 box-border caret-transparent block leading-4 min-h-[auto] min-w-[auto] outline-[3px] border border-zinc-300 dark:border-zinc-700 px-3 py-2 rounded-[3.35544e+07px] border-solid transition-colors duration-300 md:text-[13.3333px] md:leading-[17.7778px] md:px-4"
    >
      <span className="text-zinc-700 dark:text-zinc-200 text-[13.3333px] items-center box-border caret-transparent gap-x-1 flex leading-[17.7778px] max-w-md outline-[3px] gap-y-1 mx-auto font-healtheweb md:gap-x-2 md:gap-y-2 transition-colors duration-300">
        <img
          src={props.iconSrc}
          alt="Icon"
          className={`box-border caret-transparent h-3.5 outline-[3px] w-3.5 ${props.invertInDarkMode ? "dark:invert" : ""}`}
        />
        <span className="box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px]">
          {props.label}
        </span>
      </span>
    </a>
  );
};