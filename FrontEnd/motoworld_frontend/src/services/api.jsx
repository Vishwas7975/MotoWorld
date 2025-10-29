import axios from "axios";

const API_BASE_URL = "http://localhost:8080";

export const registerUser = async (userData) => {
  return await axios.post("http://localhost:8080/api/auth/register", formData);
};

export const loginUser = async (userData) => {
  return await axios.post(`${API_BASE_URL}/auth/login`, userData);
};