import { create } from "zustand"
import { persist } from "zustand/middleware"

type Theme = "light" | "dark"

interface StoreState {
  theme: Theme
  searchTerm: string
  setTheme: (theme: Theme) => void
  setSearchTerm: (term: string) => void
}

export const useStore = create<StoreState>()(
  persist(
    (set) => ({
      theme: "light",
      searchTerm: "",
      setTheme: (theme) => set({ theme }),
      setSearchTerm: (searchTerm) => set({ searchTerm }),
    }),
    {
      name: "blog-storage",
    },
  ),
)

