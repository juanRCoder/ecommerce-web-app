import { getAllProducts } from "@/services/product";
import { useQuery } from "@tanstack/react-query";

export const useGetAllProducts = (
  page: number,
  categories: string[],
  search: string
) => {
  return useQuery({
    queryKey: ["products", page, categories, search],
    queryFn: ({ queryKey }: { queryKey: [string, number, string[], string]}) => {
      const [, page, categories, search] = queryKey;
      return getAllProducts(page, categories, search);
    },
    staleTime: 1000 * 60 * 5,
    retry: 1,
    refetchOnWindowFocus: false,
  });
};
