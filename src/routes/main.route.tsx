import { createBrowserRouter } from 'react-router-dom';
import ProductsView from '@/views/ProductsView';
import CartView from '@/views/CartView';
import CheckoutView from '@/views/CheckoutView';

export const mainRouter = createBrowserRouter([
  { path: '/', element: <ProductsView /> },
  { path: '/cart', element: <CartView /> },
  { path: '/checkout', element: <CheckoutView /> }
]);
