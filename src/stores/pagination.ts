import { create } from 'zustand';

type pagerStoreType = {
  page: number
  setPage: (page: number) => void
  totalPages: number
  setTotalPages: (nPages: number) => void
}

export const usePaginationStore = create<pagerStoreType>((set) => ({
  page: 1,
  setPage: (page) => set({ page }),
  totalPages: 1,
  setTotalPages: (nPages) => set({ totalPages: nPages})
}))