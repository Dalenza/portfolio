import { DATA } from "@/data/data";
import { ProjectCard } from "./project-card";

export function Projects() {
  return (
    <div className="grid grid-cols-1 gap-4 xl:grid-cols-6">
      {DATA.projects.map((project, i) => {
        const span: Record<number, number> = {
          0: 3,
          1: 3,
          2: 3,
          3: 3,
        };
        return (
          <div key={project.title} className={`xl:col-span-${span[i]}`}>
            <ProjectCard project={project} className="h-full" />
          </div>
        );
      })}
    </div>
  );
}
