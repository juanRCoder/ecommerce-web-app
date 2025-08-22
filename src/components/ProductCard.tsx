import { Minus, Plus, Trash2 } from "lucide-react";
import { useCartStore } from "@/stores/cart.store";
import { ProductToCart } from "@/types/products.types";

interface ProductCardProps {
  product: ProductToCart,
  cartMode?: boolean
}

export const ProductCard = ({ product, cartMode = false }: ProductCardProps) => {
  const { addProduct, removeProduct, updateProductFromCart } = useCartStore();

  return (
    <div className={`flex relative outline outline-[#29292930] rounded-[10px]
      ${cartMode ? 'flex-row max-[320px]:flex-col' : 'flex-col'}`}
    >
      <div className={`flex items-center justify-center gap-2 ${cartMode ? 'py-2' : 'flex-col'}`}>
        <img
          src={product.imageUrl || "https://www.opelgtsource.com/assets/default_product.png"}
          className={`outline object-contain 
            ${cartMode ? '!w-[120px] !h-[120px] !flex-shrink-0' : 'max-[320px]:!w-[120px] max-[320px]:!h-[120px] max-[320px]:!flex-shrink-0'}
          `}
          alt={product.name}
        />
      </div>
      <div className={`flex flex-col p-2 ${cartMode ? 'gap-2 justify-center min-[320px]:mr-12' : ''}`}>
        <div className="flex flex-col gap-1">
          <p className="text-[#292929] whitespace-normal">
            {product.name}
          </p>
          <p className="text-[#208572] text-2xl font-semibold tracking-[-1px] whitespace-normal">
            S/ {cartMode ? (product.price * product.quantity).toFixed(2) : product.price && product.price.toFixed(2)}
          </p>
        </div>
        {cartMode ? (
          <div className='inline-flex items-center justify-between rounded-[5px] min-[320px]:w-24 mt-2'>
            <span 
              onClick={() => updateProductFromCart(product.id, product.quantity - 1)}
              className='bg-[#208572] rounded-[5px] p-1.5 flex-1 grid place-items-center cursor-pointer'
            >
              <Minus size={16} />
            </span>
            <span className='text-[#292929] font-medium w-7 text-center text-lg'>{product.quantity}</span>
            <span
              onClick={() => updateProductFromCart(product.id, product.quantity + 1)}
              className='bg-[#208572] rounded-[5px] p-1.5 flex-1 grid place-items-center cursor-pointer'
            >
              <Plus size={16} />
            </span>
          </div>
        ) : (
          <button
            onClick={() => addProduct(product)}
            className='outline outline-[#208572] py-[5px] text-[#208572] rounded-[5px] cursor-pointer mt-2'
          >
            AGREGAR
          </button>
        )}
      </div>
      {cartMode && (
        <div
          onClick={() => removeProduct(product.id)}
          className='absolute top-2 right-2 outline-1 bg-[#a7273833] p-2 cursor-pointer rounded-full'
        >
          <Trash2 color="#a72738dd" />
        </div>
      )}
    </div >
  )
}