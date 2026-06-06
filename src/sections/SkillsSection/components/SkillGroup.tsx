export type SkillGroupProps = {
  title: string;
  subtitle?: string;
  skills: {
    iconUrl: string;
    name: string;
    invertInDarkMode?: boolean;
  }[];
};

export const SkillGroup = (props: SkillGroupProps) => {
  return (
    <div className="box-border caret-transparent outline-[3px] mt-4">
      <h3 className="text-xl text-zinc-800 dark:text-zinc-100 box-border caret-transparent leading-7 opacity-80 dark:opacity-90 outline-[3px] font-healtheweb transition-colors duration-300">
        {props.title}
      </h3>
      {props.subtitle ? (
        <h3 className="text-xs text-zinc-500 dark:text-zinc-400 box-border caret-transparent leading-4 opacity-80 outline-[3px] transition-colors duration-300">
          {props.subtitle}
        </h3>
      ) : null}
      <div className="box-border caret-transparent gap-x-2 flex flex-wrap outline-[3px] gap-y-2 mt-2">
        {props.skills.map((skill) => (
          <div
            className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]"
            key={`${skill.iconUrl}-${skill.name}`}
          >
            <span className="text-zinc-700 dark:text-zinc-300 text-xs font-medium items-center bg-white/70 dark:bg-black/30 box-border caret-transparent gap-x-1 inline-flex shrink-0 justify-center leading-4 outline-[3px] gap-y-1 text-nowrap w-fit border border-zinc-300 dark:border-zinc-700 overflow-hidden px-3 py-2 rounded-md border-solid transition-colors duration-300">
              <img
                src={skill.iconUrl}
                alt="Icon"
                className={`box-border caret-transparent h-3 outline-[3px] pointer-events-none text-nowrap w-3 ${skill.invertInDarkMode ? "dark:invert" : ""}`}
              />
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};