import { Header } from "@/sections/Header";
import { MainContent } from "@/sections/MainContent";
import { Footer } from "@/sections/Footer";

export const PageContainer = () => {
  return (
    <div className="box-border caret-transparent max-w-5xl outline-[3px] mx-auto px-4">
      <div className="box-border caret-transparent blur-0 outline-[3px]">
        <Header />
      </div>
      <MainContent />
      <Footer />
    </div>
  );
};