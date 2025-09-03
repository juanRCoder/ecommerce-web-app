import { createOrder } from "@/services/order.service";
import { Voucher } from "@/types/order.types";
import { useMutation } from "@tanstack/react-query";

export const useCreateOrder = () => {
   return useMutation<Voucher, Error, FormData>({
    mutationFn: (formData) =>
      createOrder(formData)
  });
};