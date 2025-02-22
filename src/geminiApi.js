import axios from 'axios';

const API_KEY = 'AIzaSyCkqZi1gLos0cvdxZEcuwL2i5wH0D8RoWg';
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`;

export const askGemini = async (message) => {
  try {
    const response = await axios.post(
      API_URL,
      {
        contents: [
          { role: "user", parts: [{ text: `Тек қазақша жауап бер: ${message}` }] }
        ]
      }
    );

    return response.data.candidates[0]?.content?.parts[0]?.text || "Жауап алынбады.";
  } catch (error) {
    console.error("Error fetching response:", error.response?.data || error.message);
    return `Қате орын алды: ${error.response?.data?.error?.message || "Кейінірек қайталап көріңіз."}`;
  }
};