export interface Product {
  id: string
  imageUrl: string
  name: string
  price: number
  status: string
  categoryId: string
}

export type ProductToCart = Product & { quantity: number }
