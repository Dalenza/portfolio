import { Education } from "@/components/education";
import { Navbar } from "@/components/navbar";
import { Projects } from "@/components/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { WorkExperience } from "@/components/work-experience";
import { DATA } from "@/data/data";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto border min-h-svh">
      <main>
        <header className="px-6 sm:px-10 md:px-20 lg:px-36 sticky bg-background top-0 z-10 w-full border">
          <Navbar />
        </header>
        <section id="home" className="px-6 sm:px-10 md:px-20 lg:px-36 border">
          <div className="border-x p-12">
            <div className="flex flex-col gap-4">
              <p className="text-sm">👋 Hi, I am a</p>
              <h1 className="text-h1">{DATA.profile.position}</h1>
              <p>{DATA.profile.description}</p>
            </div>
            <Button className="mt-6" asChild>
              <Link href="https://x.com/dalenza_">Hire me</Link>
            </Button>
          </div>
        </section>
        <section
          id="experience"
          className="px-6 sm:px-10 md:px-20 lg:px-36 border"
        >
          <div
            className="border-x p-12 bg-background-darker
          "
          >
            <h2 className="text-h2 mb-6">Work Experience</h2>
            <WorkExperience />
          </div>
        </section>
        <section className="px-6 sm:px-10 md:px-20 lg:px-36 border">
          <div className="border-x p-12">
            <h2 className="text-h2 mb-6">Skills</h2>
            <div className="flex gap-2 items-center flex-wrap max-w-3xl">
              {DATA.skills.frontend.map((fs) => (
                <Badge key={fs} variant="secondary">
                  {fs}
                </Badge>
              ))}
              {DATA.skills.backend.map((bs) => (
                <Badge key={bs}>{bs}</Badge>
              ))}
              {DATA.skills.devops.map((ds) => (
                <Badge key={ds} variant="outline">
                  {ds}
                </Badge>
              ))}
            </div>
          </div>
        </section>
        <section
          id="education"
          className="px-6 sm:px-10 md:px-20 lg:px-36 border"
        >
          <div className="border-x p-12 bg-background-darker">
            <h2 className="text-h2 mb-6">Education</h2>
            <Education />
          </div>
        </section>
        <section
          id="projects"
          className="px-6 sm:px-10 md:px-20 lg:px-36 border"
        >
          <div className="border-x p-12">
            <h2 className="text-h2 mb-6">Projects</h2>
            <Projects />
          </div>
        </section>
      </main>
    </div>
  );
}
