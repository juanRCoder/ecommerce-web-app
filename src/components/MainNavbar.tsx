import { useLocation, useNavigate } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import { menuItems } from '@/utils/items';
import { useCartStore } from '@/stores/cart.store';

export const MainNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { products } = useCartStore()

  const handleNavigate = (path: string) => navigate(path)
  return (
    <section className='flex flex-wrap bg-[#208572] py-1 gap-3 justify-evenly z-50'>
      {menuItems.map((item, index) => {
        const Icon = item.icon;
        const isActive = location.pathname === item.path;
        return (
          <div
            key={index}
            onClick={() => handleNavigate(item.path)}
            className={`relative flex flex-col items-center cursor-pointer my-2 py-2 rounded-lg w-20
             ${isActive ? 'bg-[#FFFFFF33]' : ''}
             `}
          >
            <Icon color="#FFFFFF" size={32} />
            <p className='text-white'>{item.label}</p>
            {item.label === "Mi Carrito" && products.length > 0 && (
              <>
                <MessageCircle fill='#292929' size={48} className='absolute -top-8 right-0' />
                <span className={`absolute -top-5 ${products.length > 9 ? 'right-4' : 'right-5'}`}>
                  {products.length}
                </span>
              </>
            )}
          </div>
        );
      })}
    </section>
  )
}
