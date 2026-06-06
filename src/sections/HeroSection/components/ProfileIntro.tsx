import profilePic from "@/assets/profile.jpeg";

export const ProfileIntro = () => {
  return (
    <div className="items-center box-border caret-transparent gap-x-8 flex outline-[3px] gap-y-8 text-left mt-12 pl-0 pb-0 md:mt-10 md:pb-5">
      <span className="relative shadow-[rgba(131,103,174,0.7)_0px_0px_45px_5px] box-border caret-transparent flex shrink-0 h-24 min-h-[auto] min-w-[auto] outline-[3px] w-24 overflow-hidden rounded-[3.35544e+07px] md:h-32 md:w-32">
        <img
          alt="Yash Pathak"
          src={profilePic}
          className="aspect-square box-border caret-transparent h-full max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full"
        />
      </span>
      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] flex-1">
        <h1 className="text-lg md:text-2xl box-border caret-transparent tracking-[0.6px] leading-8 outline-[3px] mb-1 font-meyrin text-zinc-600 dark:text-zinc-400">
          My name&#39;s
        </h1>
        <div className="text-[36px] font-bold box-border caret-transparent leading-[1.1] max-w-5xl outline-[3px] font-healtheweb md:text-[66.6667px] md:leading-[1.1] text-zinc-900 dark:text-zinc-100">
          Yash Pathak
        </div>
      </div>
    </div>
  );
};