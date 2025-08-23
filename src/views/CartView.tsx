import { ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { MainHeader, MainNavbar, ProductCard } from '@/components';
import { BaseButton } from '@/shared';
import { useCartStore } from '@/stores/cart.store';

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
        <BaseButton
          content="REGISTRAR PAGO"
          color="secondary"
          className='mt-4'
          onClick={() => navigate('/checkout')}
        />
      </div>
      <MainNavbar />
    </section>
  )
}
