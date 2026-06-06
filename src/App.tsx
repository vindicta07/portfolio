import { PageContainer } from "@/components/PageContainer";
import { FloatingDock } from "@/components/FloatingDock";
import { HiddenRoot } from "@/components/HiddenRoot";
import { RouteAnnouncer } from "@/components/RouteAnnouncer";
import bgChalkboard from "@/assets/bg-chalkboard.jpg";

export const App = () => {
  return (
    <div className="min-h-screen text-foreground relative" style={{ fontFamily: "'hibana', sans-serif" }}>
      {/* 1. Solid Background Color Layer (Fixed) */}
      <div className="fixed inset-0 z-0 bg-background" />

      {/* 2. Chalkboard/Charcoal Texture Layer (Fixed) */}
      <div 
        className="fixed inset-0 pointer-events-none z-10 bg-cover bg-center bg-no-repeat opacity-[0.25] mix-blend-multiply dark:mix-blend-normal transition-all duration-300"
        style={{ backgroundImage: `url(${bgChalkboard})` }}
      />

      {/* 3. Main Content Layer (Scrollable) */}
      <div className="relative z-20">
        <HiddenRoot />
        <RouteAnnouncer />
        <PageContainer />
        <FloatingDock />
      </div>
    </div>
  );
};