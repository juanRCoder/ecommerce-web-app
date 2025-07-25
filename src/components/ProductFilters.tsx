import { useEffect, useState } from 'react';
import { X, ChevronDown } from 'lucide-react';
import type { Category } from '@/types/category';
import { getAllCategories } from '@/services/category';
import { useProductStore } from '@/stores/product';


export const ProductFilters = () => {
  const { selectedCategories, setSelectedCategories } = useProductStore()
  const [openCategory, setOpenCategory] = useState<boolean>(false)
  const [allCategories, setAllCategories] = useState<Category[]>()

  useEffect(() => {
    const fetchCategories = async () => {
      const categoriesData = await getAllCategories()
      setAllCategories(categoriesData)
    }
    fetchCategories()
  }, [])

  const handleSelectCategory = (categoryName: string) => {
    const isSelected = selectedCategories.includes(categoryName);
    if (!isSelected) {
      setSelectedCategories([...selectedCategories, categoryName])
    }
    setOpenCategory(!openCategory)
  }

  useEffect(() => {
    console.log('Categorías seleccionadas:', selectedCategories);
  }, [selectedCategories]);

  const hasSelectedCategories = selectedCategories.length > 0;

  return (
    <section className='mt-3'>
      <h3 className='text-[#292929] font-semibold text-lg'>FILTROS</h3>
      <div className='flex flex-wrap gap-[5px] mt-1.5'>
        {selectedCategories.map((category) => (
          <div key={category} className="cursor-pointer inline-flex gap-1 justify-center bg-[#208572] text-white px-2.5 py-[5px] rounded-lg text-sm">
            <span>{category}</span>
            <X size={20} onClick={() => setSelectedCategories(selectedCategories.filter(cat => cat !== category))} />
          </div>
        ))}
      </div>
      <div onClick={() => setOpenCategory(!openCategory)} className={`cursor-pointer select-none relative rounded-[5px] outline outline-[#29292930] text-[#292929] flex justify-between px-3 py-2 ${hasSelectedCategories ? "mt-3" : ""}`}>
        <p className='font-medium'>Categorias</p>
        <ChevronDown className={`${openCategory ? 'rotate-180' : ''} transition`} />
        {openCategory && (
          <div className='absolute top-12 left-0 rounded-[5px] w-full outline outline-[#29292930] text-[#292929] flex flex-col bg-white z-50'>
            {allCategories && allCategories.map(category => (
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
          />
          <p>min</p>
        </div>
        <div className='w-full flex justify-between items-center rounded-[5px] outline outline-[#29292930] text-[#292929] px-3 py-2 mt-4'>
          <p className='font-medium'>S/</p>
          <input
            type='number'
            className='w-full flex-1 mr-2 outline-none text-right'
            placeholder='500'
          />
          <p>max</p>
        </div>
      </div>
      <button className='w-full cursor-pointer mt-3 bg-[#208572] py-[5px] px-2.5 text-white rounded-[5px]'>FILTRAR</button>
    </section>
  )
}
