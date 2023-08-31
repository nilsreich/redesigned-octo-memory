"use client";

import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  TooltipArrow
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

type RailItemsProps = {
  children: ReactNode;
  href: string;
  label:string
};

export const RailItems = ({ children, href, label }: RailItemsProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant={"ghost"}
            size={"icon"}
            asChild
            className={`${isActive ? "bg-accent" : ""} text-muted-foreground`}
          >
            <Link href={href}>{children}</Link>
          </Button>
        </TooltipTrigger>
        <TooltipContent side="right" className="text-xs" >
          
          <p>{label}</p>
           <TooltipArrow />
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
