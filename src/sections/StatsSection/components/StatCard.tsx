import { ReactNode } from "react";

export type StatCardProps = {
  icon: ReactNode;
  value: string;
  label: string;
};

export const StatCard = (props: StatCardProps) => {
  return (
    <div className="items-center bg-white/70 dark:bg-black/30 box-border caret-transparent gap-x-1.5 flex flex-col justify-center min-h-[auto] min-w-[auto] outline-[3px] gap-y-1.5 border border-zinc-300 dark:border-zinc-700 p-3 rounded-lg border-solid transition-colors duration-300 md:gap-x-2 md:gap-y-2 md:p-4">
      <div className="h-5 w-5 md:h-6 md:w-6">
        {props.icon}
      </div>
      <div className="text-xl font-bold box-border caret-transparent leading-7 min-h-[auto] min-w-[auto] outline-[3px] md:text-2xl md:leading-8">
        {props.value}
      </div>
      <div className="text-[10px] text-zinc-600 dark:text-zinc-300 box-border caret-transparent leading-[12.5px] min-h-[auto] min-w-[auto] outline-[3px] text-center transition-colors duration-300 md:text-xs md:leading-[15px]">
        {props.label}
      </div>
    </div>
  );
};