"use client";

import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

type RailItemsProps = {
  children: ReactNode;
  href: string;
};

export const RailItems = ({ children, href }: RailItemsProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Button
            variant={"ghost"}
            size={"icon"}
            asChild
            className={`${isActive ? "bg-muted-foreground/20" : ""} text-muted-foreground`}
          >
            <Link href={href}>{children}</Link>
          </Button>
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>Dashboard</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
