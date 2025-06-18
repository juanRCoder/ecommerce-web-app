import { Search, SlidersHorizontal, Store } from 'lucide-react';
import NavbarComponent from '../components/NavbarComponent';
import { useState } from 'react';
import ProductCardComponent from '../components/ProductCardComponent';
import FilterComponent from '../components/FilterComponent';
import PagerComponent from '../components/PagerComponent';

export default function ProductsView() {
  const [openFilter, setOpenFilter] = useState<boolean>(false)

  return (
    <section className="select-none relative flex flex-col justify-between max-w-sm m-auto min-h-screen bg-white"
      style={{ fontFamily: "Oswald" }}
    >
      <div className='px-2 mb-28'>
        <div className='flex items-center justify-center gap-2'>
          <Store color='#208572' size={32} strokeWidth={2} />
          <h1 className="text-center text-[#208572] font-bold text-2xl py-5">
            Mi Tienda Online
          </h1>
        </div>
        <section className='flex gap-4'>
          <div className='relative flex-1'>
            <Search color="#208572" size={21} strokeWidth={2.5} className='absolute top-2 left-3' />
            <input
              type="search"
              placeholder="Buscar"
              style={{ fontFamily: "Inter" }}
              className="w-full rounded-xl bg-transparent px-5 pl-12 py-2 text-[#52514F] border border-[#29292930] placeholder:text-[#52514F] text-sm placeholder:text-sm placeholder:font-normal outline-none"
            />
          </div>
          <div onClick={() => setOpenFilter(!openFilter)} className='bg-[#208572] grid place-items-center rounded-xl cursor-pointer px-3.5'>
            <SlidersHorizontal size={24} />
          </div>
        </section>
        {openFilter && (
          <FilterComponent />
        )}
        <section className='flex flex-col gap-4 mt-5'>
          <ProductCardComponent />
          <ProductCardComponent />
          <ProductCardComponent />
        </section>
        <PagerComponent />
      </div>
      <NavbarComponent />
    </section>
  )
}
