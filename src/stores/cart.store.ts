import { Product } from "@/types/products.types";
import { create } from "zustand";

type ProductToCart = Product & { quantity: number };

type cartStoreType = {
  products: ProductToCart[];
  addProduct: (product: ProductToCart) => void;
  removeProduct: (productId: string) => void;
  updateProductFromCart: (productId: string, quantity: number) => void;
};

export const useCartStore = create<cartStoreType>((set, get) => ({
  products: JSON.parse(localStorage.getItem("cart") || "[]"),

  addProduct: (newProduct) =>
    set((state) => {
      const existingProduct = state.products.find((p) => p.id == newProduct.id);

      const updatedCart = existingProduct
        ? state.products.map((p) =>
            p.id === newProduct.id ? { ...p, quantity: p.quantity + 1 } : p
          )
        : [...state.products, { ...newProduct, quantity: 1 }];

      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return { products: updatedCart };
    }),

  removeProduct: (productId) =>
    set((state) => {
      const updatedCart = state.products.filter((p) => p.id !== productId);

      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return { products: updatedCart };
    }),

  updateProductFromCart: (productId, quantity) => {
    if (quantity === 0) {
      get().removeProduct(productId);
    } else {
      const updatedCart = get().products.map((p) =>
        p.id === productId ? { ...p, quantity } : p
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      set({ products: updatedCart });
    }
  },
}));
