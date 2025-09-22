"use client";

import { cn } from "@/lib/utils";
import { useSiteEditorStore } from "@/stores/editor.store";

export default function Canvas({ children }: { children: React.ReactNode }) {
  const { device } = useSiteEditorStore();
  return (
    <div
      className={cn(
        "flex-1 bg-white @container w-full mx-auto",
        device === "mobile" && "max-w-[420px]",
        device === "tablet" && "max-w-3xl",
        device === "desktop" && "max-w-full"
      )}
    >
      {children}
    </div>
  );
}
