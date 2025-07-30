import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useProductStore } from '@/stores/products';
import { useGetAllCategories } from '@/hooks/useGetAllCategories';


export const ProductFilters = () => {
  const { selectedCategory, setSelectedCategory, setMaxPrice, maxPrice, setMinPrice, minPrice } = useProductStore()
  const [openCategory, setOpenCategory] = useState<boolean>(false)
  const { data } = useGetAllCategories()

  const handleSelectCategory = (categoryName: string) => {
    setSelectedCategory(categoryName)
    setOpenCategory(!openCategory)
  }

  return (
    <section className='mt-3'>
      <h3 className='text-[#292929] font-semibold text-lg'>FILTROS</h3>
      <div onClick={() => setOpenCategory(!openCategory)} className={`cursor-pointer select-none relative rounded-[5px] outline outline-[#29292930] text-[#292929] flex justify-between px-3 py-2`}>
        <p className='font-medium'>{selectedCategory ? `Categoria: ${selectedCategory}` : "Seleccionar Categoria"}</p>
        <ChevronDown className={`${openCategory ? 'rotate-180' : ''} transition`} />
        {openCategory && (
          <div className='absolute top-12 left-0 rounded-[5px] w-full outline outline-[#29292930] text-[#292929] flex flex-col bg-white z-50'>
            <span onClick={() => handleSelectCategory('')} className='p-3 py-2 cursor-pointer hover:bg-[#20857233]'>Todos</span>
            {data?.map(category => (
              <span key={category.id} onClick={() => handleSelectCategory(category.name)} className='p-3 py-2 cursor-pointer hover:bg-[#20857233]'>{category.name}</span>
            ))}
          </div>
        )}
      </div>
      <h3 className='text-[#292929] font-semibold text-sm mt-3'>RANGO DE PRECIOS</h3>
      <div className='flex gap-3'>
        <div className='w-full flex justify-between items-center rounded-[5px] outline outline-[#29292930] text-[#292929] px-3 py-2 mt-4'>
          <p className='font-medium'>S/</p>
          <input
            type='number'
            className='w-full flex-1 mr-2 outline-none text-right'
            placeholder='0'
            value={minPrice === 0 ? '' : minPrice}
            onChange={(e) => {
              const value = e.target.value;
              setMinPrice(value === '' ? 0 : Number(value));
            }}
          />
          <p>min</p>
        </div>
        <div className='w-full flex justify-between items-center rounded-[5px] outline outline-[#29292930] text-[#292929] px-3 py-2 mt-4'>
          <p className='font-medium'>S/</p>
          <input
            type='number'
            className='w-full flex-1 mr-2 outline-none text-right'
            placeholder='500'
            value={maxPrice === 500 ? '' : maxPrice}
            onChange={(e) => {
              const value = e.target.value;
              setMaxPrice(value === '' ? 500 : Number(value));
            }}
          />
          <p>max</p>
        </div>
      </div>
    </section>
  )
}
