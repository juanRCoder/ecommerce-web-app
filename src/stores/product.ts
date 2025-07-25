import { create } from 'zustand';

type productStoreType = {
  selectedCategories: string[],
  setSelectedCategories: (categories: string[]) => void
}

export const useProductStore = create<productStoreType>((set) => ({
  selectedCategories: [],
  setSelectedCategories: (categories) => set({ selectedCategories: categories }),
}))