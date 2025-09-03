import { Voucher } from "@/types/order.types";
import { create } from "zustand";

type VoucherStoreType = {
  data: Voucher;
  setData: (data: Voucher) => void;
};

export const useVoucherStore = create<VoucherStoreType>((set) => ({
  data: {
    nOrden: "",
    phone: 0,
    name: "",
    payment: "",
    delivery: "",
  },
  setData: (data: Voucher) => set({ data }),
}));
