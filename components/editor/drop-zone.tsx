"use client";

import { cn } from "@/lib/utils";
import { useSiteEditorStore } from "@/stores/editor.store";
import ElSelectedAction from "./el-selected-action";
import { Renderer } from "./renderer";

export default function DropZone() {
  const { device, page, selectedComponent } = useSiteEditorStore();
  return (
    <div
      className={cn(
        "flex-1 bg-white @container w-full mx-auto transition-all outline-solid outline-1 relative",
        device === "mobile" && "max-w-[420px]",
        device === "tablet" && "max-w-3xl",
        device === "desktop" && "max-w-full"
      )}
    >
      {!selectedComponent && <ElSelectedAction type="body" />}
      {page?.components.length ? <RenderPage /> : <PageEmpty />}
    </div>
  );
}

function PageEmpty() {
  return <div>Empty page</div>;
}

function RenderPage() {
  const { page } = useSiteEditorStore();
  if (!page) return;
  return (
    <>
      {page.components.map((comp) => (
        <Renderer key={comp.id} {...comp} />
      ))}
    </>
  );
}
