import { DATA } from "@/data/data";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { getInitials } from "@/lib/utils";
import Link from "next/link";

export function Education() {
  return (
    <ul>
      {DATA.education.map((ed) => (
        <li key={ed.degree} className="flex items-center gap-6 border-t ">
          <div className="flex items-center gap-4 py-2">
            <Link href={ed.href} target="_blank">
              <Avatar className="rounded-xl size-10">
                <AvatarImage className="rounded-xl" src={ed.logoUrl} />
                <AvatarFallback className="rounded-xl">
                  {getInitials(ed.school)}
                </AvatarFallback>
              </Avatar>
            </Link>
            <div className="flex flex-col gap-1">
              <h4 className="font-bold">{ed.school}</h4>
              <p className="text-sm font-semibold text-muted-foreground">
                {ed.degree}
              </p>
            </div>
          </div>
          <div className="ml-auto text-xs font-bold">
            {ed.start} - {ed.end}
          </div>
        </li>
      ))}
    </ul>
  );
}
