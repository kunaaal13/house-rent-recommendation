import { create } from 'zustand'

type SidebarState = {
  selectedOption: string
  setSelectedOption: (selectedOption: string) => void
}

export const useSidebarStore = create<SidebarState>((set) => ({
  selectedOption: 'Dashboard',
  setSelectedOption: (selectedOption: string) =>
    set((state: SidebarState) => ({ ...state, selectedOption })),
}))
