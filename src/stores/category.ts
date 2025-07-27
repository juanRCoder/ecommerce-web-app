import { create } from 'zustand';

type productStoreType = {
  selectedCategories: string[],
  setSelectedCategories: (categories: string[]) => void
}

export const useCategoryStore = create<productStoreType>((set) => ({
  selectedCategories: [],
  setSelectedCategories: (categories) => set({ selectedCategories: categories }),
}))