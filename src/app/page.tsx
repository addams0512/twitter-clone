import LeftSidebar from "@/components/left-sidebar";
import MainComponent from "@/components/main-components";
import RightSection from "@/components/right-section";

import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";

export default async function Home() {
  const cookieStore = cookies();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
      },
    },
  );

  const { data, error } = await supabase.auth.getUser();

  console.log({ data, error });

  return (
    <html>
      <body className="bg-black">
        <div className="w-full h-[2000px] flex items-center justify-center relative">
          <div className="w-full h-full flex xl:max-w-[140vh] relative">
            <LeftSidebar />
            <MainComponent />
            <RightSection />
          </div>
        </div>
      </body>
    </html>
  );
}
