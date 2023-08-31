import { Sidebar } from "@/components/Sidebar";
import { Rail } from "@/components/Rail";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Editor } from "@/components/Editor";
import { Chat } from "@/components/Chat";
import { Statusbar } from "@/components/Statusbar";

export default async function Index() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="flex flex-col h-[100dvh]">
      <div className="flex grow">
        <Rail />
        <Sidebar />
        <Editor />
        <Chat />
      </div>
    </div>
  );
}
