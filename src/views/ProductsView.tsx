import { Search, SlidersHorizontal, Store, ChevronRight, Heart, X, ChevronDown } from 'lucide-react';
import Navbar from '../shared/Navbar';
import { useState } from 'react';

export default function ProductsView() {
  const [openCategory, setOpenCategory] = useState<boolean>(false)

  return (
    <section className="relative flex flex-col justify-between max-w-sm m-auto min-h-screen bg-white"
      style={{ fontFamily: "Oswald" }}
    >
      <div className='px-2'>
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
          <div className='bg-[#208572] grid place-items-center rounded-xl cursor-pointer px-3.5'>
            <SlidersHorizontal size={24} />
          </div>
        </section>
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
            <ChevronDown onClick={()=>setOpenCategory(!openCategory)} className={`${openCategory ? 'rotate-180' : ''} transition cursor-pointer`}/>
            {openCategory && (
              <div className='absolute top-12 left-0 rounded-[5px] w-full outline outline-[#29292930] text-[#292929 flex flex-col bg-white z-50'>
                <span onClick={()=>setOpenCategory(!openCategory)} className='p-3 py-2 cursor-pointer hover:bg-[#20857233]'>Bebidas</span>
                <span onClick={()=>setOpenCategory(!openCategory)} className='p-3 py-2 cursor-pointer hover:bg-[#20857233]'>Snacks</span>
                <span onClick={()=>setOpenCategory(!openCategory)} className='p-3 py-2 cursor-pointer hover:bg-[#20857233]'>Galletas</span>
                <span onClick={()=>setOpenCategory(!openCategory)} className='p-3 py-2 cursor-pointer hover:bg-[#20857233]'>Frutas</span>
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
        <section className='flex flex-col gap-4 mt-5'>
          <div className='relative flex justify-between p-2.5 outline outline-[#29292930] rounded-[10px]'>
            <img
              src='/images/test_img1.jpg'
              className='w-1/3 object-contain'
              alt='Gaseosa Coca-Cola de 3L'
            />
            <div className='flex flex-col justify-between w-2/3 pl-2'>
              <div className='flex justify-between gap-2.5'>
                <p className='text-sm text-[#292929]'>Gaseosa Coca-Cola de 3L</p>
                <Heart color='#208572' size={22} className='cursor-pointer flex-shrink-0' />
              </div>
              <div className='flex flex-col gap-2.5'>
                <p className='text-[#208572] text-2xl font-semibold tracking-[-1px]'>S/ 9.00</p>
                <button className='outline outline-[#208572] py-[5px] px-2.5 text-[#208572] rounded-[5px]'>AGREGAR</button>
              </div>
            </div>
          </div>
          <div className='relative flex justify-between p-2.5 outline outline-[#29292930] rounded-[10px]'>
            <img
              src='/images/test_img1.jpg'
              className='w-1/3 object-contain'
              alt='Gaseosa Coca-Cola de 3L'
            />
            <div className='flex flex-col justify-between w-2/3 pl-2'>
              <div className='flex justify-between gap-2.5'>
                <p className='text-sm text-[#292929]'>Gaseosa Coca-Cola de 3L</p>
                <Heart color='#208572' size={22} className='cursor-pointer flex-shrink-0' />
              </div>
              <div className='flex flex-col gap-2.5'>
                <p className='text-[#208572] text-2xl font-semibold tracking-[-1px]'>S/ 9.00</p>
                <button className='outline outline-[#208572] py-[5px] px-2.5 text-[#208572] rounded-[5px]'>AGREGAR</button>
              </div>
            </div>
          </div>
          <div className='relative flex justify-between p-2.5 outline outline-[#29292930] rounded-[10px]'>
            <img
              src='/images/test_img1.jpg'
              className='w-1/3 object-contain'
              alt='Gaseosa Coca-Cola de 3L'
            />
            <div className='flex flex-col justify-between w-2/3 pl-2 gap-2'>
              <div className='flex justify-between gap-2.5'>
                <p className='text-sm text-[#292929]'>Gaseosa Coca-Cola de 3L</p>
                <Heart color='#208572' size={22} className='cursor-pointer flex-shrink-0' />
              </div>
              <div className='flex flex-col gap-2.5'>
                <p className='text-[#208572] text-2xl font-semibold tracking-[-1px]'>S/ 9.00</p>
                <button className='outline outline-[#208572] py-[5px] px-2.5 text-[#208572] rounded-[5px]'>AGREGAR</button>
              </div>
            </div>
          </div>
        </section>
        <section className='flex justify-center items-center gap-3 my-8 mb-28' style={{ fontFamily: "Oswald" }}>
          <div className='flex gap-1 items-center justify-center font-semibold'>
            <span className='cursor-pointer bg-[#208572] rounded-full px-3 py-[3px] grid place-items-center'>1</span>
            <span className='cursor-pointer text-[#292929] rounded-full px-2'>2</span>
            <span className='cursor-pointer text-[#292929] rounded-full px-2'>3</span>
            <span className='cursor-pointer text-[#292929] rounded-full px-2'>4</span>
          </div>
          <div className='rounded-full text-sm flex justify-center items-center text-[#292929] cursor-pointer'>
            <ChevronRight size={26} strokeWidth={3} />
          </div>
        </section>
      </div>
      <Navbar />
    </section>
  )
}
