import { Clock, MapPin } from "lucide-react";
import { useEffect, useState } from "react";

export const TimeAndLocation = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = time.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone: "Asia/Kolkata",
  });

  return (
    <div className="text-zinc-600 dark:text-zinc-400 items-end box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] opacity-80 dark:opacity-90 outline-[3px] transition-colors duration-300">
      <div className="items-center box-border caret-transparent gap-x-2 flex min-h-[auto] min-w-[auto] outline-[3px] gap-y-2">
        <Clock className="h-3 w-3" />
        <span className="tabular-nums leading-4 font-healtheweb">
          {hours}
        </span>
      </div>
      <div className="items-center box-border caret-transparent gap-x-2 flex min-h-[auto] min-w-[auto] outline-[3px] gap-y-2 pt-1 font-healtheweb">
        <MapPin className="h-3 w-3" />
        Mumbai, India
      </div>
    </div>
  );
};