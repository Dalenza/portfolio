"use client";
import { cn } from "@/lib/utils";
import {
  BriefcaseBusinessIcon,
  Divide,
  FolderOpenIcon,
  HomeIcon,
  MenuIcon,
  PhoneIcon,
  UniversityIcon,
  XIcon,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { Socials } from "./socials";

export function Navbar() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="flex flex-col gap-2 border-x px-6 sm:px-9 md:px-12 py-3 bg-background">
      <div className="flex items-center justify-between h-[80px]">
        {!collapsed ? (
          <>
            <div className="flex items-center gap-2">
              <Avatar className="rounded-xl size-14">
                <AvatarImage src="/profile.jpg" className="rounded-xl" />
                <AvatarFallback className="rounded-xl">ID</AvatarFallback>
              </Avatar>
              <div className="hidden sm:flex flex-col gap-1">
                <p className="text-sm">Iheb Daly</p>
                <div className="flex items-center gap-1">
                  <span className="size-2 bg-green-400 rounded-full" />
                  <p className="text-sm text-secondary">Available for work</p>
                </div>
              </div>
            </div>
            <div className="hidden sm:block">
              <Socials />
            </div>
            <div className="hidden sm:block">
              <Navigation />
            </div>
            <div className="sm:hidden ml-auto">
              <Button
                size="icon"
                variant="ghost"
                onClick={() => setCollapsed(true)}
              >
                <MenuIcon className="size-6" />
              </Button>
            </div>
          </>
        ) : (
          <div className="sm:hidden ml-auto">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setCollapsed(false)}
            >
              <XIcon className="size-6" />
            </Button>
          </div>
        )}
      </div>
      {collapsed && (
        <div className="space-y-3">
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              <Avatar className="rounded-md size-10">
                <AvatarImage src="/profile.jpg" className="rounded-md" />
                <AvatarFallback className="rounded-md">ID</AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-1">
                <p>Iheb Daly</p>
                <div className="flex items-center gap-1">
                  <span className="size-2 bg-green-400 rounded-full" />
                  <p>Available for work</p>
                </div>
              </div>
            </div>
            <div className="ml-auto">
              <Socials />
            </div>
          </div>
          <CollapsedNav />
        </div>
      )}
    </div>
  );
}

function Navigation({ className }: { className?: string }) {
  return (
    <NavigationMenu className={cn("border-2", className)}>
      <NavigationMenuList>
        <Tooltip>
          <TooltipTrigger>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="#home" className="flex justify-center items-center">
                  <HomeIcon />
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </TooltipTrigger>
          <TooltipContent>
            <p>Home</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="#experience"
                  className="flex justify-center items-center"
                >
                  <BriefcaseBusinessIcon />
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </TooltipTrigger>
          <TooltipContent>
            <p>Experience</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="#education"
                  className="flex justify-center items-center"
                >
                  <UniversityIcon />
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </TooltipTrigger>
          <TooltipContent>
            <p>Education</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <NavigationMenuItem>
            <TooltipTrigger>
              <NavigationMenuLink asChild>
                <Link
                  href="#projects"
                  className="flex justify-center items-center"
                >
                  <FolderOpenIcon />
                </Link>
              </NavigationMenuLink>
            </TooltipTrigger>
          </NavigationMenuItem>
          <TooltipContent>
            <p>Projects</p>
          </TooltipContent>
        </Tooltip>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function CollapsedNav() {
  return (
    <nav>
      <ul>
        <li className="border">
          <Button variant="ghost" asChild className="w-full justify-start">
            <Link href="#home">
              <HomeIcon />
              Home
            </Link>
          </Button>
        </li>
        <li className="border">
          <Button variant="ghost" asChild className="w-full justify-start">
            <Link href="#experience">
              <BriefcaseBusinessIcon />
              Experience
            </Link>
          </Button>
        </li>
        <li className="border">
          <Button variant="ghost" asChild className="w-full justify-start">
            <Link href="#education">
              <UniversityIcon />
              Education
            </Link>
          </Button>
        </li>
        <li className="border">
          <Button variant="ghost" asChild className="w-full justify-start">
            <Link href="#projects">
              <FolderOpenIcon />
              Projects
            </Link>
          </Button>
        </li>
      </ul>
    </nav>
  );
}
