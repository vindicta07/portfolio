import { useState, useEffect } from "react";
import { BookOpen, Star, GitCommitHorizontal, Flame } from "lucide-react";
import { StatCard } from "@/sections/StatsSection/components/StatCard";
import { TopLanguages, LanguageData } from "@/sections/StatsSection/components/TopLanguages";

const GITHUB_USERNAME = "vindicta07";
const CACHE_KEY = "github_stats_daily_v3";

// Use Vite proxy in dev to avoid browser extension / CORS blocking
const isDev = import.meta.env.DEV;
const GITHUB_API = isDev ? "/github-api" : "https://api.github.com";
const CONTRIBUTIONS_API = isDev ? "/contributions-api" : "https://github-contributions.vercel.app";

// GitHub Linguist colors — comprehensive list with custom overrides for visual distinction
const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",      // Vibrant Blue
  Python: "#e2b63c",          // Warm Python Gold/Yellow (custom override to avoid clashing with TS blue)
  JavaScript: "#f1e05a",      // Bright Yellow
  HTML: "#e34c26",            // Orange-Red
  CSS: "#563d7c",             // Purple
  SCSS: "#c6538c",            // Pinkish Purple
  "Jupyter Notebook": "#DA5B0B", // Dark Orange
  "C++": "#f34b7d",           // Red-Pink
  C: "#555555",               // Grey
  "C#": "#178600",            // Green
  Java: "#b07219",            // Brown
  Rust: "#dea584",            // Orange-Brown
  Go: "#00ADD8",              // Cyan
  Ruby: "#701516",            // Dark Red
  PHP: "#4F5D95",             // Slate Blue
  Swift: "#F05138",           // Orange
  Kotlin: "#A97BFF",          // Light Purple
  Dart: "#00B4AB",            // Teal
  Shell: "#89e051",           // Lime Green
  Solidity: "#AA6746",        // Light Brown
  Lua: "#000080",             // Navy Blue
  R: "#198CE7",               // Light Blue
  Dockerfile: "#2496ed",      // Docker Cyan
  Makefile: "#427819",        // Dark Green
  Vue: "#41b883",             // Green
  Svelte: "#ff3e00",          // Red-Orange
  Astro: "#bc52ee",           // Purple-Pink
  MDX: "#fcb32c",             // Gold-Orange
};

// Generates a unique, consistent, and vibrant color from a language name if not pre-defined
const getLanguageColor = (name: string): string => {
  if (LANGUAGE_COLORS[name]) {
    return LANGUAGE_COLORS[name];
  }
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const hue = Math.abs(hash) % 360;
  return `hsl(${hue}, 70%, 55%)`;
};

// --- Cached & Default data shape ---
interface CachedStats {
  publicRepos: number;
  totalStars: number;
  contributions: number;
  streak: number;
  languages: LanguageData[];
  expiresAt: number; // timestamp of next midnight
}

// Actual data fetched from GitHub API as a fallback when browser policy blocks fetches
const DEFAULT_STATS: CachedStats = {
  publicRepos: 13,
  totalStars: 3,
  contributions: 36,
  streak: 0,
  languages: [
    { name: "Python", percentage: 67.8, color: getLanguageColor("Python") },
    { name: "TypeScript", percentage: 28.4, color: getLanguageColor("TypeScript") },
    { name: "C++", percentage: 2.3, color: getLanguageColor("C++") },
    { name: "Shell", percentage: 0.6, color: getLanguageColor("Shell") },
    { name: "CSS", percentage: 0.6, color: getLanguageColor("CSS") },
    { name: "Dockerfile", percentage: 0.4, color: getLanguageColor("Dockerfile") },
    { name: "JavaScript", percentage: 0.1, color: getLanguageColor("JavaScript") }
  ],
  expiresAt: 0,
};

// --- Helper functions ---

const getNextMidnight = () => {
  const now = new Date();
  const next = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0, 0);
  return next.getTime();
};

const getTodayStr = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
};

const getYesterdayStr = () => {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
};

const calculateCurrentStreak = (contributions: { date: string; count: number }[]) => {
  const todayStr = getTodayStr();
  const yesterdayStr = getYesterdayStr();
  const sorted = contributions.filter((c) => c.date <= todayStr).sort((a, b) => b.date.localeCompare(a.date));
  if (sorted.length === 0) return 0;
  const idx = sorted.findIndex((c) => c.count > 0);
  if (idx === -1) return 0;
  if (sorted[idx].date !== todayStr && sorted[idx].date !== yesterdayStr) return 0;
  let streak = 0;
  for (let i = idx; i < sorted.length && sorted[i].count > 0; i++) streak++;
  return streak;
};

const calculateLastYearContributions = (contributions: { date: string; count: number }[]) => {
  const today = new Date();
  const oneYearAgo = new Date();
  oneYearAgo.setDate(today.getDate() - 365);
  const from = oneYearAgo.toISOString().split("T")[0];
  const to = today.toISOString().split("T")[0];
  return contributions.filter((c) => c.date >= from && c.date <= to).reduce((s, c) => s + c.count, 0);
};

// Fetch the actual languages breakdown (by bytes) for every non-fork repo
const fetchAllLanguages = async (repos: any[]): Promise<LanguageData[]> => {
  const nonForks = repos.filter((r: any) => !r.fork && r.size > 0);
  const bytesPerLang: Record<string, number> = {};

  // Fetch languages for each repo in parallel (batched)
  const langResults = await Promise.all(
    nonForks.map((repo: any) =>
      fetch(`${GITHUB_API}/repos/${GITHUB_USERNAME}/${repo.name}/languages`)
        .then((r) => (r.ok ? r.json() : {}))
        .catch(() => ({}))
    )
  );

  for (const langs of langResults) {
    for (const [lang, bytes] of Object.entries(langs)) {
      bytesPerLang[lang] = (bytesPerLang[lang] || 0) + (bytes as number);
    }
  }

  const totalBytes = Object.values(bytesPerLang).reduce((s, b) => s + b, 0);
  if (totalBytes === 0) return [];

  return Object.entries(bytesPerLang)
    .map(([name, bytes]) => ({
      name,
      percentage: (bytes / totalBytes) * 100,
      color: getLanguageColor(name),
    }))
    .sort((a, b) => b.percentage - a.percentage);
};

// --- Fetcher that paginates all repos ---

const fetchAllRepos = async (username: string) => {
  const all: any[] = [];
  let page = 1;
  while (true) {
    const res = await fetch(
      `${GITHUB_API}/users/${username}/repos?per_page=100&page=${page}&sort=pushed`
    );
    if (!res.ok) throw new Error(`GitHub repos API returned ${res.status}`);
    const data = await res.json();
    if (!Array.isArray(data) || data.length === 0) break;
    all.push(...data);
    if (data.length < 100) break;
    page++;
  }
  return all;
};

// --- Component ---

export const StatsSection = () => {
  const [publicRepos, setPublicRepos] = useState<number | null>(DEFAULT_STATS.publicRepos);
  const [totalStars, setTotalStars] = useState<number | null>(DEFAULT_STATS.totalStars);
  const [contributions, setContributions] = useState<number | null>(DEFAULT_STATS.contributions);
  const [streak, setStreak] = useState<number | null>(DEFAULT_STATS.streak);
  const [languages, setLanguages] = useState<LanguageData[]>(DEFAULT_STATS.languages);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let cancelled = false;

    // Clean up old cache keys from previous versions
    try {
      localStorage.removeItem(`github_stats_${GITHUB_USERNAME}`);
      localStorage.removeItem("github_stats_daily_v2");
    } catch {}

    const applyStats = (data: CachedStats) => {
      setPublicRepos(data.publicRepos);
      setTotalStars(data.totalStars);
      setContributions(data.contributions);
      setStreak(data.streak);
      setLanguages(data.languages);
    };

    const loadStats = async () => {
      // 1. Check daily cache — only fetch once per day (expires at midnight)
      try {
        const raw = localStorage.getItem(CACHE_KEY);
        if (raw) {
          const cached: CachedStats = JSON.parse(raw);
          if (cached.expiresAt > Date.now() && cached.languages && cached.languages.length > 0) {
            applyStats(cached);
            setLoading(false);
            return; // Cache is valid until midnight, skip fetch
          }
        }
      } catch {}

      // 2. Fetch fresh data from GitHub
      setLoading(true);
      try {
        const [userRes, allRepos, contribsRes] = await Promise.all([
          fetch(`${GITHUB_API}/users/${GITHUB_USERNAME}`).then((r) => {
            if (!r.ok) throw new Error(`User API: ${r.status}`);
            return r.json();
          }),
          fetchAllRepos(GITHUB_USERNAME),
          fetch(`${CONTRIBUTIONS_API}/api/v1/${GITHUB_USERNAME}`).then((r) => {
            if (!r.ok) throw new Error(`Contributions API: ${r.status}`);
            return r.json();
          }),
        ]);

        if (cancelled) return;

        const stats: CachedStats = {
          publicRepos: userRes.public_repos ?? 0,
          totalStars: allRepos
            .filter((r: any) => !r.fork)
            .reduce((s: number, r: any) => s + (r.stargazers_count || 0), 0),
          contributions: calculateLastYearContributions(contribsRes.contributions || []),
          streak: calculateCurrentStreak(contribsRes.contributions || []),
          languages: await fetchAllLanguages(allRepos),
          expiresAt: getNextMidnight(),
        };

        applyStats(stats);

        // Save to cache — expires at next midnight
        try { localStorage.setItem(CACHE_KEY, JSON.stringify(stats)); } catch {}
      } catch (err: any) {
        // Silently catch and log to console - do not break the UI or show error, fallback is already active
        console.warn("GitHub live stats fetch failed (using fallback/default stats):", err.message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    loadStats();
    return () => { cancelled = true; };
  }, []);

  return (
    <section className="box-border caret-transparent outline-[3px]">
      <div className="flex items-center gap-x-3 flex-wrap">
        <h2 className="text-5xl box-border caret-transparent tracking-[1.2px] leading-[48px] outline-[3px] font-meyrin">
          Stats
        </h2>
      </div>
      <p className="text-xs box-border caret-transparent leading-4 opacity-35 outline-[3px] mt-2 mb-8">
        My coding journey in numbers
      </p>
      <div className="box-border caret-transparent outline-[3px] w-full">
        <div className="box-border caret-transparent gap-x-3 grid grid-cols-[repeat(2,minmax(0px,1fr))] outline-[3px] gap-y-3 mb-6 md:grid-cols-[repeat(4,minmax(0px,1fr))]">
          <StatCard
            icon={<BookOpen className="h-full w-full text-blue-500" />}
            value={publicRepos !== null ? String(publicRepos) : "..."}
            label="Public repos"
          />
          <StatCard
            icon={<Star className="h-full w-full text-amber-500" />}
            value={totalStars !== null ? String(totalStars) : "..."}
            label="Total stars"
          />
          <StatCard
            icon={<GitCommitHorizontal className="h-full w-full text-green-500" />}
            value={contributions !== null ? String(contributions) : "..."}
            label="Contributions (1yr)"
          />
          <StatCard
            icon={<Flame className="h-full w-full text-orange-500" />}
            value={streak !== null ? (streak > 0 ? `${streak} d` : "-") : "..."}
            label="Current streak"
          />
        </div>
        <TopLanguages languages={languages} loading={loading} />
      </div>
    </section>
  );
};