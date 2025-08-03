import { Store, ShoppingCart } from 'lucide-react';

export const MainNavbar = () => {
  return (
    <section className='fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-sm bg-[#208572] py-1 flex-wrap gap-3 flex justify-evenly z-50'>
      <div className='flex flex-col items-center cursor-pointer my-2 py-2 rounded-lg w-20 hover:bg-[#FFFFFF33]'>
        <Store color='#FFFFFF' size={32} />
        <p className='text-white'>Tienda</p>
      </div>
      <div className='flex flex-col items-center cursor-pointer my-2 py-2 rounded-lg w-20 hover:bg-[#FFFFFF33]'>
        <ShoppingCart color='#FFFFFF' size={32} />
        <p className='text-white'>Mi Carrito</p>
      </div>
    </section>
  )
}
