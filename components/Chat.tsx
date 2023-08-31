import { SendIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export const Chat = () => {
  return (
    <div className="border-l w-[400px] flex flex-col">
      <div className="text-xl p-3 px-6 border-b h-13">Chat</div>

      <div className="grow p-3 px-6 text-sm">
        <div className="pb-4">
          <Label>You</Label>
          <div>Was ist eine Funktion?</div>
        </div>
        <Label>AI</Label>
        <div>Eine Funktion ist eine eindeutige Zuordnung</div>
      </div>
      <div className="flex gap-2 p-3 px-6">
        <Input placeholder="Ask AI something..." />
        <Button variant={"secondary"}>
          <SendIcon strokeWidth={1.75} size={14} />
        </Button>
      </div>
    </div>
  );
};
