import LeftSidebar from "@/components/left-sidebar";
import MainComponent from "@/components/main-components";
import RightSection from "@/components/right-section";

export default function Home() {
  return (
    <html>
      <body>
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
