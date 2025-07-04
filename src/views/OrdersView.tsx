// import { ClipboardList, Search } from 'lucide-react';
// import Navbar from '../components/Navbar';

// export default function OrdersView() {
//   return (
//     <section className="select-none relative flex flex-col justify-between max-w-sm m-auto min-h-screen bg-white"
//       style={{ fontFamily: "Oswald" }}
//     >
//       <div className='px-2 mb-28'>
//         <div className='flex items-center justify-center gap-2'>
//           <ClipboardList color='#208572' size={32} strokeWidth={2} />
//           <h1 className="text-center text-[#208572] font-bold text-2xl py-5">
//             Mis Ordenes
//           </h1>
//         </div>
//         <div className='relative flex-1'>
//           <Search color="#208572" size={21} strokeWidth={2.5} className='absolute top-2 left-3' />
//           <input
//             type="search"
//             placeholder="Buscar"
//             style={{ fontFamily: "Inter" }}
//             className="w-full rounded-xl bg-transparent px-5 pl-12 py-2 text-[#52514F] border border-[#29292930] placeholder:text-[#52514F] text-sm placeholder:text-sm placeholder:font-normal outline-none"
//           />
//         </div>
//         <p className='text-[#292929] text-[11px] pt-1' style={{ fontFamily: "Inter" }}>Las ordenes con mas de 30 dias despues de haberse completado o terminado pasaran a ser eliminadas.</p>
//         <section className='flex flex-col gap-4 mt-5'>
//           <div className='flex flex-col justify-between gap-3 outline outline-[#29292930] p-2.5 rounded-[10px]'>
//             <div className='flex justify-between items-start px-2'>
//               <div>
//                 <p className='text-[#292929] font-semibold'>Orden: AX234-12345D</p>
//                 <p className='text-[#6C6763] text-xs pt-0.5'>4 productos - 2025/03/21</p>
//               </div>
//               <span className='text-[#0A5144] border-2 border-[#20857330] text-xs font-medium p-[5px] rounded-[5px]'>
//                 Pendiente
//               </span>
//             </div>
//             <div className='flex justify-between items-end text-[#208572] px-2'>
//               <p className='font-semibold text-[26px]'>S/ 527.00</p>
//               <span className='font-semibold border border-[#208572] rounded-[5px] px-2.5 py-[5px] cursor-pointer'>Mas Detalles</span>
//             </div>
//           </div>
//           <div className='flex flex-col justify-between gap-3 outline outline-[#29292930] p-2.5 rounded-[10px]'>
//             <div className='flex justify-between items-start px-2'>
//               <div>
//                 <p className='text-[#292929] font-semibold'>Orden: AX234-12345D</p>
//                 <p className='text-[#6C6763] text-xs pt-0.5'>4 productos - 2025/03/21</p>
//               </div>
//               <span className='text-[#0A5144] bg-[#20857230] text-xs font-medium p-[5px] rounded-[5px]'>
//                 En Proceso
//               </span>
//             </div>
//             <div className='flex justify-between items-end text-[#208572] px-2'>
//               <p className='font-semibold text-[26px]'>S/ 527.00</p>
//               <span className='font-semibold border border-[#208572] rounded-[5px] px-2.5 py-[5px] cursor-pointer'>Mas Detalles</span>
//             </div>
//           </div>
//           <div className='flex flex-col justify-between gap-3 outline outline-[#29292930] p-2.5 rounded-[10px]'>
//             <div className='flex justify-between items-start px-2'>
//               <div>
//                 <p className='text-[#292929] font-semibold'>Orden: AX234-12345D</p>
//                 <p className='text-[#6C6763] text-xs pt-0.5'>4 productos - 2025/03/21</p>
//               </div>
//               <span className='bg-[#208572] text-xs font-medium p-[5px] rounded-[5px]'>
//                 Completado
//               </span>
//             </div>
//             <div className='flex justify-between items-end text-[#208572] px-2'>
//               <p className='font-semibold text-[26px]'>S/ 527.00</p>
//               <span className='font-semibold border border-[#208572] rounded-[5px] px-2.5 py-[5px] cursor-pointer'>Mas Detalles</span>
//             </div>
//           </div>
//         </section>
//       </div>
//       <Navbar />
//     </section>
//   )
// }
