const apiUrl = import.meta.env.VITE_URI_DEV;
const prefijo = `${apiUrl}/api`;

export const getProducts = async (page: number, categories?: string) => {
  try {
    const limitProducts = 1;
    const hasCategory = categories ? `&categories=${categories}` : "";
    const response = await fetch(
      `${prefijo}/products?page=${page.toString()}&limit=${limitProducts.toString()}${hasCategory}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("[getProducts] Error fetching data:", error);
  }
};
