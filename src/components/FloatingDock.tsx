import { Home, Mail } from "lucide-react";

export const FloatingDock = () => {
  return (
    <div className="fixed box-border caret-transparent max-w-full outline-[3px] z-50 left-2/4 bottom-4" style={{ transform: "translateX(-50%)" }}>
      <div className="items-end box-border caret-transparent flex h-16 max-w-full outline-[3px] overflow-auto mx-2">
        <div
          role="toolbar"
          aria-label="Application dock"
          className="items-end bg-white/85 dark:bg-zinc-900/85 box-border caret-transparent gap-x-4 flex h-16 min-h-[auto] min-w-[auto] outline-[3px] gap-y-4 w-fit mx-auto pb-3 px-4 border border-zinc-300 dark:border-zinc-700 rounded-2xl transition-colors duration-300"
        >
          <a
            href="#"
            role="button"
            className="relative items-center aspect-square bg-zinc-100 dark:bg-zinc-800 box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-10 rounded-[3.35544e+07px] transition-colors duration-300"
          >
            <div className="items-center box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-5 text-zinc-700 dark:text-zinc-200">
              <Home className="h-full w-full" />
            </div>
          </a>
          <a
            href="mailto:yp290304@gmail.com"
            role="button"
            className="relative items-center aspect-square bg-zinc-100 dark:bg-zinc-800 box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-10 rounded-[3.35544e+07px] transition-colors duration-300"
          >
            <div className="items-center box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-5 text-zinc-700 dark:text-zinc-200">
              <Mail className="h-full w-full" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};