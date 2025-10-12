import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function Education() {
  return (
    <ul>
      <li className="flex items-center gap-6 border-t ">
        <div className="flex items-center gap-4 py-2">
          <Avatar className="rounded-xl size-10">
            <AvatarImage src="/profile.jpg" />
            <AvatarFallback>UN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-1">
            <h4 className="font-bold">University Name</h4>
            <p className="text-sm font-semibold text-muted-foreground">
              Bachelor's degree of unemployment
            </p>
          </div>
        </div>
        <div className="ml-auto text-xs font-bold">Sep 2023 - Jul 2025</div>
      </li>
      <li className="flex items-center gap-6 border-t">
        <div className="flex items-center gap-4 py-2">
          <Avatar className="rounded-xl size-10">
            <AvatarImage src="/profile.jpg" />
            <AvatarFallback>UN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-1">
            <h4 className="font-bold">University Name</h4>
            <p className="text-sm font-semibold text-muted-foreground">
              Bachelor's degree of unemployment
            </p>
          </div>
        </div>
        <div className="ml-auto text-xs font-bold">Sep 2020 - Jul 2023</div>
      </li>
    </ul>
  );
}
