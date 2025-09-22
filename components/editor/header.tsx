import { ChevronLeft } from "lucide-react";
import { Button } from "../ui/button";

export default function SiteEditorHeader() {
  return (
    <div className="flex w-dvw h-16 items-center justify-between border-b px-6">
      <div>
        <Button size="icon" variant="outline">
          <ChevronLeft />
        </Button>
      </div>
      <div className="flex gap-3">
        <Button variant="outline">Save Draft</Button>
        <Button>Publish</Button>
      </div>
    </div>
  );
}
