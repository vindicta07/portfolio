export type LanguageData = {
  name: string;
  percentage: number;
  color: string;
};

export type TopLanguagesProps = {
  languages: LanguageData[];
  loading?: boolean;
};

export const TopLanguages = ({ languages, loading }: TopLanguagesProps) => {
  return (
    <div className="bg-white/70 dark:bg-black/30 box-border caret-transparent outline-[3px] w-full border border-zinc-300 dark:border-zinc-700 p-4 rounded-lg border-solid transition-colors duration-300 md:p-6">
      <h3 className="text-base text-zinc-800 dark:text-zinc-100 box-border caret-transparent leading-6 outline-[3px] mb-3 transition-colors duration-300 md:text-lg md:leading-7 md:mb-4">
        Top Languages
      </h3>
      <div className="box-border caret-transparent outline-[3px] flex flex-col gap-y-2 md:gap-y-3">
        {loading ? (
          // Loading Skeleton
          Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="items-center box-border caret-transparent gap-x-2 flex min-h-7 outline-[3px] animate-pulse">
              <div className="bg-zinc-300 dark:bg-zinc-700 shrink-0 h-3 w-3 rounded-full"></div>
              <div className="bg-zinc-300 dark:bg-zinc-700 h-4 w-16 md:w-24 rounded"></div>
              <div className="relative bg-zinc-200 dark:bg-zinc-800 basis-[0%] grow h-5 md:h-6 rounded-[3.35544e+07px]"></div>
              <div className="bg-zinc-300 dark:bg-zinc-700 h-4 w-10 md:w-12 rounded"></div>
            </div>
          ))
        ) : languages.length === 0 ? (
          <div className="text-sm text-zinc-500 text-center py-4">No language data found</div>
        ) : (
          languages.map((lang) => (
            <div key={lang.name} className="items-center box-border caret-transparent gap-x-2 flex min-h-7 outline-[3px] md:gap-x-3 md:min-h-8">
              <div
                className="shrink-0 h-3 w-3 rounded-full transition-colors duration-300"
                style={{ backgroundColor: lang.color }}
              ></div>
              <div className="text-xs box-border caret-transparent shrink-0 leading-[15px] min-h-[auto] min-w-[auto] outline-[3px] w-16 md:text-sm md:leading-[17.5px] md:w-24 truncate">
                {lang.name}
              </div>
              <div className="relative bg-zinc-200 dark:bg-zinc-800 box-border caret-transparent basis-[0%] grow h-5 min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden rounded-[3.35544e+07px] transition-colors duration-300 md:h-6">
                <div
                  className="box-border caret-transparent h-full outline-[3px] rounded-[3.35544e+07px] transition-all duration-500"
                  style={{
                    width: `${lang.percentage}%`,
                    background: `linear-gradient(90deg, ${lang.color}dd, ${lang.color})`,
                  }}
                ></div>
              </div>
              <div className="text-xs box-border caret-transparent shrink-0 leading-4 min-h-[auto] min-w-[auto] outline-[3px] text-right w-10 md:text-sm md:leading-5 md:w-12">
                {lang.percentage.toFixed(1)}%
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};