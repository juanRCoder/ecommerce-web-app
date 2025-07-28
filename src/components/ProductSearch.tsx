import { Search, SlidersHorizontal } from 'lucide-react'

type ProductSearchProps = {
  searchTerm: string
  setSearchTerm: (searchTerm: string) => void
  openFilters: boolean
  setOpenFilters: (openFilters: boolean) => void
}

export const ProductSearch = ({searchTerm, setSearchTerm, openFilters, setOpenFilters}: ProductSearchProps) => {
  return (
    <section className="flex gap-4">
      <div className="relative flex-1">
        <Search color="#208572" size={21} strokeWidth={2.5} className="absolute top-2 left-3" />
        <input
          type="search"
          placeholder={`Buscar`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ fontFamily: "Inter" }}
          className="w-full rounded-xl bg-transparent px-5 pl-12 py-2 text-[#52514F] border border-[#29292930] placeholder:text-[#52514F] text-sm placeholder:text-sm placeholder:font-normal outline-none"
        />
      </div>
      <div
        onClick={() => setOpenFilters(!openFilters)}
        className="bg-[#208572] grid place-items-center rounded-xl cursor-pointer px-3.5"
      >
        <SlidersHorizontal size={24} />
      </div>
    </section>
  )
}
