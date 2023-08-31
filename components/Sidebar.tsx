import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "./ui/label";
import { Separator } from "./ui/separator";
import { FilePlusIcon, MoreVerticalIcon } from "lucide-react";
import { Button } from "./ui/button";
export const Sidebar = () => {
  return (
    <div className="w-[340px] border-r flex flex-col">
      <div className="text-xl p-3 px-6 border-b h-13">Files</div>
      <div className="py-3 px-6">
        <Select>
          <SelectTrigger className="w-full min-w-[150px]">
            <SelectValue placeholder="Select a class" />
          </SelectTrigger>
          <SelectContent className="bg-accent">
            <SelectItem value="light">BGY22a</SelectItem>
            <SelectItem value="dark">BGY22b</SelectItem>
            <SelectItem value="system">BGY22c</SelectItem>
            <SelectItem value="sad">BF122a</SelectItem>
          </SelectContent>
        </Select>
        <Button className=" justify-between w-full my-2" variant={"secondary"}>
          New file
          <FilePlusIcon strokeWidth={1.75} size={16} />
        </Button>
        <Separator className="my-3" />
        <Label className="text-xs  text-muted-foreground">Files</Label>
        <div className="flex items-center justify-between text-sm">
          <div>Lineare Funktionen</div>
          <MoreVerticalIcon strokeWidth={1.75} size={14} />
        </div>
      </div>
    </div>
  );
};
