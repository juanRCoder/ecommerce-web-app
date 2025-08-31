import { createOrder } from "@/services/order.service";
import { useMutation } from "@tanstack/react-query";

export const useCreateOrder = () => {
   return useMutation<{message: string}, Error, FormData>({
    mutationFn: (formData) =>
      createOrder(formData)
  });
};