"use client";
import { cn } from "@/lib/utils";
import {
  BriefcaseBusinessIcon,
  Divide,
  FolderOpenIcon,
  HomeIcon,
  MenuIcon,
  PhoneIcon,
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

export function Navbar() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="flex flex-col gap-2 border-x px-6 sm:px-9 md:px-12 py-3 bg-background/75 backdrop-blur-xs">
      <div className="flex items-center h-[80px]">
        {!collapsed ? (
          <>
            <div className="flex items-center gap-2">
              <Avatar className="rounded-md size-20">
                <AvatarImage src="/profile.jpg" className="rounded-md" />
                <AvatarFallback className="rounded-md">ID</AvatarFallback>
              </Avatar>
              <div className="hidden sm:flex flex-col gap-1">
                <p>Iheb Daly</p>
                <div className="flex items-center gap-1">
                  <span className="size-2 bg-green-400 rounded-full" />
                  <p>Available for work</p>
                </div>
              </div>
            </div>
            <div className="hidden sm:block ml-auto">
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
          <CollapsedNav />
        </div>
      )}
    </div>
  );
}

function Navigation({ className }: { className?: string }) {
  return (
    <NavigationMenu className={cn(className)}>
      <NavigationMenuList>
        <Tooltip>
          <TooltipTrigger>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="#home"
                  className="w-10 flex justify-center items-center"
                >
                  <HomeIcon className="size-6" />
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
                  className="w-10 flex justify-center items-center"
                >
                  <BriefcaseBusinessIcon className="size-6" />
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </TooltipTrigger>
          <TooltipContent>
            <p>Experience</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <NavigationMenuItem>
            <TooltipTrigger>
              <NavigationMenuLink asChild>
                <Link
                  href="#projects"
                  className="w-10 flex justify-center items-center"
                >
                  <FolderOpenIcon className="size-6" />
                </Link>
              </NavigationMenuLink>
            </TooltipTrigger>
          </NavigationMenuItem>
          <TooltipContent>
            <p>Projects</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="#contact"
                  className="w-10 flex justify-center items-center"
                >
                  <PhoneIcon className="size-6" />
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </TooltipTrigger>
          <TooltipContent>
            <p>Contact</p>
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
            <Link href="#">
              <HomeIcon />
              Home
            </Link>
          </Button>
        </li>
        <li className="border">
          <Button variant="ghost" asChild className="w-full justify-start">
            <Link href="#">
              <BriefcaseBusinessIcon />
              Experience
            </Link>
          </Button>
        </li>
        <li className="border">
          <Button variant="ghost" asChild className="w-full justify-start">
            <Link href="#">
              <FolderOpenIcon />
              Projects
            </Link>
          </Button>
        </li>
        <li className="border">
          <Button variant="ghost" asChild className="w-full justify-start">
            <Link href="#">
              <PhoneIcon />
              Contact
            </Link>
          </Button>
        </li>
      </ul>
    </nav>
  );
}
