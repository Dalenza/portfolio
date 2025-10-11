import { ProjectCard } from "./project-card";

export function Projects() {
  return (
    <div className="grid grid-cols-1 gap-4 xl:grid-cols-4 xl:grid-rows-2">
      <div className="xl:col-span-2">
        <ProjectCard className="h-full" />
      </div>
      <div className="xl:col-span-2">
        <ProjectCard className="h-full" />
      </div>
      <div className="xl:col-span-2">
        <ProjectCard className="h-full" />
      </div>
      <div className="xl:col-span-2">
        <ProjectCard className="h-full" />
      </div>
    </div>
  );
}
