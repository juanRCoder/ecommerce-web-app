import { create } from 'zustand';

type productStoreType = {
  selectedCategory: string,
  setSelectedCategory: (category: string) => void
  resetCategory: () => void
  cleanFilters: () => void
}

export const useProductStore = create<productStoreType>((set) => ({
  selectedCategory: '',
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  resetCategory: () => set({selectedCategory: '' }),
  cleanFilters: () => set({
    selectedCategory: '',
  })
}))