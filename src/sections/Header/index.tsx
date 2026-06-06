import { useEffect, useState } from "react";
import { Brand } from "@/sections/Header/components/Brand";
import { TimeAndLocation } from "@/sections/Header/components/TimeAndLocation";

export const Header = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const shouldUseDark = savedTheme ? savedTheme === "dark" : prefersDark;

    document.documentElement.classList.toggle("dark", shouldUseDark);
    setIsDark(shouldUseDark);
    setIsMounted(true);
  }, []);

  const toggleTheme = () => {
    const nextThemeIsDark = !isDark;
    setIsDark(nextThemeIsDark);
    document.documentElement.classList.toggle("dark", nextThemeIsDark);
    window.localStorage.setItem("theme", nextThemeIsDark ? "dark" : "light");
  };

  return (
    <header className="items-center box-border caret-transparent flex justify-between outline-[3px] pt-8 pb-4">
      <Brand />
      <div className="items-center box-border caret-transparent gap-x-3 flex outline-[3px] gap-y-3">
        <label className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={isMounted ? isDark : false}
            onChange={toggleTheme}
            aria-label="Toggle color theme"
            className="sr-only"
          />
          <div className="relative inline-flex h-8 w-14 items-center rounded-full bg-zinc-300 transition-colors duration-300 dark:bg-zinc-700">
            <span
              className={`inline-block h-6 w-6 transform rounded-full bg-white shadow-lg transition-transform duration-300 ${
                isMounted && isDark ? "translate-x-1" : "translate-x-7"
              }`}
            />
            <span className="absolute left-1 top-1/2 -translate-y-1/2 text-base leading-none">🌙</span>
            <span className="absolute right-1 top-1/2 -translate-y-1/2 text-base leading-none">🌞</span>
          </div>
        </label>
        <TimeAndLocation />
      </div>
    </header>
  );
};