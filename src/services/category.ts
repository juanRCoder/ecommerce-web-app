const apiUrl = import.meta.env.VITE_URI_DEV;
const prefijo = `${apiUrl}/api`;

export const getAllCategories = async () => {
  try {
    const response = await fetch(`${prefijo}/categories`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("[getProducts] Error fetching data:", error);
  }
};
