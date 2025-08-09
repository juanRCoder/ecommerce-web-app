import { Minus, Plus, Trash } from "lucide-react";

interface ProductCardProps {
  name: string;
  price: number;
  imageUrl: string;
  cartMode?: boolean
}

export const ProductCard = ({ name, price, imageUrl, cartMode = false }: ProductCardProps) => {
  return (
    <div className={`outline outline-[#29292930] rounded-[10px] 
      ${cartMode ? 'flex flex-col min-[250px]:flex-row min-[250px]:gap-5 justify-between min-[250px]:pl-2' : ''}`}
    >
      <figure className="flex items-center justify-center">
        <img
          src={imageUrl || "https://www.opelgtsource.com/assets/default_product.png"}
          className={`outline object-contain ${cartMode ? '!w-40 !h-40' : ''}`}
          alt={name}
        />
      </figure>
      <div className={`flex flex-col justify-between p-2 ${cartMode ? 'w-full gap-2' : ''}`}>
        <div className="flex flex-col gap-1">
          <p className='text-[#292929]'>{name}</p>
          <p className='text-[#208572] text-2xl font-semibold tracking-[-1px] text-nowrap'>S/ {price && price.toFixed(2)}</p>
        </div>
        {cartMode ? (
          <div className="flex gap-2 justify-between">
            <div className='p-[5px] inline-flex items-center justify-between outline outline-[#20857280] rounded-[5px] w-fit'>
              <span className='bg-[#208572] rounded-[5px] p-1 px-2'><Minus size={20} /></span>
              <span className='text-[#292929] font-medium w-10 text-center text-lg'>88</span>
              <span className='bg-[#208572] rounded-[5px] p-1 px-2'><Plus size={20} /></span>
            </div>
            <span className='bg-[#b82a2a] rounded-full px-2 grid place-items-center'><Trash size={20} /></span>
          </div>
        ) : (
          <button className='outline outline-[#208572] py-[5px] text-[#208572] rounded-[5px] cursor-pointer mt-2'>
            AGREGAR
          </button>
        )}
      </div>



    </div >
  )
}