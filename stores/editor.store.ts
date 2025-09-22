import { create } from "zustand";

export interface SiteEditorState {
    page: '',
    device: 'mobile' | 'tablet' | 'desktop',

}

const initialSiteEditState: SiteEditorState = {
    device: 'mobile',
    page: ''
}

export const useSiteEditorStore = create<SiteEditorState>((set, get) => ({ ...initialSiteEditState }))