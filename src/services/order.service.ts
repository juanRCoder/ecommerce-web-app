import axios from "axios";

const apiUrl = import.meta.env.VITE_URI_DEV;
const prefijo = `${apiUrl}/api`;

export const createOrder = async (data: FormData) => {
  try {
    const response = await axios.post(`${prefijo}/orders`, data);
    return response.data.data;
  } catch (error) {
    console.error("Error creating order:", error);
    throw error;
  }
}
