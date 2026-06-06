export type ProjectCardProps = {
  ariaLabel: string;
  imageUrl: string;
  imageAlt: string;
  title: string;
  description: string;
  onClick?: () => void;
};

export const ProjectCard = (props: ProjectCardProps) => {
  return (
    <button
      aria-label={props.ariaLabel}
      onClick={props.onClick}
      className="relative bg-white/90 dark:bg-zinc-900/80 caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] text-center border border-zinc-300 dark:border-zinc-700 overflow-hidden p-0 rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
    >
      <img
        src={props.imageUrl}
        alt={props.imageAlt}
        className="box-border caret-transparent h-48 max-w-full min-h-[auto] min-w-[auto] object-cover outline-[3px] w-full"
      />
      <div className="items-start box-border caret-transparent flex flex-col grow justify-center min-h-[auto] min-w-[auto] outline-[3px] px-3 py-2">
        <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] text-left">
          <div className="text-zinc-900 dark:text-zinc-100 box-border caret-transparent outline-[3px] font-healtheweb transition-colors duration-300">
            {props.title}
          </div>
          <div className="text-zinc-600 dark:text-zinc-300 text-xs box-border caret-transparent leading-4 outline-[3px] mt-1 transition-colors duration-300">
            {props.description}
          </div>
        </div>
      </div>
    </button>
  );
};