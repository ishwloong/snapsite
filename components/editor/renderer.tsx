"use client";
import { PageComponent, useSiteEditorStore } from "@/stores/editor.store";
import ElSelectedAction from "./el-selected-action";
import { cn } from "@/lib/utils";

type Props = PageComponent;

export function Renderer({ ...props }: Props) {
  const { setSelectedComponent, selectedComponent } = useSiteEditorStore();
  const { id, classes, children, content } = props;

  const onSelectComponent = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedComponent(props);
  };

  return (
    <div
      className={cn(
        "relative cursor-pointer hover:outline-dashed hover:outline-1 hover:outline-primary",
        selectedComponent?.id === id &&
          "outline-solid outline-1 outline-primary hover:outline-solid"
      )}
    >
      {props.tagName === "img" ? (
        <props.tagName
          key={id}
          id={id}
          className={cn(classes)}
          {...props.attributes}
          onClick={onSelectComponent}
        />
      ) : (
        <props.tagName
          key={id}
          id={id}
          className={cn(classes)}
          {...props.attributes}
          onClick={onSelectComponent}
        >
          {children?.map((child) => (
            <Renderer key={child.id} {...child}></Renderer>
          ))}
          {content}
        </props.tagName>
      )}

      {selectedComponent?.id === id && (
        <ElSelectedAction type={props.tagName} component={props} />
      )}
    </div>
  );
}
