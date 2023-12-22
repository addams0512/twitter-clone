import LeftSidebar from "@/components/left-sidebar";
import MainComponent from "@/components/main-components";

export default function Home() {
  return (
    <html>
      <body>
        <div className="w-full h-[2000px] flex items-center justify-center">
          <div className="w-full h-full flex xl:max-w-[125vh]">
            <LeftSidebar />
            <MainComponent />
          </div>
        </div>
      </body>
    </html>
  );
}
