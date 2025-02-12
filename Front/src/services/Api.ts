import axios from "axios";

const BACKEND_URL = "http://localhost:5000";

export const api = axios.create({
  baseURL: BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// 요청을 보낼 때 인증 토큰을 자동으로 포함하는 인터셉터 추가
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // 토큰 저장소 (로컬스토리지)
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
