import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8080", // URL backend
  timeout: 10000, // Timeout 10s
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor để xử lý lỗi (tùy chọn)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error);
    return Promise.reject(error);
  }
);

export default api;
