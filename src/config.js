// Use environment variable in production, fallback to localhost in development
const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:8088";
console.log("API URL:", apiUrl); // Debug log
export const API_URL = apiUrl; 