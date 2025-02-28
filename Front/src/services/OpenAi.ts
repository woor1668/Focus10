import { OpenAI } from "openai";

export const checkOpenAiKey = async (apiKey: string) => {
  try {
    const response = await fetch("https://api.openai.com/v1/engines", {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    if (response.ok) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const OpenAIWord = async (apiKey: string,conversationText: string): Promise<string | null> => {
  try {
    // 전달받은 apiKey를 사용해 OpenAI 클라이언트를 생성합니다.
    const openaiClient = new OpenAI({ apiKey });
    const completion = await openaiClient.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: `${conversationText} 언어 단어 공부 봇`},
        { role: "user", content: `${conversationText}에 맞는 언어를 알려줘`},
      ],
    });

    const message = completion.choices[0].message;
    if (message && message.content) {
      return message.content;
    } else {
      console.error("응답에 message.content가 없습니다.");
      return null;
    }
  } catch (error) {
    console.error("챔피언 추천 중 오류 발생:", error);
    return null;
  }
};
