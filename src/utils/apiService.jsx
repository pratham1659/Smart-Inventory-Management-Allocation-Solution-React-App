import axios from "axios";

const API_BASE_URL = "http://localhost:8000";

export const fetchItems = async (filters) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/items`, { params: filters });
    return response.data;
  } catch (error) {
    console.error("Error fetching items:", error);
    throw error;
  }
};
