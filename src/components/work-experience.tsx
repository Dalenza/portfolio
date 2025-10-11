import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function WorkExperience() {
  return (
    <Accordion type="single" defaultValue="item-1">
      <AccordionItem value="item-1">
        <AccordionTrigger className="border-t">
          <div className="flex items-center w-full">
            <div className="flex items-center gap-4">
              <Avatar className="rounded-xl size-10">
                <AvatarImage src="/profile.jpg" className="rounded-xl" />
                <AvatarFallback className="rounded-xl">CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-1">
                <p className="font-semibold">Junior UI Engineer</p>
                <p className="text-sm text-muted-foreground">at Waveline</p>
              </div>
            </div>
            <div className="ml-auto text-xs font-bold">Feb 2025 - Jul 2025</div>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et inventore
          nemo ad distinctio tempore culpa excepturi saepe soluta, corporis
          autem!
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="border-t">
          <div className="flex items-center w-full">
            <div className="flex items-center gap-4">
              <Avatar className="rounded-xl size-10">
                <AvatarImage src="/profile.jpg" className="rounded-xl" />
                <AvatarFallback className="rounded-xl">CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-1">
                <p className="font-semibold">Junior UI Engineer</p>
                <p className="text-sm text-muted-foreground">at Waveline</p>
              </div>
            </div>
            <div className="ml-auto text-xs font-bold">Feb 2025 - Jul 2025</div>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos voluptas
          repudiandae ipsa debitis facere culpa omnis et quaerat rerum facilis.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="border-t">
          <div className="flex items-center w-full">
            <div className="flex items-center gap-4">
              <Avatar className="rounded-xl size-10">
                <AvatarImage src="/profile.jpg" className="rounded-xl" />
                <AvatarFallback className="rounded-xl">CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-1">
                <p className="font-semibold">Junior UI Engineer</p>
                <p className="text-sm text-muted-foreground">at Waveline</p>
              </div>
            </div>
            <div className="ml-auto text-xs font-bold">Feb 2025 - Jul 2025</div>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos voluptas
          repudiandae ipsa debitis facere culpa omnis et quaerat rerum facilis.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
