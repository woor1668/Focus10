import { api } from "./Api";

interface AiResponse {
    token: string;
    user: {
      uuid: string;
      ai: string;
      apiKey: string;
    };
  }

export const CreateUsersApi = async (uuid: string, ai: string, apiKey: string) => {
  try {
    const response = await api.post<AiResponse>("/ai/create", {
      uuid,
      ai,
      apiKey,
    });
    return response.data;
  } catch (error) {
    console.error("create Error:", error);
    throw error;
  }
};