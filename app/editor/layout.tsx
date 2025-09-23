import SiteEditorHeader from "@/components/editor/header";
import SiteEditorMainSidebar from "@/components/editor/sidebar/main-sidebar";
import ToggleViewPort from "@/components/editor/toggle-viewport";

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
          <div className="h-14 border-b w-full flex items-center justify-between">
            <div></div>
            <ToggleViewPort />
            <div></div>
          </div>
          <div className="flex-1 flex flex-col px-6 pb-3 pt-8  bg-gray-300/10">
            {children}
          </div>
        </div>
        {/* <div className="w-full max-w-72 border-l"></div> */}
      </div>
    </div>
  );
}
