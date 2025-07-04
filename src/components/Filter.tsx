import { X, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function Filter() {
  const [openCategory, setOpenCategory] = useState<boolean>(false)

  return (
    <section className='mt-3'>
      <h3 className='text-[#292929] font-semibold text-lg'>FILTROS</h3>
      <div className='flex flex-wrap gap-[5px] mt-1.5'>
        <div className="cursor-pointer inline-flex gap-1 justify-center bg-[#208572] text-white px-2.5 py-[5px] rounded-lg text-sm">
          <span>Bebidas</span>
          <X size={20} />
        </div>
        <div className="cursor-pointer inline-flex gap-1 justify-center bg-[#208572] text-white px-2.5 py-[5px] rounded-lg text-sm">
          <span>Snacks</span>
          <X size={20} />
        </div>
        <div className="cursor-pointer inline-flex gap-1 justify-center bg-[#208572] text-white px-2.5 py-[5px] rounded-lg text-sm">
          <span>Galletas</span>
          <X size={20} />
        </div>
      </div>
      <div className='select-none relative rounded-[5px] outline outline-[#29292930] text-[#292929] flex justify-between px-3 py-2 mt-4'>
        <p className='font-medium'>Categorias</p>
        <ChevronDown onClick={() => setOpenCategory(!openCategory)} className={`${openCategory ? 'rotate-180' : ''} transition cursor-pointer`} />
        {openCategory && (
          <div className='absolute top-12 left-0 rounded-[5px] w-full outline outline-[#29292930] text-[#292929 flex flex-col bg-white z-50'>
            <span onClick={() => setOpenCategory(!openCategory)} className='p-3 py-2 cursor-pointer hover:bg-[#20857233]'>Bebidas</span>
            <span onClick={() => setOpenCategory(!openCategory)} className='p-3 py-2 cursor-pointer hover:bg-[#20857233]'>Snacks</span>
            <span onClick={() => setOpenCategory(!openCategory)} className='p-3 py-2 cursor-pointer hover:bg-[#20857233]'>Galletas</span>
            <span onClick={() => setOpenCategory(!openCategory)} className='p-3 py-2 cursor-pointer hover:bg-[#20857233]'>Frutas</span>
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
