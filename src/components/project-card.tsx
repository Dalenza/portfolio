import Image from "next/image";
import { Card, CardContent, CardFooter } from "./ui/card";
import Link from "next/link";
import { Button } from "./ui/button";
import { GithubIcon, GlobeIcon } from "lucide-react";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";

export function ProjectCard({ className }: { className?: string }) {
  return (
    <Card className={cn("py-0", className)}>
      <div className="relative w-full h-[160px] border-b-4 border-accent">
        <Image
          src="/profile.jpg"
          fill
          objectFit="cover"
          alt="project preview"
        />
      </div>
      <CardContent className="space-y-4">
        <h4 className="font-bold">Project Title</h4>
        <p className="text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit,
          autem! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="flex items-center flex-wrap gap-1">
          <Badge variant="secondary">Nextjs</Badge>
          <Badge variant="secondary">Tailwindcss</Badge>
          <Badge variant="secondary">Prisma</Badge>
          <Badge variant="secondary">Postgresql</Badge>
          <Badge variant="secondary">Shadcn/ui</Badge>
          <Badge variant="secondary">Docker</Badge>
        </div>
      </CardContent>
      <CardFooter className="pb-6 gap-2 flex-wrap">
        <Button size="sm" className="text-xs" asChild>
          <Link href="#">
            <GlobeIcon />
            Website
          </Link>
        </Button>
        <Button size="sm" className="text-xs" asChild>
          <Link href="#">
            <GithubIcon />
            Source
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
