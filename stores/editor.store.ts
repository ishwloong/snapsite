import { generateId } from "@/lib/utils";
import { JSX } from "react";
import { create } from "zustand";

export interface PageComponent {
    id: string;
    tagName: keyof JSX.IntrinsicElements;
    attributes?: JSX.IntrinsicElements[PageComponent['tagName']];
    styles?: Record<string, any>;
    classes?: string;
    children?: PageComponent[];
    script?: string;
    content?: string
}
export interface Page {
    id: string;
    name: string;
    slug: string;
    components: PageComponent[];
}

export interface SiteEditorState {
    page: Page | null;
    device: "mobile" | "tablet" | "desktop";
    pages: Page[];
    selectedComponent: PageComponent | null
}

export interface SiteEditorAction {
    changeViewPort: (device: SiteEditorState["device"]) => void;
    setSelectedComponent: (comp: PageComponent) => void
}

const initialSiteEditState: SiteEditorState = {
    device: "mobile",
    page: null,
    pages: [
        {
            id: generateId('home'),
            name: "Home",
            slug: "home",
            components: [
                {
                    id: generateId(),
                    attributes: {},
                    classes: "bg-primary/30 p-6 flex flex-col gap-6 items-start",
                    children: [{
                        id: generateId(),
                        classes: 'text-gray-800 text-3xl @md:text-4xl @lg:text-5xl font-bold',
                        children: [],
                        tagName: 'h1',
                        content: 'Welcome to SnapSite!'
                    },
                    {
                        id: generateId(),
                        classes: 'text-gray-800',
                        children: [],
                        tagName: 'p',
                        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, soluta officia perspiciatis ipsa earum doloribus? At, vitae, fugit debitis sit repellat neque et magnam officiis dolorum nemo molestias ex nam!'
                    },
                    {
                        id: generateId(),
                        attributes: {},
                        classes: 'text-white font-bold px-6 py-3 bg-primary rounded-md',
                        children: [],
                        script: '',
                        tagName: 'button',
                        content: 'Welcome to SnapSite!'
                    },
                    ],
                    script: "",
                    tagName: "section",
                    content: ''
                },
                { id: generateId('service'), tagName: 'img', attributes: { src: 'https://picsum.photos/200/300', alt: 'random image' } }
            ],
        },
    ],
    selectedComponent: null
};

export const useSiteEditorStore = create<SiteEditorState & SiteEditorAction>(
    (set) => ({
        ...initialSiteEditState as SiteEditorState,
        page: initialSiteEditState.pages[0],
        changeViewPort: (device) => set((state) => ({ ...state, device })),
        setSelectedComponent: (selectedComponent) => set((state) => ({ ...state, selectedComponent })),
    })
);
