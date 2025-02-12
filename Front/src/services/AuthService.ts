import { api } from "./Api";

interface AuthResponse {
  token: string;
  user: {
    name: string;
    email: string;
    id: string;
    pw: string;
  };
}

// 회원가입 API
export const registerUser = async (name: string, email: string, id: string, pw: string) => {
  try {
    const response = await api.post<AuthResponse>("/auth/register", {
      name,
      email,
      id,
      pw,
    });
    return response.data;
  } catch (error) {
    console.error("Register Error:", error);
    throw error;
  }
};

// 로그인 API
export const loginUser = async (id: string, pw: string) => {
  try {
    const response = await api.post<AuthResponse>("/auth/login", {
      id,
      pw,
    });
    if (response.data.token) {
      localStorage.setItem("token", response.data.token); // 로그인 시 토큰 저장
    }
    return response.data;
  } catch (error) {
    console.error("Login Error:", error);
    throw error;
  }
};

// 로그아웃 API (토큰 삭제)
export const logoutUser = () => {
  localStorage.removeItem("token");
};
