import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/data";
import { getInitials } from "@/lib/utils";
import Link from "next/link";

export function WorkExperience() {
  return (
    <Accordion type="single" defaultValue="0">
      {DATA.experience.map((exp, i) => (
        <AccordionItem value={`${i}`} key={i}>
          <AccordionTrigger className="border-t">
            <div className="flex items-center w-full">
              <div className="flex items-center gap-4">
                <Link href={exp.href} target="_blank">
                  <Avatar className="rounded-xl size-10">
                    <AvatarImage src={exp.logoUrl} className="rounded-xl" />
                    <AvatarFallback className="rounded-xl">
                      {getInitials(exp.company)}
                    </AvatarFallback>
                  </Avatar>
                </Link>
                <div className="flex flex-col gap-1">
                  <p className="font-semibold">{exp.title}</p>
                  <p className="text-sm text-muted-foreground">
                    at {exp.company}
                  </p>
                </div>
              </div>
              <div className="ml-auto text-xs font-bold">
                {exp.start} - {exp.end}
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <ul className="pl-16 list-disc [&>li]:mt-2">
              {exp.description.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
