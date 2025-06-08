import { Search, SlidersHorizontal, Store, ChevronRight, Heart } from 'lucide-react';
import Navbar from '../shared/Navbar';

export default function ProductsView() {
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
              className="w-full rounded-xl bg-transparent px-5 pl-12 py-2 text-[#52514F] border border-[#208572] placeholder:text-[#52514F] text-sm placeholder:text-sm placeholder:font-normal outline-none"
            />
          </div>
          <div className='bg-[#208572] grid place-items-center rounded-xl cursor-pointer px-3.5'>
            <SlidersHorizontal size={24} />
          </div>
        </section>
        <section className='flex flex-col gap-4 mt-5'>
          <div className='relative flex justify-between p-2.5 outline outline-[#208572] rounded-[10px]'>
            <img
              src='/images/test_img1.jpg'
              className='w-1/3 object-contain'
              alt='Gaseosa Coca-Cola de 3L'
            />
            <div className='flex flex-col justify-between w-2/3 pl-2'>
              <div className='flex justify-between gap-2.5'>
                <p className='text-sm text-[#292929]'>Gaseosa Coca-Cola de 3L</p>
                <Heart color='#208572' size={22} className='flex-shrink-0' />
              </div>
              <div className='flex flex-col gap-2.5'>
                <p className='text-[#208572] text-2xl font-semibold tracking-[-1px]'>S/ 9.00</p>
                <button className='bg-[#208572] py-[5px] px-2.5 text-white rounded-[5px]'>AGREGAR</button>
              </div>
            </div>
          </div>
          <div className='relative flex justify-between p-2.5 outline outline-[#208572] rounded-[10px]'>
            <img
              src='/images/test_img1.jpg'
              className='w-1/3 object-contain'
              alt='Gaseosa Coca-Cola de 3L'
            />
            <div className='flex flex-col justify-between w-2/3 pl-2'>
              <div className='flex justify-between gap-2.5'>
                <p className='text-sm text-[#292929]'>Gaseosa Coca-Cola de 3L</p>
                <Heart color='#208572' size={22} className='flex-shrink-0' />
              </div>
              <div className='flex flex-col gap-2.5'>
                <p className='text-[#208572] text-2xl font-semibold tracking-[-1px]'>S/ 9.00</p>
                <button className='bg-[#208572] py-[5px] px-2.5 text-white rounded-[5px]'>AGREGAR</button>
              </div>
            </div>
          </div>
          <div className='relative flex justify-between p-2.5 outline outline-[#208572] rounded-[10px]'>
            <img
              src='/images/test_img1.jpg'
              className='w-1/3 object-contain'
              alt='Gaseosa Coca-Cola de 3L'
            />
            <div className='flex flex-col justify-between w-2/3 pl-2 gap-2'>
              <div className='flex justify-between gap-2.5'>
                <p className='text-sm text-[#292929]'>Gaseosa Coca-Cola de 3L</p>
                <Heart color='#208572' size={22} className='flex-shrink-0' />
              </div>
              <div className='flex flex-col gap-2.5'>
                <p className='text-[#208572] text-2xl font-semibold tracking-[-1px]'>S/ 9.00</p>
                <button className='bg-[#208572] py-[5px] px-2.5 text-white rounded-[5px]'>AGREGAR</button>
              </div>
            </div>
          </div>
        </section>
        <section className='flex justify-center gap-3 my-8 mb-28' style={{ fontFamily: "Oswald" }}>
          <div className='text-sm flex gap-1 items-center justify-center font-semibold'>
            <span className='cursor-pointer bg-[#208572] rounded-full px-2.5 py-[2px] grid place-items-center'>1</span>
            <span className='cursor-pointer text-[#292929] rounded-full px-2'>2</span>
            <span className='cursor-pointer text-[#292929] rounded-full px-2'>3</span>
            <span className='cursor-pointer text-[#292929] rounded-full px-2'>4</span>
          </div>
          <div className='bg-[#29292950] p-1.5 rounded-full text-sm flex justify-center items-center text-[#292929] cursor-pointer'>
            <ChevronRight size={22} strokeWidth={3} />
          </div>
        </section>
      </div>
      <Navbar />
    </section>
  )
}
