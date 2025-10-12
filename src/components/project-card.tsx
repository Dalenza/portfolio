import Image from "next/image";
import { Card, CardContent, CardFooter } from "./ui/card";
import Link from "next/link";
import { Button } from "./ui/button";
import { GithubIcon, GlobeIcon } from "lucide-react";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";
import { DATA } from "@/data/data";

interface ProjectCardProps {
  className?: string;
  project: (typeof DATA.projects)[number];
}
export function ProjectCard({ className, project }: ProjectCardProps) {
  return (
    <Card className={cn("py-0", className)}>
      <div className="relative w-full h-[160px] border-b-4 border-accent">
        <Image
          src={project.image}
          fill
          objectFit="cover"
          alt="project preview"
        />
      </div>
      <CardContent className="space-y-4">
        <h4 className="font-bold">{project.title}</h4>
        <p className="text-sm">{project.description}</p>
        <div className="flex items-center flex-wrap gap-1">
          {project.technologies.map((t) => (
            <Badge key={t} variant="secondary">
              {t}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="pb-6 gap-2 flex-wrap">
        {project.links.map((l) => (
          <Button key={l.href} size="sm" className="text-xs" asChild>
            <Link href={l.href}>
              {<l.icon />}
              {l.label}
            </Link>
          </Button>
        ))}
      </CardFooter>
    </Card>
  );
}
