import { Navbar } from "@/components/Navbar";
import { Rail } from "@/components/Rail";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function Index() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="flex flex-col h-[100dvh]">
      <Navbar />
      <div className="flex grow">
        <Rail />
        <div>sidebar</div>
        <div>editor</div>
      </div>
    </div>
  );
}
