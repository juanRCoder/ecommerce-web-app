import { getAllCategories } from '@/services/category.service';
import type { Category } from '@/types/category.types';
import { useQuery } from '@tanstack/react-query';

export const useGetAllCategories = () => {
  return useQuery<Category[], Error>({
    queryKey: ["categories"],
    queryFn: getAllCategories,
    staleTime: 1000 * 60 * 5, 
    retry: 1,
    refetchOnWindowFocus: false,
  });
}
