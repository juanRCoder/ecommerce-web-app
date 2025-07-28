import { buildQueryParams } from "@/utils/buildQueryParams";
import axios from "axios";

const apiUrl = import.meta.env.VITE_URI_DEV;
const prefijo = `${apiUrl}/api`;

export const getAllProducts = async (
  page: number = 1,
  category: string,
  search?: string,
  minPrice: number = 0,
  maxPrice: number = 500
) => {
  try {
    const querys = buildQueryParams({ page, limit: 3, category, search, minPrice, maxPrice });
    const { data } = await axios.get(`${prefijo}/products?${querys}`);
    return data;
  } catch (error) {
    console.error("[getProducts] Error fetching data:", error);
  }
};
