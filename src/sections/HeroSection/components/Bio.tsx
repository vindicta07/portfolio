import { useState, useEffect } from "react";

const Digit = ({ char }: { char: string }) => {
  const isDigit = char >= "0" && char <= "9";
  if (!isDigit) {
    return <span className="inline-block">{char}</span>;
  }

  const val = parseInt(char, 10);

  return (
    <span className="inline-block overflow-hidden relative h-[1.2em] w-[0.6em] align-middle">
      <span
        className="absolute flex flex-col left-0 right-0 transition-transform duration-200 ease-out"
        style={{
          transform: `translateY(-${val * 10}%)`,
          height: "12em",
        }}
      >
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
          <span key={n} className="h-[1.2em] flex items-center justify-center leading-none select-none">
            {n}
          </span>
        ))}
      </span>
    </span>
  );
};

export const Bio = () => {
  const [age, setAge] = useState("");

  useEffect(() => {
    // Birth date set to March 29, 2004
    const BIRTH_DATE = new Date("2004-03-29T00:00:00Z");

    const updateAge = () => {
      const diffMs = Date.now() - BIRTH_DATE.getTime();
      const ageYears = diffMs / (1000 * 60 * 60 * 24 * 365.2421897);
      setAge(ageYears.toFixed(8));
    };

    updateAge(); // initial run
    const interval = setInterval(updateAge, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-zinc-700 dark:text-zinc-300 text-base leading-relaxed space-y-4 my-6 text-left transition-colors duration-300 font-healtheweb md:text-lg">
      <p className="box-border caret-transparent outline-[3px]">
        I&#39;m a{" "}
        <span className="font-mono text-zinc-900 dark:text-zinc-100 font-bold tracking-tight inline-flex items-center align-middle">
          {age ? (
            age.split("").map((char, idx) => <Digit key={idx} char={char} />)
          ) : (
            "22.18919056"
          )}
        </span>
        -year-old who loves making products, focused on building AI-native products and interaction-first
        systems. I have a deep knowledge of product design—whether it is software or electronics. I build
        fast, tear things down even faster, and repeat until it feels inevitable.
      </p>
      <p className="box-border caret-transparent outline-[3px]">
        When I&#39;m not deep in code or concepts, I enjoy various recreational activities, diving into AI
        research, reading ML papers, and training models. Sometimes I sleep, though it&#39;s usually just
        the buffer between inputs.
      </p>
      <p className="box-border caret-transparent outline-[3px]">
        Most of what I chase outside work still ends up feeding the same core loop:{" "}
        <strong className="font-bold text-zinc-900 dark:text-zinc-100">
          learn, feel, reflect, repeat.
        </strong>
      </p>
    </div>
  );
};
