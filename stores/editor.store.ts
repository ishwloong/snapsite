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
                    id: 'id_51x0jenph6s_1758774150803',
                    classes: "bg-white px-4 py-2 flex gap-6 items-center justify-between",
                    children: [
                        {
                            id: 'id_kikpn9dps3k_1758774150803',
                            classes: 'text-gray-800 text-3xl @md:text-4xl @lg:text-5xl font-bold',
                            children: [],
                            tagName: 'a',
                            content: 'YourLogo',
                            attributes: { href: '/' }
                        },
                        {
                            id: 'btn-menu',
                            classes: 'text-gray-800 flex items-center @4xl:hidden',
                            children: [],
                            tagName: 'button',
                            script: `
                                document.getElementById('btn-menu').addEventListener('click', function(){
                                    alert('menu clicked')
                                })
                            `,
                            content: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu-icon lucide-menu"><path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/></svg>'
                        },
                        {
                            id: 'minimal-menu',
                            classes: 'w-[100cqw] h-[100cqh] bg-white -z-10 flex flex-col gap-4 absolute top-0 left-0',
                            children: [],
                            tagName: 'div',
                        }
                    ],
                    script: "",
                    tagName: "header",
                    content: ''
                },
                {
                    id: 'id_r2ul1z2z4d_1758774150803',
                    attributes: {},
                    classes: "bg-primary/30 p-6 flex flex-col gap-6 items-start",
                    children: [{
                        id: 'id_0t3wm4zwqwgi_1758774150803',
                        classes: 'text-gray-800 text-3xl @md:text-4xl @lg:text-5xl font-bold',
                        children: [],
                        tagName: 'h1',
                        content: 'Welcome to SnapSite!'
                    },
                    {
                        id: 'id_0brcjmpxjk3_1758774150803',
                        classes: 'text-gray-800',
                        children: [],
                        tagName: 'p',
                        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, soluta officia perspiciatis ipsa earum doloribus? At, vitae, fugit debitis sit repellat neque et magnam officiis dolorum nemo molestias ex nam!'
                    },
                    {
                        id: 'id_62j49negruu_1758774150803',
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
                { id: 'service_rn98kwlamuc_1758774150803', tagName: 'img', attributes: { src: 'https://picsum.photos/200/300', alt: 'random image' } }
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
