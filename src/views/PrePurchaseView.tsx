import { ShoppingCart } from 'lucide-react';
import Navbar from '../shared/Navbar';
import { useState } from 'react';

export default function PrePurchaseView() {
  const [changeText, setChangeText] = useState<boolean>(false)
  return (
    <section className="select-none relative flex flex-col justify-between max-w-sm m-auto min-h-screen bg-white"
      style={{ fontFamily: "Oswald" }}
    >
      <div className="px-2 mb-28">
        <div className='flex items-center justify-center gap-2'>
          <ShoppingCart color='#208572' size={32} strokeWidth={2} />
          <h1 className="text-center text-[#208572] font-bold text-2xl py-5">
            Pre-Compra
          </h1>
        </div>
        <div className='flex flex-col gap-2'>
          <h3 className='text-[#292929] font-semibold text-lg'>METODOS DE PAGO</h3>
          <h4 className='text-[#208572] font-semibold'>TITULAR: JUAN RAMIREZ</h4>
        </div>
        <section className='mt-2 flex flex-col gap-3'>
          <figure className='flex gap-2'>
            <img
              src='/images/test_img2.jpg'
              className='object-cover max-[300px]:w-1/2 w-[40%] h-12'
            />
            <div className='font-medium'>
              <p className='text-[#292929]'>CUENTA BANCARIA</p>
              <p className='text-[#208572]'>123-1234567890</p>
            </div>
          </figure>
          <figure className='flex gap-2'>
            <img
              src='/images/test_img2.jpg'
              className='object-cover max-[300px]:w-1/2 w-[40%] h-12'
            />
            <div className='font-medium'>
              <p className='text-[#292929]'>CUENTA BANCARIA</p>
              <p className='text-[#208572]'>123-1234567890</p>
            </div>
          </figure>
          <figure className='flex items-center gap-2'>
            <img
              src='/images/test_img3.png'
              className='object-cover max-[300px]:w-1/2 w-[40%] h-12'
            />
            <div className='font-medium'>
              <p className='text-[#292929]'>BILLETERA MOVIL</p>
              <p className='text-[#208572]'>+00 123456789</p>
            </div>
          </figure>
        </section>
        <figure className='mt-4'>
          <h3 className='text-[#292929] font-medium text-lg'>
            Codigo QR billtera movil:
          </h3>
          <img
            src='/images/test_img4.png'
            className=' max-[300px]:w-1/2 w-[40%]'
          />
        </figure>
        <p className='text-[#292929] text-xs font-medium my-3'>IMAGEN SUBIDA: imagen.png</p>
        <div className='flex flex-col gap-3 font-medium'>
          <button onClick={()=>setChangeText(!changeText)} className='cursor-pointer w-full bg-[#208572] py-[5px] rounded-[5px]'>
            {changeText ? 'COMPRAR' : 'SUBIR COMPROBANTE DE PAGO'}
          </button>
          <button className='cursor-pointer w-full outline outline-[#208572] py-[5px] text-[#208572] rounded-[5px]'>
            PAGAR EN DOMICILIO
          </button>
        </div>
      </div>
      <Navbar />
    </section>
  )
}
