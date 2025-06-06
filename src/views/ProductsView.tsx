import { Search, SlidersHorizontal, Heart, Plus, ChevronRight } from 'lucide-react';
import Navbar from '../shared/Navbar';

export default function ProductsView() {
  return (
    <section className="max-w-sm m-auto bg-white" style={{ fontFamily: "'Roboto', sans-serif" }}>
      <h1 className="text-center text-[#29386F] font-bold text-4xl py-5">Mi Tienda</h1>
      {/* SECCION DE SEARCH */}
      <section className='flex px-2 gap-4'>
        <div className='relative flex-1'>
          <Search color="#29386F" strokeWidth={2.5} className='absolute top-2 left-3' />
          <input
            type="search"
            placeholder="Buscar"
            className="w-full rounded-xl border border-[#52514F80] bg-transparent px-5 pl-12 py-2 text-[#52514F] placeholder:text-[#52514F] placeholder:text-lg placeholder:font-normal outline-none"
          />
        </div>
        <div className='bg-[#29386F] grid place-items-center rounded-xl cursor-pointer px-4'>
          <SlidersHorizontal className='w-7 h-7' />
        </div>
      </section>
      <hr className='text-[#52514F50] my-5' />
      {/* SECCION DE PRODUCTS */}
      <section className='grid grid-cols-2 gap-5 mx-2'>
        <div>
          <div className='relative'>
            <img
              className='rounded-[10px] object-cover border border-[#947D0D]'
              src="/images/test_img1.jpg"
              alt="imagen_1"
            />
            <Heart strokeWidth={2} color="#A22E30" className='cursor-pointer absolute top-2 right-2' />
          </div>
          <div className='mt-2 flex items-start justify-between'>
            <div className='text-[#1E1E1E]'>
              <p className='font-medium text-sm'>Tarta de Chocolate</p>
              <p className='text-lg font-bold leading-5'>S/10.00</p>
            </div>
            <div className='bg-[#29386F] grid place-items-center rounded-lg cursor-pointer'>
              <Plus className='w-9 h-9' />
            </div>
          </div>
        </div>
        <div>
          <div className='relative'>
            <img
              className=' rounded-[10px] object-cover border border-[#947D0D]'
              src="/images/test_img2.jpg"
              alt="imagen_1"
            />
            <Heart strokeWidth={2} color="#A22E30" className='cursor-pointer absolute top-2 right-2' />
          </div>
          <div className='mt-2 flex items-start justify-between'>
            <div className='text-[#1E1E1E]'>
              <p className='font-medium text-sm'>Table Android 10''</p>
              <p className='text-lg font-bold leading-5'>S/499.00</p>
            </div>
            <div className='bg-[#29386F] grid place-items-center rounded-lg cursor-pointer'>
              <Plus className='w-9 h-9' />
            </div>
          </div>
        </div>
        <div>
          <div className='relative'>
            <img
              className=' rounded-[10px] object-cover border border-[#947D0D]'
              src="/images/test_img3.webp"
              alt="imagen_1"
            />
            <Heart strokeWidth={2} color="#A22E30" className='cursor-pointer absolute top-2 right-2' />
          </div>
          <div className='mt-2 flex items-start justify-between'>
            <div className='text-[#1E1E1E]'>
              <p className='font-medium text-sm'>Mini impresora termica</p>
              <p className='text-lg font-bold leading-5'>S/129.00</p>
            </div>
            <div className='bg-[#29386F] grid place-items-center rounded-lg cursor-pointer'>
              <Plus className='w-9 h-9' />
            </div>
          </div>
        </div>
        <div>
          <div className='relative'>
            <img
              className=' rounded-[10px] object-cover border border-[#947D0D]'
              src="/images/test_img4.webp"
              alt="imagen_1"
            />
            <Heart strokeWidth={2} color="#A22E30" className='cursor-pointer absolute top-2 right-2' />
          </div>
          <div className='mt-2 flex items-start justify-between gap-2'>
            <div className='text-[#1E1E1E]'>
              <p className='font-medium text-sm'>Tabla de picar de bambu</p>
              <p className='text-lg font-bold leading-5'>S/18.50</p>
            </div>
            <div className='bg-[#29386F] grid place-items-center rounded-lg cursor-pointer'>
              <Plus className='w-9 h-9' />
            </div>
          </div>
        </div>
      </section>
      {/* PAGINADOR */}
      <section className='flex justify-center gap-3 my-8 mb-12'>
        <div className='text-lg flex gap-1 justify-center font-semibold'>
          <span className='cursor-pointer bg-[#292929] rounded-full px-2.5'>1</span>
          <span className='cursor-pointer text-[#292929] rounded-full px-2'>2</span>
          <span className='cursor-pointer text-[#292929] rounded-full px-2'>3</span>
          <span className='cursor-pointer text-[#292929] rounded-full px-2'>4</span>
        </div>
        <div className='flex items-center text-[#292929] cursor-pointer'>
          <p className='font-medium'>Siguiente</p>
          <ChevronRight size={20} className=''/>
        </div>
      </section>
      <Navbar />
    </section>
  )
}
