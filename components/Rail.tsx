import {
  EditIcon,
  HomeIcon,
  SettingsIcon,
  TableIcon,
  UsersIcon,
} from "lucide-react";
import { RailItems } from "./RailItems";
import Image from "next/image";
import { Separator } from "./ui/separator";

export const Rail = () => {
  return (
    <div className="flex flex-col px-2 gap-2 border-r w-[60px]">
      <Image src='/supabase-logo.svg' width={25} height={25} alt='logo' className="py-2 mx-2 mt-2"/>
      <RailItems href="/" label='Dashboard'>
        <HomeIcon strokeWidth={1.75} size={18} />
      </RailItems>
      <Separator orientation='horizontal' />

      <RailItems href="/nix" label="Marks">
        <TableIcon strokeWidth={1.75} size={18} />
      </RailItems>
      <RailItems href="/nix" label="Editor">
        <EditIcon strokeWidth={1.75} size={18} />
      </RailItems>
      <RailItems href="/nix" label="Students">
        <UsersIcon strokeWidth={1.75} size={18} />
      </RailItems>
      <div className="grow"></div>
      <RailItems href="/nix" label="Setting">
        <SettingsIcon strokeWidth={1.75} size={18} />
      </RailItems>
    </div>
  );
};
