import {
  BoldIcon,
  BookOpenCheckIcon,
  BrushIcon,
  ExternalLinkIcon,
  ItalicIcon,
  ParenthesesIcon,
  PointerIcon,
  UnderlineIcon,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "./ui/label";
import { Separator } from "./ui/separator";
import { EditorItems } from "./EditorItems";
import { Input } from "./ui/input";
export const Editor = () => {
  return (
    <div className="w-full">
      <div className="text-sm p-4 px-6 border-b h-13">
        BGY22a <span className="text-primary/30 mx-3">/</span> Lineare
        Funktionen
      </div>

      <div className="flex gap-1 py-1 items-center px-4 border-b">
        <Select defaultValue="light">
          <SelectTrigger className="w-[200px] border-none">
            <SelectValue placeholder="Select a style" />
          </SelectTrigger>
          <SelectContent className="bg-accent">
            <SelectItem value="light">Paragraph</SelectItem>
            <SelectItem value="dark">Heading 1</SelectItem>
            <SelectItem value="system">Heading 2</SelectItem>
            <SelectItem value="sad">Heading 3</SelectItem>
          </SelectContent>
        </Select>
        <Separator orientation="vertical" decorative className="h-7" />

        <EditorItems label="bold">
          <BoldIcon strokeWidth={2} size={14} />
        </EditorItems>
        <EditorItems label="italic">
          <ItalicIcon strokeWidth={2} size={14} />
        </EditorItems>
        <EditorItems label="underline">
          <UnderlineIcon strokeWidth={2} size={14} />
        </EditorItems>
        <Separator orientation="vertical" decorative className="h-7" />
        <EditorItems label="draw">
          <BrushIcon strokeWidth={2} size={14} />
        </EditorItems>
        <EditorItems label="tasks">
          <BookOpenCheckIcon strokeWidth={2} size={14} />
        </EditorItems>
        <EditorItems label="math">
          <ParenthesesIcon strokeWidth={2} size={14} />
        </EditorItems>
        <Separator orientation="vertical" decorative className="h-7" />

        <EditorItems label="pointer">
          <PointerIcon strokeWidth={2} size={14} />
        </EditorItems>
        <div className="grow"></div>
        <EditorItems label="external window">
          <ExternalLinkIcon strokeWidth={2} size={14} />
        </EditorItems>
      </div>
      <div className="border-b flex px-6 py-3 gap-3">
        <div className="w-1/3">
          <Input placeholder="Lineare Funktionen..." />

          <RadioGroup defaultValue="option-one">
            <div className="flex items-center mt-3 space-x-2">
              <RadioGroupItem value="option-one" id="option-one" />
              <Label htmlFor="option-one">easy</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-two" id="option-two" />
              <Label htmlFor="option-two">medium</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-two" id="option-two" />
              <Label htmlFor="option-two">hard</Label>
            </div>
          </RadioGroup>
        </div>
        <Separator orientation="vertical" className="h-48" />
        <div className="w-1/3">list</div>
        <Separator orientation="vertical" className="h-48" />
        <div className="w-1/3">ergebnis</div>
      </div>
      <div className="p-12">
        <div className="text-5xl py-4">Lineare Funktionen</div>
        <div className="text-lg leading-8 max-w-[80ch]">
          Eine Funktion ist eine eindeutige Zuordnung die jedem x-Wert des
          Definitionsbereichs, genau einen y-Wert der Wertemenge zuordnet. Eine
          Funktion kann entweder als Funktionsgraph, mit Hilfe eine Wertetabelle
          oder als eine Funktionsgleichung dargestellt werden. Jede dieser drei
          Darstellungsarten hat seine eigenen Vorteile, aber auch Nachteile. Im
          folgenden werden wir die drei Darstellungsarten von Funktionen genauer
          untersuchen und auf die jeweiligen Eigenschaften naeher eingehen
        </div>
      </div>
    </div>
  );
};
