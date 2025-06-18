import { Store, ShoppingCart, ClipboardList, User } from 'lucide-react';

export default function NavbarComponent() {
  return (
    <section className='fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-sm bg-[#208572] py-3 flex-wrap gap-3 flex justify-evenly pt-5 z-50'>
      <span className="absolute top-0 left-[40px] border-l-12 border-r-14 border-t-12 border-l-transparent border-r-transparent border-t-white" />
      <div className='flex flex-col items-center cursor-pointer'>
        <Store color='#FFFFFF' size={32} />
        <p className='text-white text-sm'>Tienda</p>
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
