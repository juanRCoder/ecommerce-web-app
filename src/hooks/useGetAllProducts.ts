import { getAllProducts } from "@/services/product";
import { useQuery } from "@tanstack/react-query";

export const useGetAllProducts = (
  page: number,
  category: string,
  search: string,
  minPrice: number,
  maxPrice: number
) => {
  return useQuery({
    queryKey: ["products", page, category, search, minPrice, maxPrice],
    queryFn: ({ queryKey }: { queryKey: [string, number, string, string, number, number]}) => {
      const [, page, category, search, minPrice, maxPrice] = queryKey;
      return getAllProducts(page, category, search, minPrice, maxPrice);
    },
    staleTime: 1000 * 60 * 5,
    retry: 1,
    refetchOnWindowFocus: false,
  });
};
