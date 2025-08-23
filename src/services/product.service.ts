import { buildQueryParams } from "@/utils/buildQueryParams";
import axios from "axios";

const apiUrl = import.meta.env.VITE_URI_DEV;
const prefijo = `${apiUrl}/api`;

export const getAllProducts = async (
  page: number = 1,
  category: string,
  search?: string
) => {
  try {
    const querys = buildQueryParams({ page, limit: 4, category, search });
    const { data } = await axios.get(`${prefijo}/products?${querys}`);
    return data;
  } catch (error) {
    console.error("[getProducts] Error fetching data:", error);
  }
};
