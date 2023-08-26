import {
  EditIcon,
  HomeIcon,
  SettingsIcon,
  TableIcon,
  UsersIcon,
} from "lucide-react";
import { RailItems } from "./RailItems";

export const Rail = () => {
  return (
    <div className="flex flex-col px-2 gap-2 ">
      <RailItems href="/">
        <HomeIcon strokeWidth={1.75} size={20} />
      </RailItems>
      <RailItems href="/nix">
        <TableIcon strokeWidth={1.75} size={20} />
      </RailItems>
      <RailItems href="/nix">
        <EditIcon strokeWidth={1.75} size={20} />
      </RailItems>
      <RailItems href="/nix">
        <UsersIcon strokeWidth={1.75} size={20} />
      </RailItems>
      <div className="grow"></div>
      <RailItems href="/nix">
        <SettingsIcon strokeWidth={1.75} size={20} />
      </RailItems>
    </div>
  );
};
