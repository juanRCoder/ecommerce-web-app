import { useEffect, useState } from 'react';
import { Store } from 'lucide-react';
import { Navbar } from '@/components/common/Navbar';
import { Pager } from '@/components/common/Pager';
import { ProductCard } from '@/components/ProductCard';
import { ProductFilters } from '@/components/ProductFilters';
import type { Product } from '@/types/product';
import { usePagerStore } from '@/stores/pager'
import { useCategoryStore } from '@/stores/category';
import { useGetAllProducts } from '@/hooks/useGetAllProducts'
import { useCustomDebounce } from '@/hooks/useDebounce'
import { ProductSearch } from '@/components/ProductSearch';


export default function Products() {
  const [openFilters, setOpenFilters] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const debouncedSearchTerm = useCustomDebounce(searchTerm, 300);

  const { selectedCategories } = useCategoryStore();
  const { page, setTotalPages, setPage } = usePagerStore();
  const { data, isLoading } = useGetAllProducts(page, selectedCategories, debouncedSearchTerm);

  useEffect(() => {
    if (data?.totalPages) setTotalPages(data.totalPages)
  }, [data?.totalPages, setTotalPages])

  useEffect(() => {
    setPage(1); // reset pagination when search or categories change
  }, [debouncedSearchTerm, selectedCategories, setPage])

  return (
    <section
      className="select-none relative flex flex-col justify-between max-w-sm m-auto min-h-screen bg-white"
      style={{ fontFamily: "Oswald" }}
    >
      <div className="px-2 mb-28">
        <div className="flex items-center justify-center gap-2">
          <Store color="#208572" size={32} strokeWidth={2} />
          <h1 className="text-center text-[#208572] font-bold text-2xl py-5">
            Mi Tienda Online
          </h1>
        </div>
        <ProductSearch
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          openFilters={openFilters}
          setOpenFilters={setOpenFilters}
        />
        {openFilters && <ProductFilters />}
        <section className="flex flex-col gap-4 mt-5">
          {isLoading && <p className='text-black'>Cargando productos...</p>}
          {data?.products?.map((product: Product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </section>
        <Pager />
      </div>
      <Navbar />
    </section>
  );
}
