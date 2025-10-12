import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export function Socials() {
  return (
    <div className="flex items-center border">
      <Button
        size="icon-sm"
        variant="secondary"
        className="rounded-none"
        asChild
      >
        <Link href="https://github.com/dalenza">
          <GithubIcon />
        </Link>
      </Button>
      <Button
        size="icon-sm"
        variant="secondary"
        className="rounded-none"
        asChild
      >
        <Link href="https://linkedin.com/">
          <LinkedinIcon />
        </Link>
      </Button>
      <Button
        size="icon-sm"
        variant="secondary"
        className="rounded-none"
        asChild
      >
        <Link href="https://x.com/dalenza_">
          <TwitterIcon />
        </Link>
      </Button>
    </div>
  );
}
