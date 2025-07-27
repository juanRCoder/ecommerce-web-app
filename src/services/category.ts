import axios from "axios";

const apiUrl = import.meta.env.VITE_URI_DEV;
const prefijo = `${apiUrl}/api`;

export const getAllCategories = async () => {
  try {
    const { data } = await axios.get(`${prefijo}/categories`);
    return data
  } catch (error) {
    console.error("[getProducts] Error fetching data:", error);
  }
};
