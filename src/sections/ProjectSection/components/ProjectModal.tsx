import { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project | null;
  cardRect: DOMRect | null;
  onClose: () => void;
}

export const ProjectModal = ({ project, cardRect, onClose }: ProjectModalProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Sync rendering state with project prop
  useEffect(() => {
    if (project && cardRect) {
      setShouldRender(true);
      // Trigger expansion animation in the next frame
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsExpanded(true);
        });
      });
    }
  }, [project, cardRect]);

  useEffect(() => {
    if (!shouldRender) return;

    // Prevent body scroll when modal is active
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Handle Escape key close
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [shouldRender]);

  if (!shouldRender || !project || !cardRect) return null;

  const handleClose = () => {
    setIsExpanded(false);
  };

  const handleTransitionEnd = (e: React.TransitionEvent) => {
    // Only unmount when collapsing and the container boundary transition completes
    if (e.target === containerRef.current && !isExpanded) {
      setShouldRender(false);
      onClose();
    }
  };

  // Determine container dimensions and styles based on state
  const containerStyle: React.CSSProperties = isExpanded
    ? {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "min(500px, 92vw)",
        height: "min(680px, 86vh)",
        borderRadius: "24px",
      }
    : {
        position: "fixed",
        top: `${cardRect.top}px`,
        left: `${cardRect.left}px`,
        width: `${cardRect.width}px`,
        height: `${cardRect.height}px`,
        transform: "translate(0, 0)",
        borderRadius: "12px",
      };

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none">
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/60 dark:bg-black/85 backdrop-blur-md transition-opacity duration-300 pointer-events-auto cursor-pointer ${
          isExpanded ? "opacity-100" : "opacity-0"
        }`}
        onClick={handleClose}
      />

      {/* Modal Container */}
      <div
        ref={containerRef}
        onTransitionEnd={handleTransitionEnd}
        style={containerStyle}
        className="bg-white dark:bg-[#121214] border border-zinc-300 dark:border-zinc-800/80 shadow-2xl z-10 flex flex-col overflow-hidden pointer-events-auto transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] font-healtheweb"
      >
        {/* Showcase Image Section */}
        <div 
          className="relative w-full bg-zinc-100 dark:bg-zinc-950 overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)]"
          style={{ height: isExpanded ? "45%" : "100%" }}
        >
          {isExpanded && (
            <button
              onClick={handleClose}
              aria-label="Close modal"
              className="absolute top-4 right-4 z-20 text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white bg-black/10 dark:bg-black/50 hover:bg-black/20 dark:hover:bg-black/80 p-1.5 rounded-full transition-all duration-200 focus:outline-none"
            >
              <X className="h-5 w-5" />
            </button>
          )}

          <img
            src={project.imageUrl}
            alt={project.imageAlt}
            className="w-full h-full object-cover select-none"
          />
        </div>

        {/* Content Section (Fades in/out) */}
        <div 
          className={`flex-1 p-6 overflow-y-auto flex flex-col text-left transition-opacity duration-200 ${
            isExpanded ? "opacity-100 delay-100" : "opacity-0 pointer-events-none"
          }`}
        >
          {/* Title */}
          <h3 className="text-2xl font-bold font-meyrin text-zinc-900 dark:text-white mb-2 tracking-wide leading-tight">
            {project.title}
          </h3>

          {/* Short Subtitle */}
          <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4 leading-relaxed font-healtheweb">
            {project.description}
          </p>

          {/* Detailed Paragraph */}
          <p className="text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed mb-6 font-healtheweb whitespace-pre-line font-normal opacity-90">
            {project.longDescription}
          </p>

          {/* Centered Underlined Links */}
          <div className="mt-auto flex flex-col items-center justify-center gap-3 pt-5 border-t border-zinc-200 dark:border-zinc-900 font-healtheweb">
            {project.projectUrl && (
              <a
                href={project.projectUrl}
                target="_blank"
                rel="noreferrer"
                className="text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-200 transition-colors duration-200 underline text-sm tracking-wide py-0.5"
              >
                Project Link
              </a>
            )}

            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-200 transition-colors duration-200 underline text-sm tracking-wide py-0.5"
              >
                Repo Link
              </a>
            )}

            {project.reportUrl && (
              <a
                href={project.reportUrl}
                target="_blank"
                rel="noreferrer"
                className="text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-200 transition-colors duration-200 underline text-sm tracking-wide py-0.5"
              >
                View Report (PDF)
              </a>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};
