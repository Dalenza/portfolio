import { DATA } from "@/data/data";
import { ProjectCard } from "./project-card";

export function Projects() {
  return (
    <div className="grid grid-cols-1 gap-4 xl:grid-cols-6">
      {DATA.projects.map((project) => {
        return (
          <div key={project.title} className={`xl:col-span-3`}>
            <ProjectCard project={project} className="h-full" />
          </div>
        );
      })}
    </div>
  );
}
