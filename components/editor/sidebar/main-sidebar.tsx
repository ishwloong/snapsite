import { Button } from "@/components/ui/button";
import { Blocks, Database, Puzzle } from "lucide-react";

export default function SiteEditorMainSidebar() {
  return (
    <div className="flex flex-col gap-4 px-4 py-3 border-r">
      <Button
        variant="ghost"
        size="icon"
        className="w-10 h-10 [&_svg]:size-5 text-neutral-700/80"
      >
        <Blocks />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="w-10 h-10 [&_svg]:size-5 text-neutral-700/80"
      >
        <Puzzle />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="w-10 h-10 [&_svg]:size-5 text-neutral-700/80"
      >
        <Database />
      </Button>
    </div>
  );
}
