import Canvas from "@/components/editor/canvas";
import SiteEditorHeader from "@/components/editor/header";
import SiteEditorMainSidebar from "@/components/editor/sidebar/main-sidebar";

export default function SiteEditorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-dvw h-dvh flex flex-col">
      <SiteEditorHeader />
      <div className="flex-1 flex">
        <SiteEditorMainSidebar />
        <div className="w-full max-w-72 border-r"></div>
        <div className="flex-1 flex flex-col">
          <div className="h-14 border-b w-full"></div>
          <div className="flex-1 flex flex-col px-6 py-3 bg-gray-300/10">
            <Canvas>{children}</Canvas>
          </div>
        </div>
        {/* <div className="w-full max-w-72 border-l"></div> */}
      </div>
    </div>
  );
}
