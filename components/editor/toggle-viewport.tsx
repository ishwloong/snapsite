"use client";
import { Monitor, Smartphone, Tablet } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";
import { SiteEditorState, useSiteEditorStore } from "@/stores/editor.store";

export default function ToggleViewPort() {
  const { device, changeViewPort } = useSiteEditorStore();

  return (
    <ToggleGroup
      type="single"
      value={device}
      onValueChange={(value) =>
        value && changeViewPort(value as SiteEditorState["device"])
      }
    >
      <ToggleGroupItem value="mobile" aria-label="Mobile view">
        <Smartphone className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="tablet" aria-label="Tablet view">
        <Tablet className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="desktop" aria-label="Desktop view">
        <Monitor className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
