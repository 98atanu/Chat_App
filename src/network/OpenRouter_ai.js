import axios from "axios";

export const OpenRouter_ai = (message) => {
  return axios.post(
    "https://openrouter.ai/api/v1/chat/completions",
    {
      model: "gryphe/mythomist-7b:free",
      messages: [{ role: "user", content: message }],
    },
    {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
      },
    }
  );
};
