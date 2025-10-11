import { Navbar } from "@/components/navbar";
import { Projects } from "@/components/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { WorkExperience } from "@/components/work-experience";

export default function Home() {
  return (
    <div className="container mx-auto border min-h-svh">
      <main>
        <header className="px-6 sm:px-10 md:px-20 lg:px-36 sticky top-0 z-10 w-full border">
          <Navbar />
        </header>
        <section id="home" className="px-6 sm:px-10 md:px-20 lg:px-36 border">
          <div className="border-x p-12">
            <div className="flex flex-col gap-4">
              <p className="text-sm">👋 Hi, I am a</p>
              <h1 className="text-h1">Fullstack Nextjs developer</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
                aperiam earum sapiente, unde animi quo officiis incidunt
                temporibus tempore distinctio!
              </p>
            </div>
            <Button className="mt-6">Hire me</Button>
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
              <Badge variant="secondary">Nodejs</Badge>
              <Badge>React</Badge>
              <Badge>Nextjs</Badge>
              <Badge>Tailwindcss</Badge>
              <Badge>Postgresql</Badge>
              <Badge>Prisma</Badge>
              <Badge>Typescript</Badge>
              <Badge>Docker</Badge>
            </div>
          </div>
        </section>
        <section className="px-6 sm:px-10 md:px-20 lg:px-36 border">
          <div className="border-x p-12 bg-background-darker">
            <h2 className="text-h2 mb-6">Education</h2>
            your education background
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
        <section
          id="contact"
          className="px-6 sm:px-10 md:px-20 lg:px-36 border"
        >
          <div className="border-x p-12">
            <h2 className="text-h2 mb-6">Contact</h2>
          </div>
        </section>
      </main>
    </div>
  );
}
