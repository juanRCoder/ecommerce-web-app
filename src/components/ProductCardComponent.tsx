import { Heart } from 'lucide-react';

export default function ProductCardComponent() {
  return (
    <div className='relative flex justify-between p-2.5 outline outline-[#29292930] rounded-[10px]'>
      <figure className='max-[300px]:w-[50%] w-[35%]'>
        <img
          src='/images/test_img1.jpg'
          className='outline object-contain'
          alt='Gaseosa Coca-Cola de 3L'
        />
      </figure>
      <div className='flex flex-col justify-between pl-2 w-1/2'>
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
  )
}

