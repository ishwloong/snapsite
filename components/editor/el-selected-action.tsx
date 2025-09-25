"use client";
import { PageComponent } from "@/stores/editor.store";

type Props = {
  type: string;
  component?: PageComponent;
};

export default function ElSelectedAction({ type, component }: Props) {
  if (component) {
    const elRect = document
      .getElementById(component?.id)!
      .getBoundingClientRect();

    console.log(elRect);

    return (
      <div className="absolute top-0 right-0 bg-primary text-white font-normal text-xs px-2 py-0.5 capitalize -translate-y-full">
        {component.tagName}
      </div>
    );
  } else {
    return (
      <div className="absolute top-0 right-0 bg-primary text-white text-xs px-2 py-0.5 capitalize -translate-y-full">
        {type}
      </div>
    );
  }
}
