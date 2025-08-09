import { useEffect, useState } from 'react';
import { Search, SlidersHorizontal, Store } from 'lucide-react';

import { MainHeader, MainNavbar, ProductCard, ProductFilters } from '@/components';
import { useGetAllProducts, useCustomDebounce } from '@/hooks';
import { BasePagination } from '@/shared/BasePagination';
import { useProductStore } from '@/stores/products.store';
import type { Product } from '@/types/products.types';


export default function ProductsView() {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [totalPages, setTotalPages] = useState<number>(1)
  const [openFilters, setOpenFilters] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');


  const { selectedCategory, minPrice, maxPrice, cleanFilters, resetCategory } = useProductStore();

  const debouncedSearchTerm = useCustomDebounce(searchTerm, 300);
  const { data, isLoading } = useGetAllProducts(currentPage, selectedCategory, debouncedSearchTerm, minPrice, maxPrice);

  useEffect(() => {
    if (data?.totalPages) setTotalPages(data.totalPages);
  }, [data?.totalPages, setTotalPages]);

  useEffect(() => {
    setCurrentPage(1); // Reset page when search or category changes
  }, [debouncedSearchTerm, selectedCategory, setCurrentPage]);

  return (
    <section
      className="select-none relative flex flex-col justify-between max-w-sm m-auto min-h-screen bg-white"
      style={{ fontFamily: "Oswald" }}
    >
      <div className="px-2 mb-28">
        <MainHeader title="Mi Tienda Online" icon={Store}/>
        <section className="flex gap-4">
          <div className="relative flex-1">
            <Search color="#208572" size={21} strokeWidth={2.5} className="absolute top-2 left-3" />
            <input
              type="search"
              placeholder={`Buscar`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ fontFamily: "Inter" }}
              className="w-full rounded-xl bg-transparent px-5 pl-12 py-2 text-[#52514F] border border-[#29292930] placeholder:text-[#52514F] text-sm placeholder:text-sm placeholder:font-normal outline-none"
            />
          </div>
          <div
            onClick={() => setOpenFilters(!openFilters)}
            className="bg-[#208572] grid place-items-center rounded-xl cursor-pointer px-3.5"
          >
            <SlidersHorizontal size={24} />
          </div>
        </section>
        {openFilters && <ProductFilters />}
        <section className="flex flex-col gap-4 mt-5">
          {isLoading ? (
            <p>Cargando productos...</p>
          ) : data?.products?.length === 0 ? (
            <>
              <p className="text-center text-gray-600">
                No se encontró ningún producto con el término "<span className="font-medium">{searchTerm}</span>"
                {openFilters && selectedCategory && (
                  <> en la categoría <b>{selectedCategory}</b></>
                )}
              </p>
              {openFilters && (
                <div className="flex flex-col justify-center gap-2 text-center text-gray-600">
                  <p onClick={resetCategory} className="underline text-[#208572] cursor-pointer">
                    Ver en todas las categorías
                  </p>
                  <p onClick={cleanFilters} className="underline text-[#208572] cursor-pointer">
                    Limpiar filtros
                  </p>
                </div>
              )}
            </>
          ) : (
            <div className="grid grid-cols-2 gap-4">
              {data?.products.map((product: Product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          )}
        </section>
        <BasePagination
          currentPage={currentPage}
          totalPages={totalPages}
          changePage={setCurrentPage}
        />
      </div>
      <MainNavbar />
    </section>
  );
}
