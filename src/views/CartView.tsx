import { ShoppingCart } from 'lucide-react';
import { MainHeader, MainNavbar, ProductCard } from '@/components';
import { useCartStore } from '@/stores/cart.store';

export default function CartView() {
  const { products } = useCartStore()
  const totalPrice = products.reduce((acc, item) => acc + item.price * item.quantity, 0)
  
  return (
    <section className="select-none relative flex flex-col justify-between max-w-sm m-auto min-h-screen bg-white"
      style={{ fontFamily: "Oswald" }}
    >
      <div className="px-2 mb-28">
        <MainHeader title="Mi Carrito" icon={ShoppingCart}/>
        <h3 className='text-[#292929] font-semibold text-lg'>MIS PRODUCTOS</h3>
        <section className='flex flex-col gap-4 mt-4'>
          {products.map(product => (
            <ProductCard key={product.id} product={product} cartMode={true} />
          ))}
        </section>
        <div className='text-[#292929] flex justify-between items-center mt-8 flex-wrap'>
          <h3 className='font-semibold'>PRECIO TOTAL</h3>
          <p className='font-bold text-2xl text-nowrap'>S/ {totalPrice.toFixed(2)}</p>
        </div>
      </div>
      <MainNavbar />
    </section>
  )
}
