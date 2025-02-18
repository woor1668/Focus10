import { api } from "./Api";

interface AiResponse {
    token: string;
    user: {
      uuid: string;
      ai: string;
      apiKey: string;
    };
  }

export const CreateUsersApi = async (name: string, email: string, id: string, pw: string) => {
  try {
    const response = await api.post<AiResponse>("/ai/create", {
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