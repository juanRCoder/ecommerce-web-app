import { ShoppingCart, Plus, Minus } from 'lucide-react';
import Navbar from '../shared/Navbar';

export default function CartView() {
  return (
    <section className="select-none relative flex flex-col justify-between max-w-sm m-auto min-h-screen bg-white"
      style={{ fontFamily: "Oswald" }}
    >
      <div className="px-2 mb-28">
        <div className='flex items-center justify-center gap-2'>
          <ShoppingCart color='#208572' size={32} strokeWidth={2} />
          <h1 className="text-center text-[#208572] font-bold text-2xl py-5">
            Mi Carrito
          </h1>
        </div>
        <h3 className='text-[#292929] font-semibold text-lg'>MIS PRODUCTOS</h3>
        <section className='flex flex-col gap-4 mt-4'>
          <div className='relative flex justify-between p-2.5 outline outline-[#29292930] rounded-[10px]'>
            <div className='flex flex-col justify-between items-center max-[300px]:w-[50%] w-[27%] gap-3'>
              <figure className='w-[80%]'>
                <img
                  src='/images/test_img1.jpg'
                  className='outline object-contain'
                  alt='Gaseosa Coca-Cola de 3L'
                />
              </figure>
              <div className='p-[5px] inline-flex items-center justify-between outline outline-[#20857280] rounded-[5px] w-24'>
                <span className='bg-[#208572] rounded-[5px] inline-block'><Minus size={27} /></span>
                <span className='text-[#292929] font-medium'>1</span>
                <span className='bg-[#208572] rounded-[5px] inline-block'><Plus size={27} /></span>
              </div>
            </div>
            <div className='flex flex-col justify-between pl-2 w-1/2'>
              <p className='text-sm text-[#292929]'>Gaseosa Coca-Cola de 3L</p>
              <div className='flex flex-col gap-2.5'>
                <p className='text-[#208572] text-2xl font-semibold tracking-[-1px]'>S/ 9.00</p>
                <button className='outline outline-[#208572] py-[5px] px-2.5 text-[#208572] rounded-[5px]'>REMOVER</button>
              </div>
            </div>
          </div>
          <div className='relative flex justify-between p-2.5 outline outline-[#29292930] rounded-[10px]'>
            <div className='flex flex-col justify-between items-center max-[300px]:w-[50%] w-[27%] gap-3'>
              <figure className='w-[80%]'>
                <img
                  src='/images/test_img1.jpg'
                  className='outline object-contain'
                  alt='Gaseosa Coca-Cola de 3L'
                />
              </figure>
              <div className='p-[5px] inline-flex items-center justify-between outline outline-[#20857280] rounded-[5px] w-24'>
                <span className='bg-[#208572] rounded-[5px] inline-block'><Minus size={27} /></span>
                <span className='text-[#292929] font-medium'>1</span>
                <span className='bg-[#208572] rounded-[5px] inline-block'><Plus size={27} /></span>
              </div>
            </div>
            <div className='flex flex-col justify-between pl-2 w-1/2'>
              <p className='text-sm text-[#292929]'>Gaseosa Coca-Cola de 3L</p>
              <div className='flex flex-col gap-2.5'>
                <p className='text-[#208572] text-2xl font-semibold tracking-[-1px]'>S/ 9.00</p>
                <button className='outline outline-[#208572] py-[5px] px-2.5 text-[#208572] rounded-[5px]'>REMOVER</button>
              </div>
            </div>
          </div>
          <div className='relative flex justify-between p-2.5 outline outline-[#29292930] rounded-[10px]'>
            <div className='flex flex-col justify-between items-center max-[300px]:w-[50%] w-[27%] gap-3'>
              <figure className='w-[80%]'>
                <img
                  src='/images/test_img1.jpg'
                  className='outline object-contain'
                  alt='Gaseosa Coca-Cola de 3L'
                />
              </figure>
              <div className='p-[5px] inline-flex items-center justify-between outline outline-[#20857280] rounded-[5px] w-24'>
                <span className='bg-[#208572] rounded-[5px] inline-block'><Minus size={27} /></span>
                <span className='text-[#292929] font-medium'>1</span>
                <span className='bg-[#208572] rounded-[5px] inline-block'><Plus size={27} /></span>
              </div>
            </div>
            <div className='flex flex-col justify-between pl-2 w-1/2'>
              <p className='text-sm text-[#292929]'>Gaseosa Coca-Cola de 3L</p>
              <div className='flex flex-col gap-2.5'>
                <p className='text-[#208572] text-2xl font-semibold tracking-[-1px]'>S/ 9.00</p>
                <button className='outline outline-[#208572] py-[5px] px-2.5 text-[#208572] rounded-[5px]'>REMOVER</button>
              </div>
            </div>
          </div>
        </section>
        <div className='text-[#292929] flex justify-between items-center mt-8'>
          <h3 className='font-semibold'>PRECIO TOTAL</h3>
          <p className='font-bold text-2xl'>S/ 527.50</p>
        </div>
        <section className='mt-8'>
          <h3 className='text-[#292929] font-semibold text-lg my-4'>METODO DE ENTREGA</h3>
          <div className='flex gap-3'>
            <button className='cursor-pointer w-full outline outline-[#208572] py-[5px] text-[#208572] rounded-[5px]'>
              LOCAL
            </button>
            <button className='cursor-pointer w-full outline outline-[#208572] py-[5px] text-[#208572] rounded-[5px]'>
              DOMICILIO
            </button>
          </div>
          <button className='cursor-pointer mt-5 w-full outline outline-[#208572] py-[5px] bg-[#208572] text-white rounded-[5px]'>REALIZAR PEDIDO</button>
        </section>
      </div>
      <Navbar />
    </section>
  )
}
