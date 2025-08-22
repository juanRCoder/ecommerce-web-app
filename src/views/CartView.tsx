import { ShoppingCart } from 'lucide-react';
import { MainHeader, MainNavbar, ProductCard } from '@/components';
import { useCartStore } from '@/stores/cart.store';
import { useNavigate } from 'react-router-dom';

export default function CartView() {
  const navigate = useNavigate();
  const { products } = useCartStore()
  const totalPrice = products.reduce((acc, item) => acc + item.price * item.quantity, 0)

  return (
    <section className="select-none relative flex flex-col justify-between max-w-sm m-auto min-h-screen bg-white"
      style={{ fontFamily: "Oswald" }}
    >
      <div className="flex-1 px-2 pb-3">
        <MainHeader title="MI CARRITO" icon={ShoppingCart} />
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
        <button onClick={()=>navigate('/checkout')} className='bg-[#208572] text-white w-full mt-4 py-2 rounded-xl cursor-pointer'>
          REGISTRAR PAGO
        </button>
      </div>
      <MainNavbar />
    </section>
  )
}
