import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  TooltipArrow,
} from "@/components/ui/tooltip";
import { Toggle } from "@/components/ui/toggle";
import { ReactNode } from "react";

type EditorItemProps = {
  children: ReactNode;
  label: string;
};

export const EditorItems = ({ children, label }: EditorItemProps) => {
  return (
    <TooltipProvider>
      <Tooltip >
        <TooltipTrigger >
          <Toggle size={'sm'}>{children}</Toggle>
        </TooltipTrigger>
        <TooltipContent side="bottom" className="text-xs">
          <p>{label}</p>
          <TooltipArrow />
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
