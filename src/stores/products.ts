import { create } from 'zustand';

type productStoreType = {
  selectedCategory: string,
  setSelectedCategory: (category: string) => void
  resetCategory: () => void
  minPrice: number,
  setMinPrice: (minPrice: number) => void,
  maxPrice: number,
  setMaxPrice: (maxPrice: number) => void,
  cleanFilters: () => void
}

export const useProductStore = create<productStoreType>((set) => ({
  selectedCategory: '',
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  resetCategory: () => set({selectedCategory: '' }),
  minPrice: 0,
  setMinPrice: (minPrice) => set({ minPrice }),
  maxPrice: 500,
  setMaxPrice: (maxPrice) => set({ maxPrice }),
  cleanFilters: () => set({
    selectedCategory: '',
    minPrice: 0,
    maxPrice: 500
  })
}))