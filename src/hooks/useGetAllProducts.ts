import { getAllProducts } from "@/services/product.service";
import { useQuery } from "@tanstack/react-query";

export const useGetAllProducts = (
  page: number,
  category: string,
  search: string,
) => {
  return useQuery({
    queryKey: ["products", page, category, search],
    queryFn: ({ queryKey }: { queryKey: [string, number, string, string]}) => {
      const [, page, category, search ] = queryKey;
      return getAllProducts(page, category, search);
    },
    staleTime: 1000 * 60 * 5,
    retry: 1,
    refetchOnWindowFocus: false,
  });
};
