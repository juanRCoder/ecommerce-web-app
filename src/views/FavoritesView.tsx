// import { Heart } from 'lucide-react';
// import Navbar from '../components/Navbar';
// import ProductCard from '../components/ProductCard';


// export default function FavoritesView() {

//   const productFavorites = [
//     { name: "Gaseosa Coca-Cola de 3L", price: 9, imageUrl: "/images/test_img1.jpg", isFavorite: true },
//     { name: "Gaseosa Coca-Cola de 3LL", price: 9, imageUrl: "/images/test_img1.jpg", isFavorite: true },
//     { name: "Gaseosa Coca-Cola de 3LL", price: 9, imageUrl: "/images/test_img1.jpg", isFavorite: true }
//   ]

//   return (
//     <section className="select-none relative flex flex-col justify-between max-w-sm m-auto min-h-screen bg-white"
//       style={{ fontFamily: "Oswald" }}
//     >
//       <div className='px-2 mb-28'>
//         <div className='flex items-center justify-center gap-2'>
//           <Heart color='#208572' size={32} strokeWidth={2} fill="#208572" />
//           <h1 className="text-center text-[#208572] font-bold text-2xl py-5">
//             Favoritos
//           </h1>
//         </div>
//         <section className='flex flex-col gap-4 mt-5'>
//           {productFavorites.map((product, index) => (
//             <ProductCard key={index} {...product} />
//           ))}
//         </section>
//       </div>
//       <Navbar />
//     </section>
//   )
// }
