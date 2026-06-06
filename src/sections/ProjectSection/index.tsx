import { useState } from "react";
import { ProjectCard } from "@/sections/ProjectSection/components/ProjectCard";
import { ProjectModal } from "@/sections/ProjectSection/components/ProjectModal";
import { projectsData, Project } from "@/data/projects";

export const ProjectSection = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [clickedCardRect, setClickedCardRect] = useState<DOMRect | null>(null);

  return (
    <section className="box-border caret-transparent outline-[3px]">
      <h2 className="text-5xl box-border caret-transparent tracking-[1.2px] leading-[48px] outline-[3px] mb-8 font-meyrin">
        Projects
      </h2>
      <div className="box-border caret-transparent gap-x-8 grid grid-cols-[repeat(1,minmax(0px,1fr))] outline-[3px] gap-y-8 md:grid-cols-[repeat(2,minmax(0px,1fr))]">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            ariaLabel={`Open details for ${project.title}`}
            imageUrl={project.imageUrl}
            imageAlt={project.imageAlt}
            title={project.title}
            description={project.description}
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              setClickedCardRect(rect);
              setActiveProject(project);
            }}
          />
        ))}
      </div>

      <ProjectModal
        project={activeProject}
        cardRect={clickedCardRect}
        onClose={() => {
          setActiveProject(null);
          setClickedCardRect(null);
        }}
      />
    </section>
  );
};