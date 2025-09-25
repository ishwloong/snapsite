import { PageComponent } from "@/stores/editor.store";

export type Props = {
  name: string;
  icon: string | React.ReactNode;
  components: PageComponent[];
};

export default function ComponentDragable() {
  return <div className="border rounded-3xl"></div>;
}
