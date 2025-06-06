import { Store, ShoppingCart, ClipboardList, User } from 'lucide-react';

export default function Navbar() {
  return (
    <section className='relative rounded-tl-xl rounded-tr-xl bg-[#29386F] py-3 flex-wrap gap-3 flex justify-evenly pt-5'>
      <span className="absolute top-0 left-[34px] border-l-12 border-r-14 border-t-12 border-l-transparent border-r-transparent border-t-[#FFC859]" />
      <div className='flex flex-col items-center cursor-pointer'>
        <Store color='#FFC859' size={32} />
        <p className='text-[#FFC859] text-sm'>Tienda</p>
      </div>
      <div className='flex flex-col items-center cursor-pointer'>
        <ShoppingCart color='#FFFFFF' size={32} />
        <p className='text-white text-sm'>Mi Carrito</p>
      </div>
      <div className='flex flex-col items-center cursor-pointer'>
        <ClipboardList color='#FFFFFF' size={32} />
        <p className='text-white text-sm'>Mis Ordenes</p>
      </div>
      <div className='flex flex-col items-center cursor-pointer'>
        <User color='#FFFFFF' size={32} />
        <p className='text-white text-sm'>Cuenta</p>
      </div>
    </section>
  )
}
