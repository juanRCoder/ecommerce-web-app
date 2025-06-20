import { Heart } from 'lucide-react';
import { useState } from 'react';

type ProductCardComponentProps = {
  name: string
  price: number
  imageUrl: string
  isFavorite: boolean
}

export default function ProductCardComponent({ name, price, imageUrl, isFavorite }: ProductCardComponentProps) {
  const [markFavorite, setMarkFavorite] = useState<boolean>(isFavorite);

  return (
    <div className='relative flex justify-between p-2.5 outline outline-[#29292930] rounded-[10px]'>
      <figure className='max-[300px]:w-[50%] w-[35%]'>
        <img
          src={imageUrl}
          className='outline object-contain'
          alt={name}
        />
      </figure>
      <div className='flex flex-col justify-between pl-2 w-1/2'>
        <div className='flex justify-between gap-2.5'>
          <p className='text-sm text-[#292929]'>{name}</p>
          <Heart
            color='#208572'
            size={22}
            className='cursor-pointer flex-shrink-0'
            fill={markFavorite ? "#208572" : "none"}
            onClick={() => setMarkFavorite(!markFavorite)}
          />
        </div>
        <div className='flex flex-col gap-2.5'>
          <p className='text-[#208572] text-2xl font-semibold tracking-[-1px]'>S/ {price.toFixed(2)}</p>
          <button className='outline outline-[#208572] py-[5px] px-2.5 text-[#208572] rounded-[5px]'>AGREGAR</button>
        </div>
      </div>
    </div>
  )
}

